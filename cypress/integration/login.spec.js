/// <reference types="cypress"/>

const testCredentials = {
    username: "blckmrder",
    password: "test123456",
};

context("Login", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("user should be logged in", () => {
        cy.get("button").contains("Connect").click();
        cy.get("input[name=username]").type(testCredentials.username);
        cy.get("input[name=password]").type(testCredentials.password);
        cy.get("#login-button").contains("Login").click();
        cy.url().should("include", "/dashboard");
        cy.get("[data-testid=username]").contains(testCredentials.username);
    });
});
