

describe('Test 1', () => {
  it('Login in succeeds', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("Sign-Up").click()
    cy.url().should('include','/signUp')
    let user =Math.random().toString()
    let vorname = "test";
    let nachname = "benutzer"
    let email= "user@mail.com"
    let passwort = "1234"
    cy.get('[name="benutzername"]').type(user)
    cy.get('[name="vorname"]').type(vorname)
    cy.get('[name="nachname"]').type(nachname)
    cy.get('[name="email"]').type(email)
    cy.get('[name="passwort"]').type(passwort)
    cy.get("button").click()
    cy.url().should('equal','http://localhost:3000/login')
    cy.get('[name="passwort"]').type(passwort)
    cy.get('[name="benutzername"]').type(user)
    cy.get("button").click()
    cy.url().should('equal','http://localhost:3000/')
    cy.visit("http://localhost:3000/users")
    cy.contains(user).parent('div').within(() => {
      // Klicke auf den "Mehr Details"-Link
      cy.contains('Mehr Details').click();
    });
    cy.contains('Löschen').click();
    cy.url().should('equal',"http://localhost:3000/users" )

  })
})

