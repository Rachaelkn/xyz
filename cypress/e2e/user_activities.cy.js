const data = require('../fixtures/xyz.json')
import transactions from "../support/customCommands/user_activities";

const  trans = new transactions();

describe('Customer activities test suite', function () {
    beforeEach(() => {
        cy.homepage(data.homepageUrl)
        cy.customerLogin("Harry Potter") //data.openAccount.customer_name
    })
    it('verify customer account exists test case ', function () {
        trans.checkAccount()
    });
    it('deposit money test case ', function () {
        trans.depositBtn()
        trans.amountField(data.transactions.amount)
        trans.submitBtn()
        trans.successMessage(data.transactions.depositSuccess)
    });
    it('withdraw money test case ', function () {
        trans.withdrawBtn()
        trans.amountField(data.transactions.amount)
        trans.submitBtn()
        trans.successMessage(data.transactions.withdrawSuccess)
    });
    it('confirm transactions test case ', function () {
        trans.transactionsBtn()
        trans.confirmTransactions()
        trans.returnToHome()
    });
    it('delete customer ', function () {
        trans.returnToHome()
        cy.managerLogin()
        trans.deleteCustomer(data.customer.firstName)
        trans.returnToHome()
    });

});
