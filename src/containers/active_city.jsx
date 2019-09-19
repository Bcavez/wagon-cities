import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    const {
      name,
      address,
      slug
    } = this.props.activeCity;

    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(https://kitt.lewagon.com/placeholder/cities/${slug})`
    };

    return (
      <div className="active-city" style={style}>
        <h3>{name}</h3>
        <p>{address}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { activeCity: state.activeCity };
}


export default connect(mapStateToProps)(ActiveCity);
