import axios from 'axios'

function DeleteHelp(props) {
  axios.delete(
    `https://sao-ironrest.herokuapp.com/ironhelp-webapp/${this.props.match.params.questionID}`,
  )
  const user = axios.get(
    `https://sao-ironrest.herokuapp.com/ironhelp-webapp-users/${this.props.match.params.userID}`,
  )
  const updatedQuestions = user.data.questions.filter(
    (question) => question !== this.props.match.params.questionID,
  )
  axios.put(
    `https://sao-ironrest.herokuapp.com/ironhelp-webapp-users/${this.props.match.params.userID}`,
    { questions: updatedQuestions },
  )
}
export default DeleteHelp
