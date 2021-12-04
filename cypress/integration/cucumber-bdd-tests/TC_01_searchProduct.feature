Feature: Search 

As a user
I want to launch the Application and search for the product Nikon
and see the sort results in descending order and then select the second product
from the list to see the product details to verify the required product topic contains text as Nikon D3100

Scenario Outline: Launch the Application and Search Product
Given I open the application and see the search bar
When  I type in product name "<Product>" in the search bar and click search button
Then  I should see the product list label displayed
When  I select the Price: High to Low from the sort dropdown
And   I click the second product from the list
Then  I should see product details page
And   I should verify the product topic name contains the required text

Examples:
  | Product | 
  | Nikon   | 