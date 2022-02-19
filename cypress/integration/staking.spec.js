/// <reference types="cypress"/>

describe("Staking", () => {
    it("should display stake modal", () => {
        cy.get("a[href='/dashboard/staking']").click();
        cy.get("button").contains("Stake").click();
        cy.get("#alert-dialog").should("be.visible");
        cy.get("h4").contains("Are you sure you want to stake?");
        cy.get("button").contains("Cancel").click();
    });
});
