import { Page } from "../redux/page";
import match from "./match";

export const pageTitle = (p: Page) =>
  match(p, {
    home: "Home",
    about: "About",
    cart: "Cart",
    search: "Search",
    account: "Account",
    messages: "Messages"
  });
