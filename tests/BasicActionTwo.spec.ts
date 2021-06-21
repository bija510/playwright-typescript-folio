import { test, expect } from "@playwright/test"


test.describe('open demo page test-suite', () => {

    test('open demo page test', async ({ page }) => {
        await page.goto('http://demo.automationtesting.in/Register.html')
        await page.fill("input[placeholder='First Na']", 'david')
    })

})

// npx folio --param browserName=chromium, headful=true, slowMo=50, video=true, screenshotOnFailure=true