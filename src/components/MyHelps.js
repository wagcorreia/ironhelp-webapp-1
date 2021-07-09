import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyHelpsList from './MyHelpList'

function MyHelps(props) {
  return (
    <>
      <Link to={`/${props.match.params.id}/CreateHelpsForm`}>
        <button type="button" class="btn btn-primary btn-lg">
          Peça um HELP!
        </button>
      </Link>
      <MyHelpsList {...props} />
    </>
  )
}

export default MyHelps
