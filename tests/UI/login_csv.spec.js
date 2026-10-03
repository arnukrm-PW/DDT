const logger = require('../../utils/logger')
const {test,expect}=require("@playwright/test")
const {base_URL} = require('../../utils/envConfig')
const path = require('path')
const readCSV = require('../../utils/readCSV')
const loginData = readCSV(path.join(__dirname,'../../testData/loginData.csv'))


test.describe("DDT using CSV",()=>{

    for (const  data of loginData){
test(`login to SD with ${data.username}`,async({page})=>{
    logger.info("test started")
    await page.goto(base_URL)
    logger.info("App Opended")
    await page.getByPlaceholder('Username').fill(data.username)
    logger.info("username entered")
    await page.getByPlaceholder('Password').fill(data.password)
    logger.info("password entered")
    await page.locator('[data-test="login-button"]').click()
    logger.info("submit button clicked")
    if(data.message ==="success"){
        await expect(page.getByText('Products')).toBeVisible()
    }else if(data.message==="locked"){
        await expect(page.locator('[data-test="error"]')).toContainText('locked')
    }
})

}})



// const loginData = require('../testData/loginData')
// const { test, expect } = require('@playwright/test')
// const { base_URL } = require('../utils/envConfig')

// test.describe("Data Driven Test for Login SD", () => {

//     for (let data of loginData) {
//         test(`login with ${data.username}`, async ({ page }) => {
//             await page.goto(base_URL)
//             await page.getByPlaceholder('Username').fill(data.username)
//             await page.getByPlaceholder('Password').fill(data.password)
//             await page.locator('[data-test="login-button"]').click()

//             if (data.message === "success") {
//                 await expect(page.getByText("Products")).toBeVisible()
//             } else if (data.message === "locked") {
//                 await expect(page.locator('[data-test="error"]')).toContainText('locked')
//             }
//         })
//     }
// })
