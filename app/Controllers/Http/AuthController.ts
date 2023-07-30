// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ auth, request, response }) {
    const username = request.input('username')
    const password = request.input('password')
    let result = await auth.use('web').attempt(username, password)
    console.log(result)
    if(result) {
      console.log(auth.user)  
    } else{
      console.log("The auth attempt failed")
    }
    return response.redirect('/')
  }

}
