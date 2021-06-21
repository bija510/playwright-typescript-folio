# Playwright-Typescript-Test Runner
* [Playwright Test Runner](https://playwright.dev/docs/test-intro/)- is a customizable test framework to build your own test frameworks. Foundation for the Playwright test runner.Playwright test runner Zero config cross-browser end-to-end testing for web apps. Browser automation with Playwright, Jest-like assertions and built-in support for TypeScript.

## Getting Start
```
Step 1 : Install visual studio code
Step 2 : Create a folder & give a name that is the Project
Step 3 : control + j to bring terminal & run command npm init -y to create package.json file
Step 4 : & add this inside the package.json file
 "devDependencies": {
        "playwright": "~1.10.0"
    }

Step 5 : run command npm i to install the playwright.
Step 6 : run command npm i -D @playwright/test to install playwright test runner with folio
Step 7 : all set create .ts script or copy this script from docs & run 
all set up done & good to go ......
```

### How to run all test test case with this options like |screenshotOnFailure|video|slowmo|chromium|headful|autocloseBrowser|
* npx folio --param headful browserName=chromium
* npx folio --param headful slowMo=100 browserName=chromium
* npx folio --param browserName=chromium, headful=true, slowMo=50, video=true, screenshotOnFailure=true

```
# Run all test on all 3 browser
npx playwright test --browser=all

# Run all tests default in chromium & default is headless
npx playwright test

# Run all tests in headful mode
npx playwright test --headed

# Run all tests on a single browser
npx playwright test --headed --browser=chromium
npx playwright test --headed --browser=firefox
npx playwright test --headed --browser=webkit 

# Run a single test file
npx playwright test tests/BasicActionOne.spec.ts

# Run tests with slowMo (slows down Playwright operations by n milliseconds)
npx folio --param slowMo=100

# Save screenshots on failure in test-results directory
npx folio --param screenshotOnFailure

# Record videos
npx folio --param video

# Retry test failures
npx folio --retries 3

# See all options
npx folio --help
```