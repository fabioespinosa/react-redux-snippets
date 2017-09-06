// Genera un 'Container' conectado al state de redux;
module.exports =
`import React, {Component} from 'react';
import {connect} from 'react-redux';
import {` + "${1}"+ `} from '/../../ducks/` + "${2}" + `';

class ` + "${3}" + ` extends Component {

  render(){
    return (
      <div>
        ` + "${4}" + `
      </div>
    );
  }
}

function mapStateToProps(state){
  return {

  };
}

export default connect(mapStateToProps, {` + "${1}"+ `})(` + "${3}" + `);`
