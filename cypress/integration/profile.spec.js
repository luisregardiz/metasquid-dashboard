/// <reference types="cypress"/>

const testUsername = "test";
const defaultUsername = "blckmrder";

describe("Profile", () => {
    it("should display the profile page and title of the components", () => {
        cy.get("a[href='/dashboard/profile']").click();
        cy.url().should("include", "/dashboard/profile");
        cy.get("#profile-title").contains("Profile");
        cy.get("#tokenomics-title").contains("Tokenomics");
        cy.get("#earnings-title").contains("Earnings");
        cy.get("#total-payed-title").contains("Total Payed Out");
        cy.get("#claim-button-profile").contains("Claim").click();
        cy.url().should("include", "/dashboard/treasure");
    });

    it("should the user be able to change the username", () => {
        cy.get("a[href='/dashboard/profile']").click();
        cy.get("a[href='/dashboard/profile/settings']").click();
        cy.url().should("include", "/dashboard/profile/settings");
        cy.get("input[name=username]").type(testUsername);
        cy.get("#update-button").contains("Update").click();
        cy.get("[data-testid=username]").contains(testUsername);
        cy.get("input[name=username]").type(defaultUsername);
        cy.get("#update-button").contains("Update").click();
        cy.get("[data-testid=username]").contains(defaultUsername);
    });
});
