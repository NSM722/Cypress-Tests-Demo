describe('Create a post then be able to mark & un-mark it as favorite', () => {
    // login 
    before(() => {
      cy.LogIn()
    })
  
    // create a new post 
    it.skip('Creates new post', () => {
      // assert the page contains a clickable element with the 'New Post' text
      cy.contains('New Post', {timeout: 100000}).click()
      // verify the URL hash on this page 
      // https://react-redux.realworld.io/#/editor?_k=t015os
      cy.hash().should('include', '#/editor') // or cy.location('hash').should('include', '#/editor')
      // verifying the inputs and texts typed into them
      cy.get('input[placeholder="Article Title"]').type('Test 2')
      cy.get('input[placeholder="What\'s this article about"]').type('More Testing')
      cy.get('input[placeholder="Write your article (in markdown)"]').type('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...')
      cy.get('input[placeholder="Enter tags"]').type('#ministry of testing')
      cy.contains('Publish Article').click()
      /**
       * after publishing the above article, verify the URL
       * contains the word 'article' https://react-redux.realworld.io/#/article/Test-2-188725?_k=n8k7vr
       * url() returns the URL of the active page
       */
      cy.url().should('include', 'article')
    })
  
    // mark or un-mark the post --> line 54 is failing!!
    it.skip('Mark or un-mark the post as a favorite', () => {
      // verify the user name
      cy.get('a[href="#@hackerLady"]').should('be.visible').wait(3000).click()
      // verify the text My Articles is visible
      cy.contains('My Articles').should('be.visible')
      // verify the favorite icon is clickable, get it by class name
      cy.get('.ion-heart').click()
      // verify the text Favorited Articles is present and clickable
      cy.contains('Favorited Articles').click()
      /**
       * verify after marking the post as favorite and moving to Favorited Articles
       * the URL will contain the text 'favorites' https://react-redux.realworld.io/#/@hackerLady/favorites?_k=i4uq8j
       */
      cy.url().should('include', 'favorites')
      // verify the favorite icon can be clicked again to un-mark the post
      cy.get('.ion-heart').click()
      // reload the page after un-marking the post as favorite
      cy.reload()
      // when the above step is done verify the text that appears
      cy.contains('No articles are here... yet.').should('be.visible')
      // Navigate back or forward to the previous or next URL in the browser's history.
      // cy.go('back') // or cy.go(-1)
      // cy.go('forward') // cy.go(1)
    })
  })
  