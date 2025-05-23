/// <reference types="cypress"/>
import BasePage from "../../pages/BasePage";
import LoginPage from "../../pages/LoginPage";

describe('Login Verification', () => {

  const loginPage = new LoginPage();
  const basePage = new BasePage();

  it('Validate login with valid credentials', () => {
    cy.visit("http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx");

    loginPage.login('Tester', 'test');

    cy.url().should('include', 'weborders');

    basePage.getWebOrdersHeading().should('have.text', 'Web Orders');
    basePage.getLogoutButton().should('have.text', 'Logout');
    basePage.getWelcomeUserInfo().should('include.text', 'Tester');
  })
});