## Run all tests across Chromium, Firefox and WebKit
npx folio

## How to run all test test case with this options like |screenshotOnFailure|video|slowmo|chromium|headful|autocloseBrowser|
npx folio --param browserName=chromium, headful=true, slowMo=50, video=true, screenshotOnFailure=true

## Run tests on a single browser
npx folio --param browserName=chromium
npx folio --param headful browserName=chromium
npx folio --param headful slowMo=100 browserName=chromium

## Run all tests in headful mode
npx folio --param headful

## Run tests with slowMo (slows down Playwright operations by n milliseconds)
npx folio --param slowMo=100

## Save screenshots on failure in test-results directory
npx folio --param screenshotOnFailure

## Record videos
npx folio --param video

## Retry test failures
npx folio --retries 3

## See all options
npx folio --help