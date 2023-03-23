describe("Cypress Udemy Dersi", () => {
it("tests Cypress Udemy Dersi", () => {
  cy.viewport(1109, 745);

  cy.visit("https://shopist.io/");

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > div > div:nth-child(1) > a.sofas > div > div").click();
  cy.location("href").should("eq", "https://shopist.io/department/sofas");

  cy.get("#main > div.products > div:nth-child(3) > div:nth-child(1) > a > div > img").click();
  cy.location("href").should("eq", "https://shopist.io/department/sofas/product/12");

  cy.get("#main > section > div.item > div > div > div.purchase-button").click();

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > div > div:nth-child(2) > a.cart > div > div").click();
  cy.location("href").should("eq", "https://shopist.io/cart");

  cy.get("#main > section > div.blocks > div.products > div:nth-child(3) > div > div > div.product-bottom > div.product-counter > div.remove-button").click();

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > a > div > img").click();
  cy.location("href").should("eq", "https://shopist.io/");

  });
});
//# recorderSourceMap=BCCECGDJDMCODRCTD
