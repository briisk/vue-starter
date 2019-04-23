describe('Store example', () => {
  it('should have 1 TODO', () => {
    cy.login();
    cy.visit('/example');
    cy.get('.todo').should((items) => {
      expect(items.first()).to.contain('first TODO');
    });
  });

  describe('when user want to add new TODO without title', () => {
    it('should display validation message', () => {
      cy.contains('Add').click();
      cy.get('.error').should('to.contain', 'The title field is required.');
    });
  });

  describe('when user want to add new TODO with title', () => {
    it('should add new TODO with title', () => {
      const title = 'new TODO';

      cy.get('input').type(title);
      cy.contains('Add').click();
      cy.get('.todo').should((items) => {
        expect(items.length).to.eq(2);
        expect(items.eq(1)).to.contain(title);
      });
      cy.get('input').should('be.empty');
    });
  });

  describe('when user want to remove TODO', () => {
    it('item should disappear from list', () => {
      const toDoToRemove = 'first TODO';
      cy.get('.todo').contains('div', toDoToRemove).find('button').click();
      cy.get('.todo').then((items) => {
        expect(items.length).to.eq(1);
      });
    });
  });
});
