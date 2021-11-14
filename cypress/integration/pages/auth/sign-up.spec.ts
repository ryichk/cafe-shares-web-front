describe('SignUp Page', () => {
  it('ユーザー作成', () => {
    cy.visit('http://localhost:8000/auth/sign-up');
  });
});
