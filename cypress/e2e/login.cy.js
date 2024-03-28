describe('Test 1', () => {
    it('Benutzer kann sich erfolgreich Anmelden und wird auf die Index Seite zurück geleitet, die Navbar-Links sind angepasst. ', () => {
        cy.visit('http://localhost:3000/')
        cy.contains("Login").click()
        cy.url().should('include', '/login')
        cy.get('[name="benutzername"]').type("m")
        cy.get('[name="passwort"]').type("1234")
        cy.get("button").click()
        cy.url().should('equal', 'http://localhost:3000/')
        cy.contains('Sign-Up').should('not.exist')
    })
})

describe('Test 5', () => {
    it('Login fails', () => {
        cy.on('uncaught:exception', (error, runnable) => {
            cy.should('equal')
            return false;
        })
        cy.visit('http://localhost:3000/')
        cy.contains("Login").click()
        cy.url().should('include', '/login')
        cy.get('[name="benutzername"]').type("keinBenutzer")
        cy.get('[name="passwort"]').type("IchbinkeinBenutzer")
        cy.url().should('equal', 'http://localhost:3000/login')
        cy.contains('Sign-Up').should('exist')
        cy.reload();
    })
})

describe('Testfall 8', () => {
    it('Links passen sich an, wenn nicht eingeloggt oder wenn eingeloggt.', () => {
        cy.visit('http://localhost:3000/')
        cy.contains("Login").click()
        cy.url().should('include', '/login')
        cy.get('[name="benutzername"]').type("m")
        cy.get('[name="passwort"]').type("1234")
        cy.get("button").contains("Login").click()
        cy.get("nav").contains("Logout").should('exist')
        cy.get("nav").contains("Login").should('not.exist')
        cy.get("nav").contains("Logout").click()
        cy.get("nav").contains("Logout").should('not.exist')
        cy.get("nav").contains("Login").should('exist')

    })
})