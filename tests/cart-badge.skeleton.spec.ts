import { test, expect } from "@playwright/test";

// the deliberately flaky test.
//
// Copy this file into the tests/ directory of your own repository as
// cart-badge.spec.ts, complete the blanks in PART 1, push it, and re-run the
// pipeline several times until the HTML report labels it "flaky".
//
// PART 1 is written the wrong way on purpose: it reads the badge text ONCE with
// textContent() and compares the result. A one-shot read does not retry, so it
// races the page. Under CI load it will sometimes read null or an empty string.
//
// Then complete PART 2 with the correct fix, delete PART 1, and push again.

const USERNAME = "standard_user";
const PASSWORD = "secret_sauce";

async function signIn(page) {
  await page.goto("/");
  await page.getByPlaceholder("Username").fill(USERNAME);
  await page.getByPlaceholder("Password").fill(PASSWORD);
  await page.getByRole("button", { name: "Login" }).click();
}

// ---------------------------------------------------------------- PART 1
// Fill the blanks, push, and watch the report. Do NOT fix it yet.

test("cart badge shows one item after adding a product", async ({ page }) => {
  await signIn(page);

  await page.getByRole("button", { name: "Add to cart" }).first().click();

  // one-shot read — this is the defect you are here to observe
  const badge = await page.locator(".shopping_cart_badge").textContent();
  expect(badge).toBe("1");
});

// ---------------------------------------------------------------- PART 2
// The correct fix: assert on the LOCATOR, so the assertion retries until the
// element carries the expected text or the timeout expires. Complete this test,
// delete PART 1, and confirm the run is green with no flaky results.
//
// Do not fix PART 1 by raising `retries` — that hides the defect and is an
// automatic zero for this task.

test.skip("cart badge shows one item after adding a product (fixed)", async ({
  page,
}) => {
  await signIn(page);

  await page.getByRole("button", { name: "Add to cart" }).first().click();

  await ________(page.locator(".shopping_cart_badge")).____________("____");
});
