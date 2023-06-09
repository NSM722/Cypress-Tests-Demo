describe('Create a post then mark and un-mark it as favorite', () => {

    Cypress.config('pageLoadTimeout', 100000)

    before(function () {
       cy.LogIn()
    })

    it('Create a post', () => {
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include', '#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test')
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
        })
        cy.url().should('include', 'article')
    })

    it('Mark and un-mark post as favorite', () => {
        cy.get('ul.navbar-nav').children().contains('hackerLady').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        // then() receives a jQuery object yielded from the previous command
        cy.get('.btn-primary').first().then(($fav) => {
            const favCount = $fav.text()
            // convert favCount from a str to a number
            // verify the count
            expect(parseInt(favCount)).to.eq(1)
        }).click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
    })
})