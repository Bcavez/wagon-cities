import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions/index';

class City extends Component {
  render() {
    const {
      name
    } = this.props.city;

    return (
      <h3 onClick={() => this.props.setActiveCity(this.props.city)}>{name}</h3>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
}

// function mapStateToProps(state) {
//   return {
//     city: state.city
//   };
// }


// export default City;
// export default connect(mapStateToProps, mapDispatchToProps)(City);
export default connect(null, mapDispatchToProps)(City);
