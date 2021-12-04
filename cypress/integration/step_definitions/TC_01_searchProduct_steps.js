import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import LandingPage from "../pages/landingPage";
import ProductDetailsPage from "../pages/productDetailsPage";

Given("I open the application and see the search bar", () => {
	LandingPage.openApp();
	LandingPage.logoVisible();
	LandingPage.verifyTitle();
	LandingPage.verifyUrl();
	LandingPage.searchBarEnabled();
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

And("I click the second product from the list", () => {
	LandingPage.selectSecondProduct();
});

Then("I should see product details page", () => {
	ProductDetailsPage.productTitleVisible();
	ProductDetailsPage.verifyProductDetailsPageUrl();
	ProductDetailsPage.brandVisible();
	ProductDetailsPage.nikonLabelVisible();
});

And("I should verify the product topic name contains the required text", () => {
	ProductDetailsPage.verifyProductTopic();
});
