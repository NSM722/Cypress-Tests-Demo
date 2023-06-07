# Cypress Demo Repo

[Demo Testing App](https://react-redux.realworld.io/#/login?_k=k38bj6 "follow link")

Create a `package.json` dependencies file

```bash
npm init -y
```

Install Cypress package

```bash
npm install cypress --save-dev
```

Launch the Cypress desktop app/launchpad

```bash
npx cypress open
```

Install Linux dependencies

```bash
sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

Create a jsconfig.json file on the root

```js
{
    "include": [
        "./node_modules/cypress",
        "cypress/**/*.js"
    ]
}
```
