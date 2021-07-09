import React, { Component } from 'react'
import axios from 'axios'
import history from '../history'

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
      <div className="">
        <form className="" onSubmit={this.handleSubmit}>
          <div className="">
            <label className="">Username</label>

            <div className="">
              <input
                name="username"
                className=""
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <span className="">
                <i className=""></i>
              </span>
            </div>
          </div>

          <div className="">
            <label className="">Password</label>
            <div className="">
              <input
                name="password"
                className=""
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span className="">
                <i className=""></i>
              </span>
            </div>
          </div>

          <div className="">
            <div className="">
              <button className="" type="submit">
                Login
              </button>
            </div>
            <div className="">
              <button onClick={this.handleCancelButton} className="">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
