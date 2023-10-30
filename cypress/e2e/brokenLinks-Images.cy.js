cy.visit('https://demoqa.com/broken')
cy.get('[src="/images/Toolsqa_1.jpg"]').then((broken)=>{
  cy.wrap(broken).should('exist')
  expect(broken[0].naturalWidth).eq(0)
})
