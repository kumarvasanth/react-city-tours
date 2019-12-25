import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";
import { tourData } from "../tourData";

class TourList extends Component {
  state = {
    tours: tourData
  };

  onCickRemove = id => {
    const { tours } = this.state;
    const sortedtours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedtours
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => {
          return (
            <Tour
              key={tour.id}
              tours={tour}
              removetour={this.onCickRemove}
            ></Tour>
          );
        })}
      </section>
    );
  }
}
export default TourList;
