

describe('Test 6', () => {
    it('Der Benutzername wurde wie gewünscht geändert.', () => {
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
        cy.contains('Bearbeiten').click();
        cy.url().should('contain',"http://localhost:3000/users/edit" )
        let newName = Math.random().toString()
        let newPasswort = "1234"
        cy.get('[name="benutzername"]').type(newName)
        cy.get('[name="passwort"]').type(newPasswort)
        cy.contains("Erstellen").click()
        cy.url().should("equal","http://localhost:3000/users")
        cy.get("h2").contains(newName).should('exist')

    })
})

