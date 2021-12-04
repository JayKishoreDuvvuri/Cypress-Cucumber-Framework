import {
	productTitle,
	productTitleText,
	productTitleTextDE,
	productDetailsPageUrl,
	productDetailsPageUrlDE,
	brand,
	nikon,
} from "../selectors/productDetailsPage";
import LandingPage from "./landingPage";

export default class ProductDetailsPage extends LandingPage {
	static productTitleVisible() {
		cy.get(productTitle).should("be.visible");
	}

	static verifyProductDetailsPageUrl() {
		return cy.url().should("include", productDetailsPageUrl);
	}

	static verifyProductDetailsPageUrlDE() {
		return cy.url().should("include", productDetailsPageUrlDE);
	}

	static brandVisible() {
		return cy.xpath(brand).should("be.visible");
	}

	static nikonLabelVisible() {
		return cy.xpath(nikon).should("be.visible");
	}

	static verifyProductTopic() {
		return cy.get(productTitle).should("contain", productTitleText);
	}

	static verifyProductTopicDE() {
		return cy.get(productTitle).should("contain", productTitleTextDE);
	}
}
