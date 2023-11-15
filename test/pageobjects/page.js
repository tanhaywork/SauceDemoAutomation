import { browser } from "@wdio/globals";

export default class Page {
  get btnMenu() {
    return $("#menu_button_container button#react-burger-menu-btn");
  }

  get lnkResetAppState() {
    return $("#reset_sidebar_link");
  }

  get lblCartBadge() {
    return $(".shopping_cart_badge");
  }

  get lnkCart() {
    return $(".shopping_cart_link");
  }

  async resetAppState() {
    await this.btnMenu.click();
    await this.lnkResetAppState.click();
  }

  async verifyThatProductIsAddedToCart(product) {
    await expect(this.dynamicBtnRemove(product)).toBeDisplayed();
    await expect(this.lblCartBadge).toHaveText("1");
  }

  async clickOnCart() {
    await this.lnkCart.click();
  }

  async verifyThatShoppingCartDisplay() {
    await expect(this.lnkCart).toBePresent();
  }

  open(path) {
    return browser.url(`${path}`);
  }
}
