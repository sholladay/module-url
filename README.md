# module-url [![Build status for Module Url](https://travis-ci.com/sholladay/module-url.svg "Build Status")](https://travis-ci.com/sholladay/module-url "Builds")

> Get the URL of a module on any registry

## Why?

 - Works with any registry, proxy, or hosting platform.
 - Uses smart defaults specific to each registry.
 - Use it to build your own registry with smart pathing.

## Usage

```js
import moduleUrl from 'https://github.com/sholladay/module-url/raw/HEAD/main.js';

moduleUrl('ky');
//=> 'https://unpkg.com/ky'

moduleUrl('ky', { owner : 'sholladay' });
//=> 'https://unpkg.com/@sholladay/ky'

moduleUrl('ky', { file : 'mod.ts', owner : 'sholladay', version : 'v0.15.0' });
//=> 'https://unpkg.com/@sholladay/ky@v0.15.0/mod.ts'

moduleUrl('ky', { host : 'github.com', owner : 'sholladay' });
//=> 'https://github.com/sholladay/ky/raw/HEAD/main.js'

moduleUrl('ky', { file : 'mod.ts', host : 'github.com', owner : 'sholladay', version : 'v0.15.0' });
//=> 'https://github.com/sholladay/ky/raw/v0.15.0/mod.ts'
```

## API

### moduleUrl(name, option)

Returns a URL string that indicates where the given module `name` can or would be found on the given host.

#### name

Type: `string`<br>
Example: `'ky'`

A module name.

#### option

Type: `object`

##### file

Type: `string`<br>
Example: `'index.js'`

A path for a specific file within the overall module, such as the main entry point. Can span multiple segments, e.g. `lib/main.js`. The default depends on the conventions of the host, however you may want to set your own default for your specific use case.

##### host

Type: `string`<br>
Default: `'unpkg.com'`<br>
Example: `'github.com'`

A URL host (i.e. domain or IP address and optional port number) where the module can or would be located at a registry, CDN, or other hosting provider. The host is used as-is for the host of the returned URL, but it's also used to construct the path based on the conventions used by the given host. If the host is unrecognized, the path will be constructed using the same structure as if it were `unpkg.com`.

##### owner

Type: `string`<br>
Example: `'sholladay'`

A namespace for the module, such as the username of an individual or organization. Typically used to avoid naming collisions with other modules. Some hosts require an `owner`, as they lack a global module space.

##### version

Type: `string`<br>
Example: `'v1.0.0'` or `'HEAD'`

A version identifier for the module. The semantics and available values depend on the capabilities of the host, though generally it can be a git tag, branch name, commit hash, or similar. By default, the `HEAD` branch is used for git repositories and the latest tagged release is used for traditional module registries and CDNs (by omitting the version).

## Contributing

See our [contributing guidelines](https://github.com/sholladay/module-url/blob/master/CONTRIBUTING.md "Guidelines for participating in this project") for more details.

1. [Fork it](https://github.com/sholladay/module-url/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/module-url/compare "Submit code to this project for review").

## License

[MPL-2.0](https://github.com/sholladay/module-url/blob/master/LICENSE "License for module-url") © [Seth Holladay](https://seth-holladay.com "Author of module-url")

Go make something, dang it.
