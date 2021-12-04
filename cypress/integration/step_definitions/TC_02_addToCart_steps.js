import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import GiftCardPage from "../pages/giftCardPage";

Given("I open the application and click on the gift cards tab", () => {
	GiftCardPage.openApp();
	GiftCardPage.clickGiftCardTab();
});

When("I select the check box Animation under Format section", () => {
	GiftCardPage.clickOnAnimatedCheckBox();
});

And("I type in low price and high price as $1 and $100 and hit enter", () => {
	GiftCardPage.enterLowPrice();
	GiftCardPage.enterHighPrice();
});

When("I click the first card in the list displayed with $1-$2,000", () => {
	GiftCardPage.clickOnFirstItem();
});

Then(
	"I navigate to gift card details page under the section 1. Gift card design",
	() => {
		GiftCardPage.eGiftCardTitleVisible();
		GiftCardPage.veriifyEGiftCardPageUrl();
	}
);

And(
	"I verify Card Designs are visible and Type $100 in the custom amount field",
	() => {
		GiftCardPage.veriifyCardDesignsVisible();
		GiftCardPage.enterAmount();
	}
);

When(
	"I type email {string} in To text box and {string} Name in From text box",
	(email, personName) => {
		GiftCardPage.typeEmailAndName(email, personName);
	}
);

When(
	"I type message {string} in Message text box and {string} in Quantity text box",
	(message, quantity) => {
		GiftCardPage.typeInMessageAndQuantity(message, quantity);
	}
);

And("I select an avalilable delivery date", () => {
	GiftCardPage.typeInDateField();
});

Then("I click Add to cart button to validate the response code", () => {
	GiftCardPage.clickAddToarButton();
});
