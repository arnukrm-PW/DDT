const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path:path.resolve(__dirname,"../.env")})


const ENV_URL = {
    dev:process.env.Dev_URL,
    qa:process.env.QA_URL,
    stage:process.env.STAGE_URL,
    prod:process.env.PROD_URL
}
const ENV=process.env.ENV||"qa"
const base_URL=ENV_URL[ENV]
const SD_username=process.env.SD_USERNAME
const SD_password=process.env.SD_PASSWORD

module.exports={base_URL,SD_username,SD_password}