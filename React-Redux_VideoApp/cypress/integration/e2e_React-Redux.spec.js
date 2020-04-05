describe('End 2 end test', () => {
  it('Video app', () => {
    cy.visit('http://localhost:8080/');
    cy.url().should('include', '/search');
    cy.contains('Video app');
    cy.contains('FIND YOUR MOVIE');
    cy.get('input[type="text"]').type('Star Wars');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '&search=Star%20Wars');
    cy.contains('Star Wars: The Last Jedi').click();
    cy.url().should('include', '/film/181808');
    cy.contains('Rating: 7.1 Release date: 2017-12-13');
    cy.contains('Films by the same Fantasy, Adventure, Science Fiction genres');
    cy.get('img[alt="Search"]').click();
    cy.url().should('include', '/search');
    cy.get('input[type="text"]').type('Terminator{enter}');
    cy.wait(500);
    cy.contains('Rating').click();
    cy.wait(500);
    cy.get('input[type="text"]').clear();
    cy.get('input[type="text"]').type('Action');
    cy.contains('Genres').click();
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '&searchBy=genres&search=Action');
  });
});
