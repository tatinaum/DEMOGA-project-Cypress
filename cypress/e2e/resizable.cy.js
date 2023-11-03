
describe('Resizable square', ()=>{
it('resize', ()=>{
    cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com/resizable')

    cy.get('#resizableBoxWithRestriction').invoke('width', 300).invoke('height', 250)
    cy.get('#resizableBoxWithRestriction').should(($el)=>{
        const width = parseInt($el[0].style.width);
        console.log(width)
        expect(width).to.be.closeTo(300, 3);

        const height = parseFloat($el[0].style.height);
        console.log(height)
        expect(height).to.be.closeTo(250, 3);

    })
})
})