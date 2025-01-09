describe('Test Login and Logout', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('nav').contains('logout').should('not.exist')
    cy.get('nav').contains('login')

    cy.wait(1_000).get('#menu-login-btn').click()
    cy.get('#username').type('admin', {delay: 200})
    cy.get('#password').type('1234', {delay: 200})
    cy.get('#login-btn').click()
    
    cy.get('nav').contains('logout')
    cy.wait(1_000).get('#menu-logout-btn').click()
    cy.get('nav').contains('logout').should('not.exist')
    cy.get('nav').contains('login')
  })
})
