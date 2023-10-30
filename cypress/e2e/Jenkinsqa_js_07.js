/// <reference types="cypress"/>
import messages from "../fixtures/messages.json"

describe('first Jenkins test', () => {

    it('verify Welcome message', function () {
        cy.get('.empty-state-block h1').should('be.visible').and('have.text', 'Welcome to Jenkins!')
    })

    it('verify dropdown menu Dashboard', function () {
        cy.get('.jenkins-breadcrumbs__list-item > .model-link').should('have.text', 'Dashboard').realHover();
        cy.get('li.jenkins-breadcrumbs__list-item button.jenkins-menu-dropdown-chevron').should('be.visible').click();
        cy.get('.jenkins-dropdown a').should('be.visible').and('have.length', 5);
    })

    describe.only('<Freestyle project> Delete created project', ()=>{
        it('Delete project using dropdown menu', function (){
            cy.get('a[href="newJob"]').click()
            cy.get('input#name').type('Project1')
            cy.get('li[tabindex="0"] span').contains('Freestyle project').click()
            cy.get('#ok-button').click()
            cy.get(':nth-child(1) > .model-link').click()

            cy.get('table#projectstatus tbody tr td:nth-child(3) a button').click({force:true});
            cy.get('.tippy-box').contains('Delete Project').click();

            cy.on('window:confirm', (str) => {
                expect(str).to.equal(messages.deleteConfirmMessage);

            })
        })
    })
//     it('Verify Jenkins’ Logo ')
})


/// <reference types="cypress"/>

describe('multiconfigProject', () => {

    it('Create Multiconfiguration project', function() {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('Project1')
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-breadcrumbs__list-item:nth-child(1) > .model-link').click()

        cy.get('td a[href*="job"].jenkins-table__link').should('have.text', 'Project1')
    })
})

