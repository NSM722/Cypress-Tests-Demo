describe('Create a post and mark or un-mark it as a favorite', () => {

    Cypress.config('pageLoadTimeout', 100000)

    it('Create a post', () => {
        // find the menu bar as an alias to make it reusable
        cy.get('ul.navbar-nav').children().as('menu')
        cy.get('@menu').contains('New Post').click()
        cy.hash().should('include', '#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test')
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
        })
        cy.url().should('include', 'article')
    })

    it('Mark/un-mark a post as favorite', () => {
        cy.get('ul.navbar-nav').children().contains('hackerLady').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.btn-primary').first().then(($fav) => {
            return $fav.text()
            // create a favCount alias
        }).as('favCount')
        cy.get('@favCount').then(($count) => {
            expect(parseInt($count)).to.eq(1)
        })
        cy.get('.btn-primary').first().click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
    })
})