import { USER_URL, ORDER_URL } from "../../src/services/globalVars";
import { dragDrop, setUpAndVisit } from "../support/e2e";

describe("happy road", () => {
  beforeEach(() => {
    localStorage.setItem("accessToken", JSON.stringify("test-refreshToken"));
    localStorage.setItem("refreshToken", JSON.stringify("test-refreshToken"));

    cy.intercept("GET", USER_URL, {
      fixture: "user.json"
    });
    cy.intercept("POST", ORDER_URL, {
      fixture: "order.json"
    });
  });

  it("visit", () => {
    setUpAndVisit();
  });

  it("drag", () => {
    setUpAndVisit();

    dragDrop("first");
    dragDrop("last");
  });

  it("modal", () => {
    setUpAndVisit();

    cy.get(`[cy-test="BurgerIngredients"] a:first`).click();
    cy.get(`[cy-test="ModalCloseButton"]`).click();
  });

  it("order", () => {
    setUpAndVisit();

    dragDrop("first");
    dragDrop("last");

    cy.get(`[cy-test="OrderButton"]`).click();
    cy.get(`[cy-test="ModalCloseButton"]`).click();
  });
});
