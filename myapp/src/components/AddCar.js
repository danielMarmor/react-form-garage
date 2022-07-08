import React, { Component } from 'react';

class AddCar extends Component{
    state = {
        brand : '',
        model: '',
        year: '',
        color : ''
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        const newCar = this.state;
        this.props.add_car(newCar);
        this.resetState();

    }
    handleChange=(e, type) =>{
        switch(type){
            case "brand":
                const brandState={...this.state, brand: e.target.value} 
                this.setState(brandState);
                break;
            case "model": 
                const modelState={...this.state, model: e.target.value} 
                this.setState(modelState);
                break;
            case "year":
                const yearState={...this.state, year: e.target.value} 
                this.setState(yearState);
                break;
            case "color": 
                const colorState={...this.state, color: e.target.value} 
                this.setState(colorState);
                break;
            default:
                break;
        } 
        console.log(this.state);     
    }
    resetState =()=>{
        const resetState = {
            brand : '',
            model: '',
            year: '',
            color : ''
        }
        this.setState(resetState);
    }
    render() {
        return (
            <form>
              <span>Brand: <input type='text' value={this.state.brand} onChange={(e)=>this.handleChange(e, 'brand')}/></span>
              <span>Model: <input type='text' value={this.state.model} onChange={(e)=>this.handleChange(e, 'model')}/></span>
              <span>Year: <input type='text' value={this.state.year} onChange={(e)=>this.handleChange(e, 'year')}/></span>
              <span>Color: <input type='text' value={this.state.color} onChange={(e)=>this.handleChange(e, 'color')}/></span>
              <button type='submit'
               style={{color: 'green'}} 
               onClick={ (e) => this.handleSubmit(e)}>+</button>
              <hr />
            </form>)
    }
}

export default AddCar;