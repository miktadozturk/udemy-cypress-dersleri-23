describe('XHR Test', () => {
    it('cy.request Kullanimi - 1', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
        })
    });

    it('cy.request Kullanimi - 2', () => {
        cy.request({
            url: 'https://jsonplaceholder.cypress.io/comments',
            method: 'GET'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
        })
    });

    it('cy.request Kullanimi - 3', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
        .its('status')
        // .its('content-type')
        .should('eq', 200)
    });

    it('cy.intercept Kullanimi', () => {
        cy.intercept('GET', 'url gireceksiniz').as('abc')
        cy.visit('url girip')
        cy.get('#loginbutton').click()
        cy.get('#username').type('deneme')
        cy.get('#password').type('test')
        cy.get('#btn').click()

        cy.wait('@abc')
        
    });
});