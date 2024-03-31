describe ("Verify Login functionality", ()=> {
    before(()=> {

    })

    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
        cy.get("input[name='username']").type("test.testing");
        cy.get("input[name='password']").type("Automation@12");
        cy.get("input.button").click();
    })
    it("Verify admin page functionality",() => {
        cy.contains('Admin Page').click();
        cy.get('#accessMode3').click();
        cy.get('#initialBalance').clear().type('50000');
        cy.get('#minimumBalance').clear().type('1000');
        cy.get('#loanProvider').select('JMS').should('have.value','jms');
        cy.get('#loanProcessor').select('Combined').should('have.value','combined');
        cy.get('#loanProcessorThreshold').clear().type('3');
        cy.get('input[value="Submit"]').click();
        cy.get('#rightPanel p b').should('have.text', 'Settings saved successfully.');
    })
    it ("Verify contact button functionality", () => {
        cy.get('li.aboutus').click();
       // cy.get('#rightPanel p a').click();
        cy.title().should('contain','Automated Testing');
        //cy.title().should('include.text','Automated Testing');
    })
})