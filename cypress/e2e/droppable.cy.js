describe('Droppabble', ()=> {
    it.only('Trigger method', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/droppable')

        cy.get('#droppable').should('contain.text', 'Drop here');
        cy.get('#draggable')
            .trigger('mousedown', {which:1, pageX:0, pageY:0})
            .trigger('mousemove', {which:1, pageX:350, pageY:50})
            .trigger('mouseup');

        cy.get('#droppable').should('contain.text', 'Dropped!');

    })
})