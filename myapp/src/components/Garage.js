import React, { Component } from "react";
import Car from "./Car";
import AddCar from "./AddCar";

class Garage extends Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <AddCar add_car={this.props.add_car}/>
        {
          this.props.cars.map(_car => <Car car={_car} key={_car.id} delete_car = {this.props.delete_car}/>)
        }
      </div>
    );
  }
}

export default Garage;