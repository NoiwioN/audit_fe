describe('Test 7    ', () => {
    it('Die URL sollte nicht http://localhost:3000/users sein.', () => {
        cy.visit('http://localhost:3000/users')
        cy.url().should('not.equal',"http://localhost:3000/users" )
    })
})