import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyHelpsList from './MyHelpList'

function MyHelps(props) {
  return (
    <>
      <Link to={`/${props.match.params.id}/CreateHelpsForm`}>
        <div className="container m-2">
          <button type="button" class="btn btn-primary btn-lg">
            Pedir um HELP!
          </button>
        </div>
      </Link>
      <h2 className="text-center text-light bg-dark">Abaixo suas perguntas:</h2>
      <MyHelpsList {...props} />
    </>
  )
}

export default MyHelps
