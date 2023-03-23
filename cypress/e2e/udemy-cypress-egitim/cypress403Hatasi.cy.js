describe('403 Hatasina Karsi Cozum', () => {
    it('403 Hata Sorunu', () => {
        cy.visit(('https://www.airbnb.de/'), {
            headers: {
                "User-Agent": "axios/0.27.1"
            }
        })

    });
});