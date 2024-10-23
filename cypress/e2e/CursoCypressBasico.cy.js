describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/cypress/src/index.html");
  });

  it("envia o formuário com sucesso usando um comando customizado", () => {
    cy.fillMandatoryFieldsAndSubmit();
  });

  it("seleciona um produto (YouTube) por seu texto", () => {
    cy.get("#product").select("YouTube").should("have.value", "youtube");
  });

  it("seleciona um produto (Blog) por seu índice", () => {
    cy.get("#product").select(1).should("have.value", "blog");
  });

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get(":nth-child(4) > input").check().should("have.value", "feedback");
  });

  it("marca cada tipo de atendimento", () => {
    cy.get('[type="radio"]')
      .should("have.length", 3)
      .each(function ($radio) {
        cy.wrap($radio).check();
        cy.wrap($radio).should("be.checked");
      });
  });

  it("marca ambos checkboxes, depois desmarca o último", () => {
    cy.get("#email-checkbox").check();
    cy.get("#phone-checkbox").check();
    cy.get("#phone-checkbox").uncheck();
    cy.get("#email-checkbox").should("be.checked");
    cy.get("#phone-checkbox").should("be.not.checked");
  });

  it("seleciona um arquivo da pasta fixtures", () => {
    cy.get("#file-upload")
      .selectFile("cypress/fixtures/example.json")
      .then("é testado", (input) => {
        expect(input[0].files[0].name).to.eq("example.json");
      });
  });

  it("simula drag n drop", () => {
    cy.get("#file-upload")
      .selectFile("cypress/fixtures/example.json", { action: "drag-drop" })
      .then((input) => {
        expect(input[0].files[0].name).to.eq("example.json");
      });
  });

  it("seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", () => {
    cy.fixture("example.json").as("example");
    cy.get("#file-upload")
      .selectFile("@example")

      .then((input) => {
        expect(input[0].files[0].name).to.eq("example.json");
      });
  });

  it("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", () => {
    cy.get("#privacy a ").should("have.attr", "target", "_blank");
  });

  it("acessa a página da política de privacidade removendo o target e então clicando no link", () => {
    cy.get("#privacy a ").invoke("removeAttr", "target").click();
  });
  it("testa a página da política de privacidade de forma independente", () => {
    cy.visit("http://127.0.0.1:5500/cypress/src/privacy.html");
    cy.contains("CAC TAT - Política de privacidade").should("be.visible");
  });



  
});
