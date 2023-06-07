describe('Create a post then be able to mark & un-mark it as favorite', () => {
  // login 
  it('', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
    // verify the app title, title() returns the title of the current active page
    cy.title().should('eq', 'Conduit')
    // verify the protocol of the site is https:
    cy.location('protocol').should('eq', 'https:')
    // find the email address text box
    // and type the text to passed into it
    cy.get('input[type="email"]').type('477wl0@m.womenhack.com')
    // get the input element of type password
    // specify the password
    cy.get('input[type="password"').type('pxj74MNBep5r99T')
    // get the button
    // contains() matches the element with the mentioned text
    // test the btn exists, it's visible & clickable
    cy.get('.btn').contains('Sign in').should('be.visible').click({force: true})
    /**
     * assert "Your Feed" text appears on the page immediately 
     * after clicking the sign in button, extend the time from
     * the default of 4 seconds this is because the commands
     * get() and contains have this default timer
     */
    cy.contains('Your Feed', {timeout: 100000}).should('be.visible')

  })

  // create a new post 
  it('Creates new post', () => {
    cy.contains('New Post').click()
    // verify the URL hash on this page 
    // https://react-redux.realworld.io/#/editor?_k=t015os
    cy.hash().should('include', '#/editor') // or cy.location('hash').should('include', '#/editor')
    // verifying the inputs
    cy.get('input[placeholder="Article Title"]').type('Test 2')
    cy.get('input[placeholder="What\'s this article about"]').type('More Testing')
    cy.get('input[placeholder="Write your article (in markdown)"]').type('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...')
    cy.get('input[placeholder="Enter tags"]').type('#ministry of testing')
    cy.contains('Publish Article').click()
    /**
     * after publishing the above article, verify the URL
     * contains the word article https://react-redux.realworld.io/#/article/Test-2-188725?_k=n8k7vr
     * url() returns the URL of the active page
     */
    cy.url().should('include', 'article')
  })

  // mark or un-mark the post
  it('Mark or un-mark the post as a favorite', () => {
    // verify the user name
    cy.get('.nav-link').contains('hackerlady').click()
    // verify the text My Articles is visible
    cy.contains('My Articles').should('be.visible')
    // verify the favorite icon is clickable
    cy.get('.ion-heart').click()
    // verify the text Favorited Articles is present and clickable
    cy.contains('Favorited Articles').click()
    /**
     * verify after marking the post as favorite and moving to Favorited Articles
     * the URL will contain the text 'favorites'
     */
    cy.url().should('include', 'favorites')
    // verify the favorite icon can be clicked again to un-mark the post
    cy.get('.ion-heart').click()
    // when the above step is done verify the text that appears
    cy.contains('No articles are here... yet.').should('be.visible')
  })
})
