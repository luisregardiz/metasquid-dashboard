/// <reference types="cypress"/>

context("Home", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should display the home page title", () => {
        cy.get("h2").contains(
            "100% RUG PROOF AND COMMUNITY DRIVEN METAVERSE GAMES!"
        );
    });
    it("should display the home page subtitle", () => {
        cy.get("span").contains("Connect your wallet to login to your profile");
    });
    it("should display the home page button", () => {
        cy.get("button").contains("Connect");
    });
});
