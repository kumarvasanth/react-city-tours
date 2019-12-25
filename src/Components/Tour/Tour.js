import React, { Component } from "react";
import "./Tour.scss";

class Tour extends Component {
  state = {
    clicked: false
  };

  oninfoClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    //console.log(this.props.tours.img);
    // const { city, name, img, info } = this.props.tours;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={this.props.tours.img}></img>

          <span
            className="btn-ctl"
            onClick={() => {
              this.props.removetour(this.props.tours.id);
            }}
          >
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{this.props.tours.city}</h3>
          <h4>{this.props.tours.name}</h4>
          <h5>
            info {""}
            <span onClick={this.oninfoClick}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.clicked && <p>{this.props.tours.info}</p>}
        </div>
      </article>
    );
  }
}
export default Tour;
