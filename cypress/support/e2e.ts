import { DEV_URL } from "../../src/services/globalVars";

export function setUpAndVisit() {
  cy.viewport(1440, 900);
  cy.visit(DEV_URL);
}

export function dragDrop(ingredientPosition: "first" | "last") {
  cy.get(`[cy-test="BurgerIngredients"] a:${ingredientPosition}`).trigger(
    "dragstart"
  );
  cy.get(`[cy-test="BurgerConstructor"]`).trigger("drop");
}
