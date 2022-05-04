import { useContext, useEffect } from "react";
import './beer.style.css';
import { GlobalContext } from "../../contexts/GlobalState";
import { useNavigate } from "react-router-dom";
import { getBeersFromLocalExpress } from "../../services/Beer.service";

const BeerListView = () => {
  let navigate = useNavigate()
  const { beers, replaceBeers } = useContext(GlobalContext);
    
    useEffect(() => {
      getBeersFromLocalExpress()
      .then(response =>{
        replaceBeers(response);
      });
      
    }, []);

    return (
      <div className="beer-container">
        {beers.map(beer=>(
            <div className="card" key={beer.id} onClick={()=>navigate(`/beer/details/${beer.id}`)} >
                <img className="card-img" src={beer.image_url} alt="" />
                <h4 className="card-name">{beer.name}</h4>
                <p>ABV: { beer.abv }%</p>
            </div>
        ))}
      </div>
    );
  }
  
  export default BeerListView;
  