/// <reference types="Cypress" />
import { createGalleryPage } from "../page_objects/creategalleryPage";

import { loginPage } from "../page_objects/LoginPage";

describe("create gallery page tests", () => {
    beforeEach("visit gallery app and log in", () => {
        cy.visit("/login");
        loginPage.login("dunjaivosevic@yahoo.com", "Konstantin2012");
        cy.url().should("not.include", "/login")
        cy.visit("https://gallery-app.vivifyideas.com/create")

    })      
    
    it("create gallery page successfully loaded", () => {
        createGalleryPage.createGalleryHeading
        .should("be.visible")
        .and("have.text", "Create Gallery");

    })

    it("new gallery successfully created", () => {
        cy.get("#title").type("test");
        cy.get("#description").type("opis");
        cy.get("div[class='input-group mb-3']").type("url");
        cy.get("button").eq(-3);
        cy.get("button").eq(-2);
    })

})