import { Homepage } from "../../pageObjectModel/homepage";
const homepagePom = new Homepage()

import HomepageSecond from "../../pageObjectModel/homepageSecond";
describe('Page Object Model 1nci Kullanimi', () => {
    it('Page object model kullanim ornekleri', () => {
        homepagePom.navigate()
        homepagePom.pricingBtn()
    });
});

describe.only('Page Object Model 2nci Kullanim', () => {
    it('Page object model kullanim ornekleri', () => {
        HomepageSecond.navigate()
        HomepageSecond.pricingBtn.should('be.visible').and('contain', "Pricing").click()
    });
});