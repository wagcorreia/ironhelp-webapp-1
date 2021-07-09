import { Component } from "react";
import axios from "axios";
import MuralCards from "./MuralCards";
import DeleteHelp from "./DeleteHelp";

class MyHelpsList extends Component {
  state = {
    myQuestionsData: [],
  };
  componentDidMount = async () => {
    await axios
      .get(`https://sao-ironrest.herokuapp.com/ironhelp-webapp/`)
      .then((response) => {
        this.setState({ myQuestionsData: [...response.data] });
      })
      .catch((err) => console.log(err));
    console.log(this.state.myQuestionsData);
  };

  render() {
    let myHelps = this.state.myQuestionsData.filter(
      (element) => element.user === this.props.match.params.id
    );
    return (
      <div>
        {myHelps.map((element) => {
          return (
            <MuralCards
              title={element.title}
              body={element.body}
              DeleteHelp={this.props.DeleteHelp} //botao deletar pergunta vinda da props da função deleteHelp do componente DeleteHelp
            />
          );
        })}
      </div>
    );
  }
}

export default MyHelpsList;
