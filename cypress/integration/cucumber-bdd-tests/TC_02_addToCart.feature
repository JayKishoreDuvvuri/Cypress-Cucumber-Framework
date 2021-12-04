Feature: Add to Cart 

As a user
I want to launch the Application and click on the gift cards tab
and select the check box Animation under the section Format
Type in low price and high price as $1 and $100 and hit enter
Select first card from the list and navigate to Gift card details page
Select Animated button and validate the card designs and size of the cards which are available in standard and Animated categories
Click on the $100 button on the Amount section under the label 2. Gift card details
Fill in the From, To, Message and Quantity fields and add the product to the cart 
Verify the status code after adding the product to cart

Scenario Outline: Launch the Application to select Animated gift card and Add the product to shopping cart
Given I open the application and click on the gift cards tab
When  I select the check box Animation under Format section
And   I type in low price and high price as $1 and $100 and hit enter
When  I click the first card in the list displayed with $1-$2,000
Then  I navigate to gift card details page under the section 1. Gift card design
And   I verify Card Designs are visible and Type $100 in the custom amount field
When  I type email "<EmailID>" in To text box and "<Name>" Name in From text box
When  I type message "<Message>" in Message text box and "<Quantity>" in Quantity text box 
And   I select an avalilable delivery date
Then  I click Add to cart button to validate the response code

Examples:
  | EmailID          | Name         | Message                         | Quantity | 
  | test123@test.com | TestCustomer | Enjoy this Amazon Gift Card!    | 5        | 
  | test111@test.com | TestAbcXyz   | Enjoy this Beautiful Gift Card! | 3        | 
