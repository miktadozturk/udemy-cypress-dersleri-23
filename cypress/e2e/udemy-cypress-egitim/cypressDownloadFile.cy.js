describe('Cypress Download File', () => {

    before(() => {
        cy.deleteDownloadsFolder()
    });

    it('Download File', () => {
        cy.on('uncaught:exception', (err,runnable) => {return false})
        cy.visit('https://demoqa.com/upload-download')

        cy.get('#downloadButton').click() //1nci yontem
        cy.get('a.btn-primary').click() //2nci yontem
    });
});