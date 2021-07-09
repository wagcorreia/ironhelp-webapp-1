import React, { Component } from 'react'
import axios from 'axios'
import history from '../history'
import './styles/Signup.css'

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
      <div className="container wrapper3 fadeInDown3">
        <form className="formContent3" onSubmit={this.handleSubmit}>
          <div className="field fadeIn3 fadeIn3.first">
            <label className="">Name</label>
            <div className="container">
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

          <div className="field fadeIn3.second">
            <label className="label">Username</label>

            <div className="container">
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

          <div className="container fadeIn3.third">
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

          <div className="container">
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
        </form>
        <div className="field">
          <div className="control container formFooter3">
            <label className="checkbox">
              <input
                style={{
                  padding: '5px',
                  width: '6%',
                  maxWidth: '800px',
                  textAlign: 'right',
                }}
                className="checkbox container"
                onChange={this.handleChangeCheckbox}
                type="checkbox"
                name="termsAgreement"
              />{' '}
              <p> Aceito os termos e condições!</p>
            </label>
          </div>
        </div>

        <div className="container fadeIn3.fourth">
          <div className="">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
