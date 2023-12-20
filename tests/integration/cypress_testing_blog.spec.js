describe("cypress_testing_blog", () => {
it("tests cypress_testing_blog", () => {
  cy.viewport(1134, 984);

  cy.visit("http://localhost:3000/");

  cy.get("[data-cy=login]").click();

  cy.get("[data-cy=username]").click();

  cy.get("[data-cy=username]").type("demo");

  cy.get("[data-cy=password]").type("demo");

  cy.get("[data-cy=login-submit]").click();

  cy.get("[data-cy=create-new]").click();

  cy.get("[data-cy=title]").click();

  cy.get("[data-cy=title]").type("This is a new post");

  cy.get("[data-cy=create]").click();

  cy.get("[data-cy=create-new]").click();

  cy.get("[data-cy=title]").click();

  cy.get("[data-cy=title]").type("One more post");

  cy.get("[data-cy=content-editable]").click();

  cy.get("[data-cy=create]").click();

  cy.get("[data-cy=create-new]").click();

  cy.get("[data-cy=title]").click();

  cy.get("[data-cy=title]").type("And another one");

  cy.get("[data-cy=create]").click();

  cy.get("[data-cy=remove-post-0]").click();

  cy.get("[data-cy=remove-post-1]").click();

  cy.get("[data-cy=remove-post-0]").click();

  cy.get("[data-cy=logout]").click();

  cy.get("[data-cy=logo]").click();

  });
});
