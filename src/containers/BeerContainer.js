import React, { useState, useEffect } from "react";
import SelectBeer from "../components/SelectBeer";
import BeerInfo from "../components/BeerInfo";
import FavBeerList from "../components/FavBeerList";


const BeerContainer = (() => {
  const [beers, setBeers] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState(null);

  useEffect(() => {
      getBeers();
  },[])

  const getBeers = function(){
      fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(beers => setBeers(beers))
      
  }

  

  const onBeerClick = function(beer){
      setSelectedBeer(beer);
  }

  const [favBeers, setFavBeers] = useState([]);

  const addToFavourites = (beer) => {
      if(!favBeers.includes(beer)){
          setFavBeers([...favBeers, beer]) // If beer is not favorite not in the favourite beer list then take the existing list and add in to the list.

      }
    
  }
 

  console.log(getBeers);
    return (
<>
<h1>Brewdog container!!</h1>
<SelectBeer beers={beers} onBeerSelected={onBeerClick} />
{selectedBeer ?  <BeerInfo selectedBeer={selectedBeer} addToFavourites={addToFavourites} />: null}

<FavBeerList favBeers={favBeers}/>
</>
    )
})

export default BeerContainer;