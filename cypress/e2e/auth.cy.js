describe('Examples for TOOLS QA', ()=> {
  it('displays header TOOLSQA', () => {
    cy.visit('https://demoqa.com/')
    cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible')

  })
  it('Bottom Elements exists', () => {
    cy.visit('https://demoqa.com/')
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').should('be.visible')
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
  })

  it('Bottom Text Box exists', () => {
    cy.visit('https://demoqa.com/')
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').should('be.visible')
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should('be.visible')
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click()
  })
})
