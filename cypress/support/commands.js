// this file is loaded before any test files are 
// evaluated via an import statement in the supportFile
Cypress.Commands.add('LogIn', () => {
    // this link launches the application
    cy.visit('/#/login')
    // verify the app title, title() returns the title of the current active page
    cy.title().should('eq', 'Conduit')
    // verify the protocol of the site is https:
    cy.location('protocol').should('eq', 'https:')
    // find the email address text/input box
    // and type the text(email) to pass into it
    cy.get('input[type="email"]').type('477wl0@m.womenhack.com')
    // get the input element of type password
    // specify the password(my password)
    cy.get('input[type="password"').type('pxj74MNBep5r99T')
    // get the button by class name
    // contains() matches the element with the mentioned text
    // test the btn exists, it's visible & clickable
    cy.get('.btn').contains('Sign in').should('be.visible').click({force: true})
    /**
     * assert "Your Feed" text appears on the page immediately 
     * after clicking the sign in button, extend the time to verify
     * this whole process from the default timer of 4 seconds this
     * is because the commands get() and contains() have this default timer
     */
    cy.contains('Your Feed', {timeout: 100000}).should('be.visible')
})