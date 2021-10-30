<p align="center">
  <a href="https://github.com/self-sg/beneficiary-pwa-nextjs/actions?query=workflow%3Aci+branch%3Amain">
    <img alt="Github Actions Build Status" src="https://img.shields.io/github/workflow/status/self-sg/beneficiary-pwa-nextjs/ci?style=flat-square"></a>
  <a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
</p>

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/self-sg/beneficiary-pwa-nextjs)

# Progressive Web App Example

This example uses [`next-pwa`](https://github.com/shadowwalker/next-pwa) to create a progressive web app (PWA) powered by [Workbox](https://developers.google.com/web/tools/workbox/).

## Deploy your own

### Heroku

Can deploy at Heroku. `main` is currently deployed at ask `myyk` if you need access to the project in Heroku:

https://pacific-tor-68576.herokuapp.com/

### Vercel

Can fork and deploy at [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example).

## How to use

### Local start

- Install dependencies like `node`, `yarn`, `typescript`. Note versions in `package.json`.

- Run the commands in [.gitpod.yml](.gitpod.yml)'s `init` section in your terminal.

- If everything is installed correctly, `yarn run ci` should pass without any file changes on `main`.

- Then `yarn run dev`

### How to contribute

- We've setup automation to try to keep `main` always deployable.

- Your workflow should look pretty standard like this: https://guides.github.com/introduction/flow/
