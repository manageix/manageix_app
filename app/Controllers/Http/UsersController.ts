// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from "@ioc:Adonis/Core/View"
import User from "App/Models/User"

export default class UsersController {
  public async index() {
    const users = await User.all()
    return await View.render('users/index', { users })
  }

  public async userForm() {
    return await View.render('users/createUserForm')
  }

  public async viewUser({ params }) {
    const user = await User.find(params.id)
    return await View.render('users/viewUser', { user })
  }

  public async createUser({ request, response}) {
    const username = request.input('username')
    const password = request.input('password')
    const email = request.input('email')
    const first_name = request.input('first_name')
    const last_name = request.input('last_name')
    const user = new User()
    user.username = username
    user.password = password
    user.email = email
    user.first_name = first_name
    user.last_name = last_name
    await user.save()
    return response.redirect('/users')
  }

  public async editUser({params}) {
    const user = await User.find(params.id)
    return await View.render('users/editUser', { user })
  }
}
