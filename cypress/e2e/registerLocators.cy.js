/// reference types="Cypress" />
const locators = require("../fixtures/locators.json");

describe("register tests with locators", () => {
  it("register without last name provided", () => {
    cy.visit("/");
    cy.get(locators.commonFormElements.navbarLink).eq(2).click();
    cy.get(locators.registerPage.firstNameInput).type("Filip");
    cy.get(locators.commonFormElements.emailInput).type("test-f@mail.com");
    cy.get(locators.commonFormElements.passwordInput).type("Test12345");
    cy.get(locators.registerPage.passwordConfirmationInput).type("Test12345");
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("include", "/register");
  });

  it("register without number in password", () => {
    cy.visit("/");
    cy.get(locators.commonFormElements.navbarLink).eq(2).click();
    cy.get(locators.registerPage.firstNameInput).type("Filip");
    cy.get(locators.registerPage.lastNameInput).type("Nedovic");
    cy.get(locators.commonFormElements.emailInput).type("test-f@mail.com");
    cy.get(locators.commonFormElements.passwordInput).type("TestTestTest");
    cy.get(locators.registerPage.passwordConfirmationInput).type("Test12345");
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("include", "/register");
  });

  it("register with spaces in email address", () => {
    cy.visit("/");
    cy.get(locators.commonFormElements.navbarLink).eq(2).click();
    cy.get(locators.registerPage.firstNameInput).type("Filip");
    cy.get(locators.registerPage.lastNameInput).type("Nedovic");
    cy.get(locators.commonFormElements.emailInput).type("test-f @mail.com");
    cy.get(locators.commonFormElements.passwordInput).type("Test12345");
    cy.get(locators.registerPage.passwordConfirmationInput).type("Test12345");
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("include", "/register");
  });

  it("register with valid data using locators", () => {
    cy.visit("/");
    cy.get(locators.commonFormElements.navbarLink).eq(2).click();
    cy.get(locators.registerPage.firstNameInput).type("Filip");
    cy.get(locators.registerPage.lastNameInput).type("Nedovic");
    cy.get(locators.commonFormElements.emailInput).type("test-f@mail.com");
    cy.get(locators.commonFormElements.passwordInput).type("Test12345");
    cy.get(locators.registerPage.passwordConfirmationInput).type("Test12345");
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("not.include", "/register");
  });
});