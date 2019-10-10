const assertOptions = (option, keys) => {
    const missing = keys.filter((key) => {
        return !option[key];
    });
    if (missing.length > 0) {
        throw new Error(`Missing options required by host ${option.host}: \`${missing.join('`, `')}\``);
    }
};

const pathfinders = new Map([
    ['github.com', (name, option) => {
        assertOptions(option, ['owner']);
        return [option.owner, name, 'raw', option.version || 'HEAD', option.file || 'main.js'];
    }],
    ['unpkg.com', (name, option) => {
        const owner = option.owner ? `@${option.owner}` : '';
        const moduleId = name + (option.version ? `@${option.version}` : '');
        return [owner, moduleId, option.file];
    }]
]);

const moduleUrl = (name, option) => {
    const config = {
        host : 'unpkg.com',
        ...option
    };
    if (!name) {
        throw new Error('The `name` argument is required');
    }
    if (typeof name !== 'string') {
        throw new TypeError('The `name` argument must be a string');
    }
    const findPath = pathfinders.get(config.host) || pathfinders.get('unpkg.com');
    return `https://${config.host}/` + findPath(name, config).filter(Boolean).join('/');
};

export default moduleUrl;
