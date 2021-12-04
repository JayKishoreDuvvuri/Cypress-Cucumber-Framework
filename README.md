# Cypress-Cucumber: Page Objects Automation Framework
An example project demonstrating automated UI tests using JavaScript-based testing with Cypress-Cucumber with Page Object Design Framework.


## Application Under Test
We are using https://www.amazon.com as the Application Under Test.

-   URL : https://www.amazon.com


### Installation
Install the dependencies and devDependencies to run the test.

-   Clone (OR) Download this repo as zip folder on to your local machine
-   Navigate to project's directory on terminal and run the following commands:

```sh
npm install
```


### Open Cypress runner on Terminal
Run the following command on Terminal to open Cypress Test Runner:
```sh
npm run cy:open  (OR) npx cypress open
```


### Execute Tests
Run the following command on Terminal to execute tests in Headless mode on chrome in parallel with test report:
```sh
npm run test - Run all the tests Parallel
```

Run the following command on Terminal to run Search Product test on DE website:
```sh
npm run test:DE        - Run search product test on https://www.amazon.de/ on headed Electron browser
npm run test:chrome:DE - Run search product test on https://www.amazon.de/ on headless chrome
```

Run the following command in Terminal to execute Individual test on Chrome headless:
```sh
npm run searchproduct-test - Run Search Product test
npm run addToCart-test     - Run Add to Cart test
```

### Folder Structure

In the folder cypress > integration, all the info related to the application is found, like features, pages and step definitions.

Top - Level Directory Layout

```sh
.
├── CY-BDD-TESTS                              # Here you can find the entire project.
|    ├── cypress                              # This folder contains all the cypress structure
│           ├── fixtures                      # Fixtures are used as external pieces of static data that can be used by your tests
|           ├── integration                   # Folder that includes the whole framework structure
|                   ├── Cucumber-bdd-tests    # Folder with all the Feature files which are actual tests to execute with '.feature' extension
|                   ├── pages                 # All the pages for respective features
|                   ├── selectors             # Locators with respective to specific page
|                   └── step_definitions      # Step Definitions for each Feauture file
|
|
|
|
|       ├── plugins                          # Plugins that enable to modify the internal behavior of Cypress
|       ├── Screenshots                      # Screenshots on error and exceptions
|       ├── support                          # Place for reusable behavior or Custom Commands. Opening url is re-used from here
|       ├── report.js                        # Config file to generate cucumber HTML Report
|       ├── cucumber-report                  # Test results and report on HTML
|
|
|   ├── node_modules
|   ├── .prettierrc
|   ├── cypress.json                         # Configuration file for Cypress
|   ├── package-lock.json
|   ├── package.json                         # Lists of packages
|   └── README.md
```


### Test Report
You can find the cucumber-html-report in the following directory of the Project.
```sh
npm run test-report
```
