import React, { Component } from 'react'
import axios from 'axios'
import history from '../history'
import LogoIron from './images/logoIronhack.png'
import './styles/Login.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    id: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleCancelButton = () => {
    history.push(`/${this.props.match.params.id}`)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const responseUsername = await axios.get(
        `https://sao-ironrest.herokuapp.com/findOne/ironhelp-webapp-users?username=${this.state.username}`,
      )

      if (this.state.username === responseUsername.data.username) {
        this.props.handleLogIn(true, responseUsername.data._id)
        history.push(`/${responseUsername.data._id}`)

        // } else if (userbyEmail.length > 0) {
        //   this.props.handleLogIn(true);
        //   history.push(
        //     `/${
        //       userbyEmail[0].id.length > 0
        //         ? userbyEmail[0].id
        //         : userbyEmail[0]._id
        //     }/`
        //   );
      } else {
        window.alert('Wrong username or password!')
      }
      // console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      // carregando container com efeito de fadinDown com bloco de login
      <div className="container wrapper2 fadeInDown2">
        <form id="formContent2" className="" onSubmit={this.handleSubmit}>
          <img
            src={LogoIron}
            className="logoicon fadeIn2.first"
            alt="Logo IronHack"
          />
          <div className="">
            <label className="">Username</label>

            <div className="fadeIn2.second">
              <input
                name="username"
                className=""
                type="text"
                placeholder="Digite aqui seu usuário"
                value={this.state.username} //pegando valor do username digitado
                onChange={this.handleChange}
              />
              <span className="">
                <i className=""></i>
              </span>
            </div>
          </div>

          <div className="fadeIn2.third">
            <label className="">Password</label>
            <div className="fadeIn2.fourth">
              <input
                name="password"
                className=""
                type="password"
                placeholder="Digite aqui seu Password"
                value={this.state.password} // pegando valor do passoword
                onChange={this.handleChange}
              />
              <span className="">
                <i className=""></i>
              </span>
            </div>
          </div>

          <div className="">
            <button className="btn btn-primary formFooter2" type="submit">
              Login
            </button>{' '}
            <button
              onClick={this.handleCancelButton}
              className="btn btn-primary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
