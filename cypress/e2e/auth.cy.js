describe('Examples for TOOLS QA', ()=> {

  it('displays header TOOLSQA', () => {
    cy.visit('https://demoqa.com/')
    cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible')
  })

  it('Header-Bottom Elements exists', () => {
    cy.visit('https://demoqa.com/')

    cy.contains('h5', 'Elements').click()
    cy.get('.header-text').should('be.visible')

    cy.contains('Text Box').click()
    cy.url().should('include', '/text-box')

    cy.get('#item-0').should('have.text', 'Text Box')
    cy.get('#userForm').should('exist')
    //cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').should('be.visible')
    //cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
  })

  it('Verify in Text Box page all elements with correct names.', () => {
    cy.visit('https://demoqa.com/text-box')

    cy.get('#userName-label.form-label').should('exist')
      .should('have.text', 'Full Name')
    cy.get('#userEmail-label').should('exist')
      .should('have.text', 'Email')
    cy.get('#currentAddress-label').should('exist')
      .should('have.text', 'Current Address')
    cy.get('#permanentAddress-label').should('exist')
      .should('have.text', 'Permanent Address')
  })

    it('Verify that input fields have placeholders with correct value(property)',() => {
      cy.visit('https://demoqa.com/text-box')

      cy.get('#userName').should('have.attr', 'placeholder', 'Full Name')
      cy.get('#userEmail').should('have.attr', 'placeholder', 'name@example.com')
      cy.get('#currentAddress').should('have.attr', 'placeholder', 'Current Address')
      cy.get('#permanentAddress').should('exist')
    })

  it('Validation for Email-input field', ()=>{
    cy.visit('https://demoqa.com/text-box')

    cy.get('#userEmail').type('example')
    cy.get('#submit').click()
    cy.get('.field-error').should('be.visible')

    cy.get('#userEmail').type('@')
    cy.get('#submit').click()
    cy.get('.field-error').should('be.visible')

    cy.get('#userEmail').type('test')
    cy.get('#submit').click()
    cy.get('.field-error').should('be.visible')

    cy.get('#userEmail').type('.')
    cy.get('#submit').click()
    cy.get('.field-error').should('be.visible')

    cy.get('#userEmail').type('com')
    cy.get('#submit').click()
    cy.get('#userEmail-wrapper > .col-md-9').should('be.visible')  //?????




  })
  })

