import './styles/Search.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Search(props) {
  return (
    <div id="searchBar" className="container m-3">
      <div className="form-outline">
        <input
          type="text"
          className="form-control"
          name={props.name}
          value={props.value}
          aria-label="Search"
          onChange={props.handleChange}
          placeholder="Digite sua busca aqui.."
        />
      </div>
    </div>
  )
}

export default Search
