describe('Check box page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/checkbox')
  })
  const array  = [
    'Home', 'Desktop', 'Notes', 'Commands', 'Documents', 'WorkSpace', 'React', 'Angular', 'Veu', 'Office', 'Public', 'Private', 'Classified', 'General', 'Downloads'
  ]

  it('Plus icon is clickable and opens Hone elements', ()=> {
    cy.get('.rct-icon-expand-all').click()

    cy.get('.rct-title').each((title, i) => {
      cy.log(title.text())
      cy.contains(title.text())
        .should('be.visible')
        .and('include.text', `${array[i]}`)
      })
    })

    it('Minus icon is clickable and closes Home elements', () => {
      cy.get('.rct-icon-expand-all').click()
      cy.get('.rct-icon-collapse-all').click()

      array.forEach((el) => {

        if (el === 'Home') {
          cy.contains('.rct-title', el)
            .should('be.visible')
            .and('include.text', 'Home')
        } else {
          cy.contains('.rct-title', el).should('not.exist')
        }
      })
    })

    it('Check box', () => {
      cy.get('.rct-icon-expand-all').click()
      cy.get('[type="checkbox"]').check({force: true})
      cy.contains('.rct-title', 'Notes').parent().find('[type="checkbox"]')
        .uncheck({force: true})
      cy.contains('.rct-title', 'Notes').parent().find('.rct-checkbox').children()
        .should('have.class', 'rct-icon-uncheck')
    })

})


