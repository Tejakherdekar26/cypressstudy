/// <reference types="Cypress" />

describe('My First Test Suite', function()
    {
        it('My First Test Case', function()
        {
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            cy.get('.search-keyword').type('ca')
            cy.wait(2000)
            cy.get('.product').should('have.length',5)
            cy.get('.product:visible').should('have.length',4)
            //parent to child chaining
            cy.get('.products').find('.product').should('have.length',4)
            cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
            //19th lecture have to start
            cy.get('.products').find('.product').each(($el, index, $list) =>
          {
                const textveg =$el.find('h4.product-name').text()
                if(textveg.includes('cashews'))
               {
                     $el.find('button').click();
               }
        
          })
        


        })
        
    })
    
    



