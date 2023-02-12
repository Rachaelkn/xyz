// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-localstorage-commands";

Cypress.Commands.add('homepage',(url)=>{
    cy.visit(url);
})
Cypress.Commands.add('managerLogin',(url)=>{
    cy.get('.btn').contains("Bank Manager Login").click()
})
Cypress.Commands.add('customerLogin',(cname)=>{
    cy.get('.btn').contains("Customer Login").click()
    cy.get('#userSelect').select(cname)
    cy.get('.btn').contains("Login").click()
})
