/// <reference types="cypress"/>

describe("GameStats", () => {
    it("should display the game stats page and leaderboard table", () => {
        cy.get("a[href='/dashboard/game-stats']").click();
        cy.url().should("include", "/dashboard/game-stats");
        cy.get("h3").contains("Leaderboard");
        cy.get("table").should("be.visible");
        cy.get("th").contains("No");
        cy.get("th").contains("Username");
        cy.get("th").contains("Atlantic Rank");
        cy.get("th").contains("Pearls");
    });

    it("should display the game stats page and results table", () => {
        cy.get("a[href='/dashboard/game-stats/results']").click();
        cy.url().should("include", "/dashboard/game-stats/results");
        cy.get("h3").contains("Results");
        cy.get("table").should("be.visible");
        cy.get("th").contains("Game");
        cy.get("th>div>span").contains("Multipler 1");
        cy.get("th>div>span").contains("Multipler 2");
        cy.get("th>div>span").contains("Multipler 3");
        cy.get("th>div>span").contains("Bonus Slot");
    });
    it("should display the game stats page and my games table", () => {
        cy.get("a[href='/dashboard/game-stats/games']").click();
        cy.url().should("include", "/dashboard/game-stats/games");
        cy.get("h3").contains("My Games");
        cy.get("table").should("be.visible");
        cy.get("th").contains("Game");
        cy.get("th").contains("Choises");
        cy.get("th").contains("Pearls");
        cy.get("th").contains("SQDS");
        cy.get("th").contains("NFT");
        cy.get("th").contains("Tokens");
    });
});
