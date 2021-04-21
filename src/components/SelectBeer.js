import React from "react";

const SelectBeer = ({beers, onBeerSelected}) => {

    const handleChange = function(event){
        const chosenBeer = beers[event.target.value];
        onBeerSelected(chosenBeer);
    }
    const beerOptions = beers.map((beer, index) => {
        return <option value={index} key={index}>{beer.name}</option>
    })
  
    return (

        <div>
        <h1>Beer List</h1>
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Beer</option>
            {beerOptions}
        </select>
        </div>
    )
    
}
export default SelectBeer;