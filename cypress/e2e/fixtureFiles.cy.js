/* describe('login', () => {
	it('sign in', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
    cy.fixture('loginCredentials').then((user) => {
      cy.get('input[type="email"]').type(user.email)
      cy.get('input[type="password"').type(user.password)
    })
    cy.get('.btn').contains('Sign in').click()
	})
}) */

describe('login', () => {
	let userDetails
	beforeEach(() => {
		cy.fixture('loginCredentials').then(user => {
			userDetails = user
		})
	})

	it('sign in', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
    cy.get('input[type="email"]').type(userDetails.email)
    cy.get('input[type="password"').type(userDetails.password)
    cy.get('.btn').contains('Sign in').click()
	})
})

/* describe('login', () => {

	beforeEach(() => {
		cy.fixture('loginCredentials').as('user')
	})

	it('sign in', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
    cy.get('input[type="email"]').type(() => this.user.email)
		cy.get('input[type="password"').type(() => this.user.password)
		cy.get('.btn').contains('Sign in').click()
	})
}) */