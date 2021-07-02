describe("Task application Testing", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")

    })
    it("visit the homepage", ()=>{
        cy.get("h1")
            .should("have.text", "Tasks")
    })

    it("should have input box after visiting the page", ()=>{
        cy.focused()
            .should("have.class","task-input")
            .should("have.attr", "placeholder", "Add something?")
    })

    it("on typing on the input box it should contain value", ()=>{
        const text = "LEARN CYPRESS";

        cy.intercept('POST', '/tasks', {
            statusCode: 200,
            body: {
                title: text,
                status: false,
                id: 1
            }
        })
        cy.get(".task-input")
            .type(text)
            .should("have.value", text)
            .type("{enter}")
            .should("have.value", text)

        cy.get(".task-list li")
            .should('have.length', 1)
            .and("contain", text)
    })
})