import { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Search from "./Search";
import MuralCards from "./MuralCards";

class Mural extends Component {
  state = {
    questionFilter: [],
    questionData: [],
    wordActual: "", //variável para salvar o que usuário digita
  };

  // salvando o que o usuário digitar no state variavel wordActual, salvando no Targe.value
  handleChange = (event) => {
    this.setState({ wordActual: event.target.value });
  };

  //Componente DidUpdate atualiza pega da API e compara o state wordActual com a busca anterior para salvar e mostrar na tela, filtrando pela variável vazia de string que o usuario digita e inclue nela.
  componentDidUpdate = (prevProps, prevState) => {
    // aqui fazemos um IF para comparar salvar o que já foi digitado e rendenizado antes, e continuar mostrando abaixo
    if (prevState.wordActual !== this.state.wordActual) {
      axios
        .get("https://sao-ironrest.herokuapp.com/ironhelp-webapp")
        .then((response) => {
          const filtered = response.data.filter((el) =>
            el.title.toLowerCase().includes(this.state.wordActual.toLowerCase())
          );
          this.setState({ questionData: filtered });
        });
    }
  };

  //trazendo as perguntas da API já feitas:
  componentDidMount = () => {
    axios
      .get("https://sao-ironrest.herokuapp.com/ironhelp-webapp")
      .then((response) => {
        this.setState({ questionData: [...response.data] });
        console.log(response, this.state.questionData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <main className="container">
        <div className="questionsBox">
          <Search
            handleChange={this.handleChange}
            name="wordActual"
            placeholder="Digite sua busca aqui.."
            value={this.state.wordActual}
          ></Search>
          {/* retornando as questions salvas na array com map dentro de divs: */}
          {this.state.questionData.map((element, i) => {
            return (
              // aqui retorna o componente com props e os cards com as perguntas
              <MuralCards title={element.title} body={element.body} />
            );
          })}
        </div>
      </main>
    );
  }
}

export default Mural;
