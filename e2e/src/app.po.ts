import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css("app-root h1")).getText() as Promise<string>;
  }

  typeIntoInput(typing: string) {
    return element(by.name("peselInput")).sendKeys(typing);
  }

  submitInput() {
    return element(by.id("submitForm")).click();
  }

  getErrorMessage() {
    return element(by.className("isValidMessage")).getText();
  }
}
