describe('Cypress Write File', () => {
    it('write file', () => {
        cy.writeFile('CypressWriteFileDoc/exampleFile.txt', 'Sifirdan Cypress Derslerine Hosgeldiniz.\n')
        cy.writeFile('CypressWriteFileDoc/exampleFile.txt', 'Bu egitim serisinde sifirdan ileri seviyeye cypress ogreneceksiniz.', {flag:'a+'})
    });
});

describe('Cypress Read File', () => {
    it('read file', () => {
        cy.readFile('CypressWriteFileDoc/exampleFile.txt').should('contain', 'egitim')
    });

    it('read file - 2', () => {
        cy.readFile('CypressWriteFileDoc/exampleFile.txt').then((text) => {
            expect(text).to.contain('egitim')
        })
    })
});