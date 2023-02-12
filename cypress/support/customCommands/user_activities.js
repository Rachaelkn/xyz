class User_activities {
    depositBtn(){
        cy.get('[ng-click="deposit()"]').click()
    }
    withdrawBtn(){
        cy.get('[ng-click="withdrawl()"]').click()
    }
    transactionsBtn(){
        cy.get('[ng-click="transactions()"]').click()
    }
    confirmTransactions(){
        cy.get('tbody > tr',{timeout:5000}).should('exist')
    }
    submitBtn(){
        cy.get('[type="submit"]').click()
    }
    amountField(amount){
        cy.get('[placeholder="amount"]').type(amount)
    }
    successMessage(message){
        cy.get('.error',{timeout:10000}).should('include.text',message)
    }
    checkAccount(){
        cy.get('.ng-binding').eq(0).should('not.be.empty')
    }
    returnToHome(){
        cy.get('.btn').contains("Home").click()
    }
    deleteCustomer(customer){
        cy.get('[ng-click="showCust()"]').click()
        cy.get('tbody > tr').each((tr)=>{
            cy.wrap(tr).find('td').each((el)=>{
                cy.wrap(el).invoke('text').then(text=>{
                    if (text.includes(customer)){
                        cy.wait(5000)
                        cy.wrap(tr).find('td > button').click()
                        return false;
                    }
                })
            })
        })
    }

}
export default User_activities;