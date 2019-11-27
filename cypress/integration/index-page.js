describe("Index page", () => {
  /*
  * Visits the page before each test
  */
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000`);
    cy.visit("/");
  });

  it("should have one nav bar for filtering", () => {
    cy.get("nav").should("have.length", 1);
   });
  
   it("should start with 5 entries", () => {
    cy.get("article").should("have.length", 5);
   });

   it("when scrolled should have 10 entries", () => {
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.get("article").should("have.length", 10);
   });   

 });