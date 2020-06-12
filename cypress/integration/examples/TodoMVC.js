/// <reference types="Cypress" />
describe('My Todo List Suite',function()
{
    it('Add new Todo List in Knockback',function()
    {   
        //cy.visit("http://todomvc.com/examples/react/#/.com");
        cy.visit("http://todomvc.com/examples/knockback/")
        cy.get('.new-todo', {timeout:6000}).type("Flowers{enter}")
        cy.get('Class').should('have.text', 'Flowers')
        //cy.get('.toggle').should('not.be.checked')
       // cy.get('.toggle').click()
        //cy.get('label').should('have.css', 'text-decoration-line', 'line through')
        //cy.contains('Clear').click()
        //cy.get('.todo-list').should('should.not.have.descendants', 'li')


        

        
        
    })


})
