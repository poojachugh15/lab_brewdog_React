import React from "react";
import SelectBeer from "./SelectBeer";



const BeerInfo = ({selectedBeer, addToFavourites}) => {
     const handleClick = function (event){
        addToFavourites(selectedBeer);
       
     }

    return (
        <div>
    <h3> {selectedBeer.name}</h3>
    <p>{selectedBeer.tagline}</p>
<button onClick={handleClick}>Add to favourites</button>
    </div>
     )
}

 export default BeerInfo;