const {base_URL,SD_username,SD_password} = require('../utils/envConfig')
const {test:base,expect}=require('@playwright/test')

const test = base.extend({
logintoApp:async({page},use)=>{
    await page.goto(base_URL)
    await page.getByPlaceholder("Username").fill(SD_username)
    await page.getByPlaceholder('Password').fill(SD_password)
    await page.locator('[data-test="login-button"]').click()
    await expect(page.getByText('Products')).toBeVisible()

    await use(page)
}
})


module.exports={test,expect}