import { AppPage } from "./app.po";
import { browser, logging } from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual("Walidator PESEL");
  });

  it('should display "PESEL nieprawidłowy" when user type invalid PESEL', () => {
    page.navigateTo();
    page.typeIntoInput("94041013315");
    page.submitInput();
    browser.sleep(3000);
    expect(page.getErrorMessage()).toContain("PESEL nieprawidłowy");
  });

  it('should display "PESEL prawidłowy" when user type invalid PESEL', () => {
    page.navigateTo();
    page.typeIntoInput("96041013316");
    page.submitInput();
    browser.sleep(3000);
    expect(page.getErrorMessage()).toContain("PESEL prawidłowy");
  });

  afterEach(async () => {
    // Anything?
  });
});
