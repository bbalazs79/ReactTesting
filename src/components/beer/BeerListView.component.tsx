import axios from "axios";
import { useEffect, useContext } from "react";
import './beer.style.css';
import { BeerContext } from "../../contexts/Beer.context";

const BeerListView = () => {
    const { beers, setBeers } = useContext<any>(BeerContext);

    useEffect(()=>{
        axios.get('https://api.punkapi.com/v2/beers', {})
        .then(res => {
            setBeers(res.data);
        })
        .catch(error =>{
            console.log(error);
        })
    }, []);

    return (
        <div className="beer-container">
            {beers.map((beer: any)=>(
                <div className="card" key={beer.id}>
                    <img className="card-img" src={beer.image_url} alt="" />
                    <h4 className="card-name">{beer.name}</h4>
                    <p>ABV: { beer.abv }%</p>
                </div>
            ))}
        </div>
    );
  }
  
  export default BeerListView;
  