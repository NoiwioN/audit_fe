
describe('Testfall 3', () => {
    it('Der Autor des Buchs wurde verändert. ', () => {
        const title= "Mastering the Art of French Cooking"
        const newAuthor = Math.random().toString().slice(2,8);
        cy.visit('http://localhost:3000/')
        cy.contains("Login").click()
        cy.url().should('include','/login')
        cy.get('[name="benutzername"]').type("m")
        cy.get('[name="passwort"]').type("1234")
        cy.get("button").click()
        cy.url().should('equal','http://localhost:3000/')
        cy.get("h1").contains(title)
            .parent().contains("Mehr Details").click()
        cy.contains("Bearbeiten").click();
        cy.get("[name='autor']").clear()
        cy.get("[name='autor']").type(newAuthor)
        cy.contains("Erstellen").click();
        cy.get("h1").contains(title).parent()
            .contains(newAuthor).should('exist')
        //Cleanup
        cy.get("h1").contains(title)
            .parent().contains("Mehr Details").click()
        cy.contains("Bearbeiten").click();
        cy.get("[name='autor']").clear()
        cy.get("[name='autor']").type("Julia Child")
        cy.contains("Erstellen").click();
    })
})

