const loginData = require('../../testData/loginData')
const { test, expect } = require('@playwright/test')
const { base_URL } = require('../../utils/envConfig')

test.describe("Data Driven Test for Login SD", () => {

    for (let data of loginData) {
        test(`login with ${data.username}`, async ({ page }) => {
            await page.goto(base_URL)
            await page.getByPlaceholder('Username').fill(data.username)
            await page.getByPlaceholder('Password').fill(data.password)
            await page.locator('[data-test="login-button"]').click()

            if (data.message === "success") {
                await expect(page.getByText("Products")).toBeVisible()
            } else if (data.message === "locked") {
                await expect(page.locator('[data-test="error"]')).toContainText('locked')
            }
        })
    }
})
