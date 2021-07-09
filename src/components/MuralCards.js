import './styles/Search.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import './styles/MuralCards.css'
import LogoIron from './images/logoIronhack.png'
import DeleteHelp from './DeleteHelp'

function MuralCards(props) {
  return (
    // aqui vem as perguntas da API, primeiro o título da pergunta
    <div className="container wrapper fadeInDown fadeIn ">
      <h2 className="text-center  title">{props.title}</h2>
      <div className="card fadeIn.first wrapper fadeInDown" id="formContent">
        <div className="card-body container fadeIn">
          <div className="row">
            <div
              className="col-md-2  "
              style={{ margin: '0px', padding: '0px' }}
            >
              <img
                style={{
                  width: '80px',
                  height: 'auto',
                  marginTop: '12px',
                  marginBottom: '5px',
                  marginLeft: '10x',
                }}
                src={LogoIron}
                className="img img-rounded img-fluid"
                alt="Logo IronHack"
              />
              <p className="text-secondary">Nome Usuário</p>
            </div>
            <div className="col-md-10">
              <p>
                <a className="" href="#">
                  <strong>Autor</strong>
                </a>{' '}
              </p>

              <p className="fadeIn.second">
                {/* abaixo o texto do corpo da pergunta da API */}
                {props.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MuralCards
