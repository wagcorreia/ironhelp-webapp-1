import { Component } from "react";
import axios from "axios";
import MuralCards from "./MuralCards";

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
          console.log(element.user);
          return (
            <MuralCards
              title={element.title}
              body={element.body}
              id={element._id}
              user={element.user}
            />
          );
        })}
      </div>
    );
  }
}

export default MyHelpsList;
