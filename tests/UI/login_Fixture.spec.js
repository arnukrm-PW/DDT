const {base_URL,SD_username,SD_password} = require('../../utils/envConfig')
const {test,expect}=require('../../fixture/login.fixture')

test.describe("Login to SD", ()=>{



test(`login to page with Login Fixture`,async ({logintoApp})=>{
    await expect(logintoApp.getByText('Products')).toBeVisible()

await test.step("product count",async()=>{


const count = await logintoApp.getByRole('button',{name:"Add to cart"}).count()
console.log(count)

await expect(count).toBe(6)
} )
})

})