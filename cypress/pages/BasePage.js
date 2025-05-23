export default class BasePage {
  getWebOrdersHeading() {
    return cy.get('h1');
  }

  getWelcomeUserInfo() {
    return cy.contains('Welcome,')
  }

  getLogoutButton() {
    return cy.get('#ctl00_logout');
  }

  getLeftPanelOptions() {
    return cy.get('#ctl00_menu a');
  }

  clickOnLeftPanelOption(optionText) {
    this.getLeftPanelOptions().contains(optionText).click();
  }

  getRightPanelHeading() {
    return cy.get('h2');
  }

  getRightPanelMainContentTable() {
    return cy.get('.content table').first();
  }



  // Reusable table methods
  getTableHeaders() {
    return this.getRightPanelMainContentTable().find('th')
  }

  getRows() {
    return this.getRightPanelMainContentTable().find('tr');
  }

  getRow(index) {
    return this.getRows().eq(index);
  }

  // .content table tr td:nth-child(3)
  getColumn(index) {
    // return this.getRows().find('td').eq(index);
    return this.getRows().find(`td:nth-child(${index + 1})`);
  }  
}