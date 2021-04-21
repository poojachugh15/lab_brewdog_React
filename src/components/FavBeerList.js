import React from "react";

const FavBeerList = ({favBeers}) => {

   const favouriteBeers = favBeers.map(beer => {
       return (
           <button > {beer.name}</button>
       )
   })

    

    return (
       
        <>
         <h3>Favourite Beers:</h3>
         <ul><li>
         {favouriteBeers}
         </li> 

         </ul>
         
        </>
    )
    
}


export default FavBeerList;