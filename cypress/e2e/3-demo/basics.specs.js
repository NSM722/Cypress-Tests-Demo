describe('login', () => {
    it('sign in', () => {
        cy.visit('https://react-redux.realworld.io/#/login')
        // find the email address text box
        // and type the text to passed into it
        cy.get('input[type="email"]').type('477wl0@m.womenhack.com')
        // get the input element of type password
        // specify the password
        cy.get('input[type="password"').type('pxj74MNBep5r99T')
        // get the button
        // contains() matches the element with the mentioned text
        // test the btn is clickable
        cy.get('.btn').contains('Sign in').click()
    })
})