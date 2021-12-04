import {
	url,
	logo,
	landingPageTitle,
	searchBar,
	searchSubmitButton,
	productListLabel,
	sortDropdownButton,
	optionHighToLow,
	product,
	productDE,
	cookieDE,
	languageIcon,
	englishIcon,
	saveButton,
} from "../selectors/landingPage";
import data from "../../fixtures/data.json"

export default class LandingPage {
	static openApp() {
		return cy.openHomePage();
	}

	static logoVisible() {
		return cy.get(logo).should("be.visible");
	}

	static verifyTitle() {
		return cy.title().should("eq", landingPageTitle);
	}

	static verifyTitleDE() {
		return cy.title().should("eq", data.landingPageTitleDE);
	}

	static verifyUrl() {
		return cy.url().should("include", url);
	}

	static verifyUrlDE() {
		return cy.url().should("include", data.urlDE);
	}

	static searchBarEnabled() {
		cy.get(searchBar).should("be.visible");
		return cy.get(searchBar).should("not.be.disabled");
	}

	static clearField() {
		return cy.get(searchBar).clear();
	}

	static typeProductName(item) {
		return cy.get(searchBar).type(item);
	}

	static clickSubmitButton() {
		return cy.get(searchSubmitButton).click();
	}

	static productListLabelVisible() {
		return cy.get(productListLabel).should("be.visible");
	}

	static sortDropDownVisible() {
		return cy.get(sortDropdownButton).should("be.visible");
	}

	static clickOptionHighToLow() {
		cy.get(sortDropdownButton).click();
		return cy.get(optionHighToLow).click();
	}

	static selectSecondProduct() {
		return cy.get(product).click();
	}

	static selectSecondProductDE() {
		return cy.get(productDE).click();
	}

	static clickCookieDE() {
		return cy.get(cookieDE).click();
	}

	static clickLanguageIcon() {
		cy.xpath(languageIcon).click();
		cy.xpath(englishIcon).click();
		return cy.get(saveButton).click();
	}
}
