describe('Characters', () => {
  it('should search characters by name', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-test-id="search"]').type('Morty');
    cy.get('[data-test-id="search-submit"]').click();
    cy.url().should('include', 'name=Morty');
    cy.url().should('include', 'page=1');
    cy.get('[data-test-id="character-list-item"]').contains('Morty');
  });

  it('s', () => {
    cy.visit('http://localhost:3000/');
    const first = cy
      .get('[data-test-id="character-name"]')
      .first()
      .should(($name) => {
        const val = $name.val();
        console.log(val);
        expect(val).to.match(/foo/);
      });
  });
});

export {};
