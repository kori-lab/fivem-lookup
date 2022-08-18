<h1 align="center">
    <small>Collect information about a Fivem server 👀</small>
</h1>

<p align=center>
    <a href="https://www.npmjs.com/package/@kori_xyz/fivem-lookup" rel="nofollow"><img src="https://img.shields.io/npm/v/@kori_xyz/fivem-lookup.svg" alt="NPM latest version" data-canonical-src="https://img.shields.io/npm/v/@kori_xyz/fivem-lookup/next.svg" style="max-width: 100%;"></a>
    <a href="https://www.npmjs.com/package/@kori_xyz/fivem-lookup" rel="nofollow"><img src="https://img.shields.io/npm/dm/@kori_xyz/fivem-lookup.svg" alt="Downloads" data-canonical-src="https://img.shields.io/npm/dm/@kori_xyz/fivem-lookup.svg" style="max-width: 100%;"></a>
</p>

## Install
> Available for any computer running [nodejs](https://nodejs.org/)

yarn
```bash
yarn add @kori_xyz/fivem-lookup
```

npm 
```bash
npm install @kori_xyz/fivem-lookup
```
## Example

```javascript
import FivemServer from "@kori_xyz/fivem-lookup";

const server = new FivemServer("131.196.198.220:30120");

// number of milliseconds it took to ping the server
console.log(await server.ping());

// information about the server
console.log(await server.info());

// an array of players on the server
console.log(await server.players());
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE.md](https://github.com/kori-lab/fivem-lookup/blob/main/LICENSE.md) file for details.