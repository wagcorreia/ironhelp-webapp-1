import axios from "axios";
import { Component } from "react";

class DeleteHelp extends Component {
  componentDidMount = async () => {
    await axios.delete(
      `https://sao-ironrest.herokuapp.com/ironhelp-webapp/${this.props.match.params.questionID}`
    );
    const user = await axios.get(
      `https://sao-ironrest.herokuapp.com/ironhelp-webapp-users/${this.props.match.params.userID}`
    );
    const updatedQuestions = user.data.questions.filter(
      (question) => question !== this.props.match.params.questionID
    );
    await axios.put(
      `https://sao-ironrest.herokuapp.com/ironhelp-webapp-users/${this.props.match.params.userID}`,
      { questions: updatedQuestions }
    );
  };

  render() {
    return <div></div>;
  }
}

export default DeleteHelp;
