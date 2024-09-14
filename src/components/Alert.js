import React from 'react'
import PropTypes from 'prop-types';

function Alert(props) {
  return (

    props.alert && (<div className={`alert alert-${props.alert.typ}fade show`} role="alert">
        <strong>{props.alert.typ}</strong> : {props.alert.msg} 
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>)
  )
} 

export default Alert
