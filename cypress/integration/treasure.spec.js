/// <reference types="cypress"/>

describe("Treasure", () => {
    it("should display the treasure page and titles", () => {
        cy.get("a[href='/dashboard/treasure']").click();
        cy.url().should("include", "/dashboard/treasure");
        cy.get("h4").contains("Token Rewards");
        cy.get("h4").contains("SQUID Rewards");
        cy.get("h4").contains("Claimed Treasure");
        cy.get("h4").contains("Claimed Token Rewards");
        cy.get("h4").contains("Claimed Squid Rewards");

        //Test claimed button
        cy.get("button").contains("Claim").click();
        cy.get("#alert-dialog").should("be.visible");
        cy.get("h4").contains("Are you sure you want to claim this reward?");
        cy.get("button").contains("Cancel").click();
    });
});
