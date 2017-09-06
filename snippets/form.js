// Genera un 'Container' conectado al state de redux;
module.exports =
`import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {` + "${1}"+ `} from '/../../ducks/` + "${2}" + `';

class ` + "${3}" + ` extends Component {

  render(){
    const {handleSubmit} = this.props;
    return (
      <div>
        ` + "${5}" + `
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  return errors;
}

function mapStateToProps(state){
  return {

  };
}

`+ "${3}" +` = reduxForm({
  form: '` + "${4}" + `',
  validate
})(` + "${3}" + `);

`+ "${3}" +` = connect(mapStateToProps, {` + "${1}"+ `})(` + "${3}" + `);

export default ` + "${3}" + `;`
