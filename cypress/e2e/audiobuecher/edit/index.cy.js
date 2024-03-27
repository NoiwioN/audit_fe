
describe('Test 3', () => {
  it('Login in succeeds', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("Login").click()
    cy.url().should('include','/login')
    cy.get('[name="benutzername"]').type("m")
    cy.get('[name="passwort"]').type("1234")
    cy.get("button").click()
    cy.url().should('equal','http://localhost:3000/')
    cy.get("h1").contains("Mastering the Art of French Cooking").parent().contains("Mehr Details").click()
    cy.contains("Bearbeiten").click()
    let newAutor= Math.random().toString()
    cy.get("[name='autor']").clear()
    cy.get("[name='autor']").type(newAutor)
    cy.contains("Erstellen").click()
    cy.url().should('equal',"http://localhost:3000/")
    const foundElement =cy.get('p').contains(newAutor)
    foundElement.should('exist')
    foundElement.should('contain',newAutor)
  })
})

