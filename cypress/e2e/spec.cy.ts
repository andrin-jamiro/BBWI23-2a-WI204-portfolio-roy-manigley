describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    //cy.contains('app is running')
    cy.get('nav').contains('logout').should('not.exist')
    cy.get('nav').contains('login')

    cy.wait(1_000).get('#menu-login-btn').click()
    cy.get('#username').type('admin', {delay: 200})
    cy.get('#password').type('1234', {delay: 200})
    cy.get('#login-btn').click()

    cy.get('nav').contains('logout')
    cy.wait(1_000).get('#menu-logout-btn').click()
    cy.wait(1_000).get('#menu-logout-btn').should('not.exist')
    cy.get('nav').contains('login')

  })
})
