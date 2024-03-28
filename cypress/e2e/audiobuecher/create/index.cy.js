
describe('Testfall 4', () => {
  it('Ein Audiobuch wird erstellt, dieses lässt sich auffinden und ist wieder löschbar', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("Login").click()
    cy.url().should('include','/login')
    cy.get('[name="benutzername"]').type("m")
    cy.get('[name="passwort"]').type("1234")
    cy.get("button").click()
    cy.url().should('equal','http://localhost:3000/')
    cy.contains("Erstellen").click()
    let title = Math.random().toString()
    cy.get('[name="titel"]').type(title)
    cy.get('[name="laenge"]').type("115")
    cy.get('[name="autor"]').type("Mattias Zurbuchen")
    cy.get('[name="erscheinungsjahr"]').type("2000")
    cy.get('.Dropdown-placeholder').click()
    cy.contains("Fantasy").click()
    cy.contains("Erstellen").click()
    const audioBook=cy.get("h1").contains(title)
    audioBook.should('exist');
    audioBook.parent().contains("Mehr Details").click()
    cy.contains("Löschen").click()
    cy.get("h1").contains(title).should('not.exist')
  })
})

