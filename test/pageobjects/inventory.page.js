import { $ } from "@wdio/globals";
import Page from "./page.js";

class InventoryPage extends Page {
  dynamicBtnAddToCart(product) {
    return $(`#add-to-cart-${this.convertToSlug(product)}`);
  }

  dynamicBtnRemove(product) {
    return $(`#remove-${this.convertToSlug(product)}`);
  }

  async clickOnAddToCart(product) {
    await this.dynamicBtnAddToCart(product).click();
  }

  open() {
    return super.open("/inventory.html");
  }

  convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }
}

export default new InventoryPage();
