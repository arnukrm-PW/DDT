class BasePage { 

    constructor(page){
        this.page=page
    }
    async navigator(url){
        await this.page.goto(url)
    }
}

class LoginPage extends Basepage{

async login(){
    await console.log("Login")
}

}
const loginPage = new LoginPage(page)
await loginPage.