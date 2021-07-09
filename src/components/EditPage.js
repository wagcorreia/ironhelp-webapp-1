import { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class EditPage extends Component {
  state = {
    title: "",
    body: "",
    user: this.props.match.params.id,
    answers: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Envia os dados para a API quando acontece o evento 'submit', que é disparado quando o usuário aciona um botão com 'type' submit dentro de um formulário
  componentDidMount = async () => {
    try {
      const postQuestion = await axios.get(
        `https://sao-ironrest.herokuapp.com/ironhelp-webapp/${this.props.match.params.questionID}`
      );
      const { _id, ...questionToUpdate } = postQuestion.data;
      this.setState({ ...questionToUpdate });
    } catch (err) {
      console.error(err);
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão dos formulários, que é recarregar a página e enviar os dados através da URL
    try {
      await axios.put(
        `https://sao-ironrest.herokuapp.com/ironhelp-webapp/${this.props.match.params.questionID}`,
        { ...this.state }
      );
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <form className="" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Title for your HELP:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="How can we help you?"
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Say more about it:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={this.state.body}
              onChange={this.handleChange}
              name="body"
            ></textarea>
          </div>
          <div>
            <button className="" type="submit">
              Send help!
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default EditPage;
