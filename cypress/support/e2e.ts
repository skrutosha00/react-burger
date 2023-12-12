export function setUpAndVisit() {
  cy.viewport(1440, 900);
  cy.visit("http://localhost:3000/");
}

export function dragDrop(ingredientPosition: "first" | "last") {
  cy.get(`[cy-test="BurgerIngredients"] a:${ingredientPosition}`).trigger(
    "dragstart"
  );
  cy.get(`[cy-test="BurgerConstructor"]`).trigger("drop");
}
