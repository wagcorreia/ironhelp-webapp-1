import React, { Component } from 'react'
import axios from 'axios'
import history from '../history'

class Signup extends Component {
  state = {
    name: '',
    email: '',
    username: '',
    password: '',
    termsAgreement: false,
    questions: [],
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: !this.state[event.target.name] })
  }

  handleCancelButton = () => {
    history.push(`/${this.props.match.params.id}`)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(
        'https://sao-ironrest.herokuapp.com/ironhelp-webapp-users',
        this.state,
      )
      this.props.handleLogIn(true)
      history.push(`/${response.data._id}`)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <div className="">
        <form className="" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="">Name</label>
            <div className="">
              <input
                name="name"
                className=""
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Username</label>

            <div className="">
              <input
                name="username"
                className=""
                type="text"
                placeholder="Choose your Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <span className=""></span>
            </div>
          </div>

          <div className="">
            <label className="">Email</label>
            <div className="">
              <input
                name="email"
                className=""
                type="email"
                placeholder="Your e-mail"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <span className=""></span>
            </div>
          </div>

          <div className="">
            <label className="">Password</label>
            <div className="">
              <input
                name="password"
                className=""
                type="password"
                placeholder="Choose your password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span className=""></span>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  onChange={this.handleChangeCheckbox}
                  type="checkbox"
                  name="termsAgreement"
                />{' '}
                So pra dizer que tem uns termos pra aceitar, marca ai!
              </label>
            </div>
          </div>

          <div className="">
            <div className="">
              <button className="" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup
