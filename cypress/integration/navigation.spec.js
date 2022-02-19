/// <reference types="cypress"/>

describe("Navigation", () => {
    it("should navigate to the profile", () => {
        cy.get("a[href='/dashboard/profile']").click();
        cy.url().should("include", "/dashboard/profile");
        cy.get("a[href='/dashboard/profile/settings']").click();
        cy.url().should("include", "/dashboard/profile/settings");
    });

    it("should navigate to the staking", () => {
        cy.get("a[href='/dashboard/staking']").click();
        cy.url().should("include", "/dashboard/staking");
        cy.get("a[href='/dashboard/staking/gameplay']").click();
        cy.url().should("include", "/dashboard/staking/gameplay");
    });

    it("should navigate to the treasure", () => {
        cy.get("a[href='/dashboard/treasure']").click();
        cy.url().should("include", "/dashboard/treasure");
    });

    it("should navigate to the game stats", () => {
        cy.get("a[href='/dashboard/game-stats']").click();
        cy.url().should("include", "/dashboard/game-stats");
        cy.get("a[href='/dashboard/game-stats/results']").click();
        cy.url().should("include", "/dashboard/game-stats/results");
        cy.get("a[href='/dashboard/game-stats/games']").click();
        cy.url().should("include", "/dashboard/game-stats/games");
    });
});
