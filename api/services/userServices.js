

class UserServices { 
    constructor(apiClient){
        this.apiClient = apiClient
    }
async getUser(page=1){
    return await this.apiClient.get(`https://reqres.in/api/users?page=${page}`)
}
async createUser(userData){
    
}
}