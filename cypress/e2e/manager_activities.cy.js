const data = require('../fixtures/xyz.json')
import manager_activities from "../support/customCommands/manager_activities";

const managerActivities = new manager_activities();

describe('Manager activities test suite', () => {
  beforeEach(()=>{
    cy.homepage(data.homepageUrl)
    cy.managerLogin()
  })
  it('Add customer test case', () => {
    managerActivities.addCustomerBtn()
    managerActivities.firstName(data.customer.firstName)
    managerActivities.lastName(data.customer.lastName)
    managerActivities.postCode(data.customer.postCode)
    managerActivities.submitCustomerBtn()
  })
  it('open account for the created customer test case ', function () {
    managerActivities.openAccountBtn()
    managerActivities.customerName(data.openAccount.customer_name)
    managerActivities.accountCurrency(data.openAccount.AccCurrency)
    managerActivities.processBtn()
    managerActivities.testAlert()
  });

})
