class AddCustomer{
    addCustomerBtn(){
        //cy.get('[ng-click="addCust()"]').click()
        cy.get('.btn').contains("Add Customer").click()
    }
    firstName(firstName){
        cy.get('[placeholder="First Name"]').type(firstName)
    }
    lastName(lastName){
        cy.get('[placeholder="Last Name"]').type(lastName)
    }
    postCode(postcode){
        cy.get('[placeholder="Post Code"]').type(postcode)
    }
    submitCustomerBtn(){
        cy.get('[type="submit"]').click({force:true})
    }
    openAccountBtn(){
        cy.get('[ng-click="openAccount()"]').click()
    }
    customerName(customerName){
        cy.get('#userSelect').select(customerName)
    }
    accountCurrency(currency){
        cy.get('#currency').select(currency)
    }
    processBtn(){
        cy.get('button').contains('Process').click()
    }
    testAlert(){
       cy.on('window:alert', (text) => {
            expect(text).to.include('Account created successfully with account Number');
        });

    }

}
export default AddCustomer;