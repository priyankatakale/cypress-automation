describe ("Verify Login functionality", ()=> {
    before(()=> {

    })

    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
        cy.get("input[name='username']").type("test.testing");
        cy.get("input[name='password']").type("Automation@12");
        cy.get("input.button").click();
    })

    it("Verify user is able to login successfully", () => {
        cy.title().should('eq','ParaBank | Accounts Overview');
    })

    it("Verify contact tab",()=> {
        cy.get("li.contact").click();
        cy.get("#name").type("test");
        cy.get("#email").type("test@gmail.com");
        cy.get("#phone").type("7377392");
        cy.get("#message").type("automation");
        //cy.get('input[value="Send to Customer Care"]').click();
        cy.contains('Send to Customer Care').click();
        cy.get("h1.title").invoke('text').then((text)=> {
            expect(text).to.eq('Customer Care');
        })

       
    })

    
})