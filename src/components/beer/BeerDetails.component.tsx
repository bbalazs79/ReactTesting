import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalState";
import Loading from "../loading/Loding.component";
import './beer-details.style.css';

const BeerDetails = () => {
    const { beers } = useContext(GlobalContext);
    const [beer, setBeer] = useState<any>();
    const params = useParams();

    useEffect(()=>{
        const data = beers.filter((beer) => beer.id == params.id);
        setBeer(data[0]);
    },[]);

    return (
        <div className="page">
         {beer ? <>
            <h1>{ beer.name }</h1>
            <h2 className="subtitle">{ beer.tagline }</h2>
            <div className="container">
                <div className="img-content">
                    <img className="img-content-beer" src={beer.image_url} alt='' />
                </div>
                <div className="desc-content">
                    <h3>Description</h3>
                    <p>{ beer.description }</p>
                    <div className="abv"><h3>ABV: </h3><span>{ beer.abv }%</span></div>
                    <h3>Food pairings: </h3>
                    <ul className="desc-content-ul">
                        {beer.food_pairing.map((element:string, index: number) => {
                          return <li className="desc-content-list" key={index}>{element}</li>  
                        })}
                    </ul>
                </div>    
            </div>
         </> : <Loading /> }    
        </div>
    );
  }
  
  export default BeerDetails;
  