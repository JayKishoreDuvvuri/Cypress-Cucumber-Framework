import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import LandingPage from "../pages/landingPage";
import ProductDetailsPage from "../pages/productDetailsPage";
import productDetailsPage from "../selectors/productDetailsPage";

Given("I open the application and click the cookie for DE page", () => {
	LandingPage.openApp();
	LandingPage.clickCookieDE();
	LandingPage.logoVisible();
	LandingPage.verifyTitleDE();
	LandingPage.verifyUrlDE();
	LandingPage.searchBarEnabled();
	LandingPage.clickLanguageIcon();
});

When(
	"I type in product name {string} in the search bar and click search button",
	(item) => {
		LandingPage.clearField();
		LandingPage.typeProductName(item);
		LandingPage.clickSubmitButton();
	}
);

Then("I should see the product list label displayed", () => {
	LandingPage.productListLabelVisible();
});

When("I select the Price: High to Low from the sort dropdown", () => {
	LandingPage.sortDropDownVisible();
	LandingPage.clickOptionHighToLow();
});

And("I click the second product from the list for the DE webpage", () => {
	LandingPage.selectSecondProductDE();
});

Then("I should see product details page to verify title and verify url", () => {
	ProductDetailsPage.productTitleVisible();
	ProductDetailsPage.verifyProductDetailsPageUrlDE();
});

And("I should verify the product topic name contains the required text for DE", () => {
	ProductDetailsPage.verifyProductTopicDE();
});
