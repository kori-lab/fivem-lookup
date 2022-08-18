<h1 align="center">
    <a href="https://crawlee.dev">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/apify/crawlee/master/website/static/img/crawlee-dark.svg?sanitize=true">
          <img alt="Crawlee" src="https://raw.githubusercontent.com/apify/crawlee/master/website/static/img/crawlee-light.svg?sanitize=true" width="500">
        </picture>
    </a>
    <br>
    <small>The scalable web crawling and scraping library for JavaScript</small>
</h1>

<p align=center>
    <a href="https://www.npmjs.com/package/@crawlee/core" rel="nofollow"><img src="https://img.shields.io/npm/v/@crawlee/core.svg" alt="NPM latest version" data-canonical-src="https://img.shields.io/npm/v/@crawlee/core/next.svg" style="max-width: 100%;"></a>
    <a href="https://www.npmjs.com/package/@crawlee/core" rel="nofollow"><img src="https://img.shields.io/npm/dm/@crawlee/core.svg" alt="Downloads" data-canonical-src="https://img.shields.io/npm/dm/@crawlee/core.svg" style="max-width: 100%;"></a>
    <a href="https://discord.gg/jyEM2PRvMU" rel="nofollow"><img src="https://img.shields.io/discord/801163717915574323?label=discord" alt="Chat on discord" data-canonical-src="https://img.shields.io/discord/801163717915574323?label=discord" style="max-width: 100%;"></a>
    <a href="https://github.com/apify/crawlee/actions/workflows/test-and-release.yml"><img src="https://github.com/apify/crawlee/actions/workflows/test-and-release.yml/badge.svg?branch=master" alt="Build Status" style="max-width: 100%;"></a>
</p>

>👉👉👉 Crawlee is the successor to [Apify SDK](https://sdk.apify.com). 🎉 Fully rewritten in **TypeScript** for a better developer experience, and with even more powerful anti-blocking features. The interface is almost the same as Apify SDK so upgrading is a breeze. Read [the upgrading guide](https://crawlee.dev/docs/upgrading/upgrading-to-v3) to learn about the changes. 👈👈👈

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