import {
	popUpWindow,
	dismissBtn,
	giftCardTab,
	animatedChecBox,
	cardDesigns,
	priceLow,
	priceHigh,
	goButton,
	firstItem,
	eGiftCardTitle,
	gitCardUrl,
	validateAmount,
	amountTextBox,
	toField,
	nameField,
	messageField,
	quantityField,
	deliveryDateField,
	selectDate,
	addToCartButton,
	icon,
	endPointOne,
} from "../selectors/giftCardPage";
import data from "../../fixtures/data.json";
import LandingPage from "./landingPage";

export default class GiftCardPage extends LandingPage {
	static giftCardTabVisible() {
		return cy.xpath(giftCardTab).should("be.visible");
	}

	static clickGiftCardTab() {
		cy.get(popUpWindow).then(($popUp) => {
			if ($popUp.is(":visible")) {
				cy.xpath(dismissBtn).click({ force: true });
				this.giftCardTabVisible();
				return cy.xpath(giftCardTab).click();
			} else {
				this.giftCardTabVisible();
				return cy.xpath(giftCardTab).click();
			}
		});
	}

	static clickOnAnimatedCheckBox() {
		return cy.xpath(animatedChecBox).click();
	}

	static enterLowPrice() {
		return cy.get(priceLow).type(data.priceOneDollar);
	}

	static enterHighPrice() {
		cy.get(priceHigh).type(data.priceHundredDollar);
		return cy.get(goButton).click({ force: true });
	}

	static clickOnFirstItem() {
		return cy.xpath(firstItem).click();
	}

	static eGiftCardTitleVisible() {
		return cy.get(eGiftCardTitle).should("be.visible");
	}

	static veriifyEGiftCardPageUrl() {
		return cy.url().should("include", gitCardUrl);
	}

	static veriifyCardDesignsVisible() {
		return cy.get(cardDesigns).should("be.visible");
	}

	static enterAmount() {
		cy.get(amountTextBox).type(data.priceHundredDollar);
		cy.get(validateAmount).should("have.text", data.checkAmount);
	}

	static typeEmailAndName(email, personName) {
		cy.get(toField).clear();
		cy.get(toField).type(email);
		cy.get(nameField).clear();
		return cy.get(nameField).type(personName);
	}

	static typeInMessageAndQuantity(message, quantity) {
		cy.get(messageField).clear();
		cy.get(messageField).type(message);
		cy.get(quantityField).clear();
		return cy.get(quantityField).type(quantity);
	}

	static typeInDateField() {
		cy.get(deliveryDateField).click();
		return cy.xpath(selectDate).click({ force: true });
	}

	static clickAddToarButton() {
		cy.get(addToCartButton).should("not.be.disabled");
		cy.get(addToCartButton).click({ force: true });
		cy.get(icon).should("be.visible");
		cy.contains(data.textMsg).should("be.visible");

		const endpoint = endPointOne;
		cy.request("GET", endpoint).then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.not.be.null;
		});
	}
}
