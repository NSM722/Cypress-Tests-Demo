# Cypress Demo Repo

[Demo Testing App](https://react-redux.realworld.io/#/login?_k=k38bj6 "follow link")

[Tutorial Github Repo](https://github.com/Omnipotence8/QAMilestoneAcademy "follow link")

[Best practices of selecting elements](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements "read docs")

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

## Misc

### Random issue when initially pushing the first commit

1. First, remove the incorrect remote URL by using the following command:

```bash
git remote remove origin
```

2. Add the correct remote URL:

```bash
git remote add origin https://github.com/NSM722/Cypress-Tests-Demo.git
```

3. Verify that the correct remote URL has been added by running the following command:

```bash
git remote -v
```

4. Finally, you can proceed with pushing your work using the corrected remote URL:

```bash
git push -u origin main
```

### Adding an SSH key to my local machine

1. Run the following command on the terminal

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Replace "<your_email@example.com>" with the email associated with your GitHub account

Press Enter to accept the default file location and passphrase (you can set a passphrase if you prefer, but it's not required)

2. Add the SSH key to your GitHub account. Run the following command to copy the public key to your clipboard:

```bash
cat ~/.ssh/id_ed25519.pub | xclip -selection clipboard
```

3. Visit the "SSH and GPG keys" settings page in your GitHub account. You can find it at [SSH and GPG keys Link](https://github.com/settings/keys). Click on "New SSH key" or "Add SSH key" and paste the key from your clipboard into the provided field. Give it a descriptive title if desired, and click "Add SSH key" to save it

4. Update the remote URL in your Git repository to use the SSH URL instead of the HTTPS URL. Run the following command:

```bash
git remote set-url origin git@github.com:NSM722/Cypress-Tests-Demo.git
```

5. You should now be able to push your work using the SSH authentication. Try running the following command:

```bash
git push -u origin main
```

### Project Configuration

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io',
  },
})
```

By setting up the above configuration, Cypress will automatically prepend this base URL to all the relative URLs you use with the cy.visit() command

This way one doesn't need to specify the complete/full URL on every spec file

### Example of running a specific test file

```bash
npx cypress run --spec cypress/e2e/customs.cy.js 
```

By doing the above the `videos` and `screenshots` folders will be added to the project

The **video** folder contains a record of the successful test run on the specific file

If any tests were to fail they would be included in the **screenshots** folder

**_To run the above test on a browser one would use the following command_**

```bash
npx cypress run --spec cypress/e2e/customs.cy.js --BROWSER FLAG-- --BROWSER NAME--

npx cypress run --spec cypress/e2e/customs.cy.js --browser firefox
```

### API - Testing

[Dummy api example](https://dummy.restapiexample.com/ "read docs")

```js
describe('API Testing', () => {

 // write the baseURL in only this file to avoid overriding other files when using baseUrl in the config file
 Cypress.config('baseUrl', 'https://dummy.restapiexample.com/api/v1')

 it('GET-fetch/read data', () => {
  // command to make HTTP requests, it's default method is GET
  cy.request('GET', '/employees').then((response) => {
  // assert that the response has a property of status with the success value of 200
 expect(response).to.have.property('status', 200)
 // assert that response.body has content
 expect(response.body).to.not.be.null
 // assert that response.body.data is an array with 24 elements
 expect(response.body.data).to.have.length(24)
 })
})

 it('POST-create a new item in the DB', () => {
  const item = {
   "name": "test",
   "salary": "123",
   "age": "23",
  }
 cy.request({method:'POST', url:'/create', body:item, failOnStatusCode: false})
 })

 it('PUT-updating the first record in the DB is unauthorized', () => {
  const updateInfo = {'name':'testing1'}
  cy.request({method:'PUT', url:'/update/1', body:updateInfo, failOnStatusCode: false}).its('status').should('eq', 429)
 })
})
```
