/// <reference types="cypress" />

describe('Calculator', () => {
    it('Loads', () => {
        cy.visit('localhost:3000');
        cy.contains('Calculator');
    })

    it('Increments', () => {
        cy.visit('localhost:3000');
        cy.get('.input').should('have.length', 2);
        cy.contains('Increment').click();
        cy.get('.input').should('have.length', 3);
    })


    it('Decrements', () => {
        cy.visit('localhost:3000');
        cy.get('.input').should('have.length', 2);
        cy.contains('Decrement').click();
        cy.get('.input').should('have.length', 1);
    })


    it('Gets a total', () => {
        cy.visit('localhost:3000');
        cy.contains(/increment/i).click();
        cy.get('.input').eq(0).type(1);
        cy.get('.input').eq(1).type(2);
        cy.get('.input').eq(2).type(1);

        cy.contains(/calculate/i).should('exist').click();

        cy.contains('4').should('exist');

    });
})
