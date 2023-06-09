describe('Create a post then be able to mark & un-mark it as favorite', () => {
    // login 
    it('User can log in', () => {
      // this link launches the application
      cy.visit('/#/login')
      // verify the app title, title() returns the title of the current active page
      cy.title().should('eq', 'Conduit')
      // verify the protocol of the site is https:
      cy.location('protocol').should('eq', 'https:')
      cy.get('form').within(($form) => {
        // get the form element and search for elements within it
        cy.get('input[type = "email"]').type('477wl0@m.womenhack.com')
        cy.get('input[type = "password"]').type('pxj74MNBep5r99T')
        // submits the form yielded from within
        cy.root().submit()
      })
      /**
       * assert "Your Feed" text appears on the page immediately 
       * after clicking the sign in button, extend the time to verify
       * this whole process from the default timer of 4 seconds this
       * is because the commands get() and contains() have this default timer
       */
      cy.contains('Your Feed', {timeout: 100000}).should('be.visible')
  
    })
  
    // create a new post 
    it('Creates new post', () => {
      /**
       * get the parent ul element
       * get all child elements then
       * particular child element
       */
      cy.get('ul.navbar-nav').children().contains('New Post').click()

      cy.get('form').within(($form) => {
        // get the first input element within the form
        cy.get('input').first().type('Some Test')
        // specify the index of the second element
        cy.get('input').eq(1).type('E2E testing with cypress')
        // get the last input element
        cy.get('textarea').last().type('Mary had a little lamb which was as white as snow')
        cy.get('input[placeholder="Enter tags"]').type('#ministry of testing')
        cy.contains('Publish Article').click()
      })
      cy.url().should('include', 'article')
    })
  
    // mark or un-mark the post
    it('Mark or un-mark the post as a favorite', () => {
      /**
       * verify the user name by getting the parent element
       * then get all the child elements and specify one
       * clickable child element with particular text
       */
      cy.get('ul.navbar-nav').children().contains('hackerLady').click() // this is failing
      console.log(cy.get('ul.navbar-nav').children())
      // verify the text My Articles text is visible
      cy.contains('My Articles').should('be.visible')

      // get the first post/article which is the recently created one
      cy.get('.ion-heart').first().click()
      // verify the text Favorited Articles is present and clickable
      cy.contains('Favorited Articles').click()
      /**
       * verify after marking the post as favorite and moving to Favorited Articles
       * the URL will contain the text 'favorites' https://react-redux.realworld.io/#/@hackerLady/favorites?_k=i4uq8j
       */
      cy.url().should('include', 'favorites')
      // verify the favorite icon can be clicked again to un-mark the recent post
      cy.get('.ion-heart').first().click()
      // reload the page after un-marking the post as favorite
      cy.reload()
      // when the above step is done verify the text that appears
      cy.contains('No articles are here... yet.').should('be.visible')
      // Navigate back or forward to the previous or next URL in the browser's history.
      // cy.go('back') // or cy.go(-1)
      // cy.go('forward') // cy.go(1)
    })
  })
  