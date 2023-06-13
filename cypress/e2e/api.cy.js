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