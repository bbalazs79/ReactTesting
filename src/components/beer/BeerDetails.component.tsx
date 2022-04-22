import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BeerDetails = () => {
    const [beer, setBeer] = useState<any>();
    const params = useParams();

    useEffect(()=>{
        axios.get(`https://api.punkapi.com/v2/beers/${params.id}`)
        .then(res => {
            setBeer(res.data[0]);
            console.log(res.data[0]);
        })
        .catch(error =>{
            console.log(error);
        })
    },[]);

    return (
        <div className="page">
         {beer && <>
            <h1>{ beer.name }</h1>
            <h2>{ beer.tagline }</h2>
            <div className="container">
                <div className="img-content">
                    <img src={beer.image_url} alt='' />
                </div>
                <div className="desc-content">
                    <h3>Description</h3>
                    <p>{ beer.description }</p>
                    <div className="abv"><h3>ABV: </h3><span>{ beer.abv }%</span></div>
                    <h3>Food pairings: </h3>
                    <ul>
                        {beer.food_pairing.forEach((element:string, index: number) => {
                          return <li key={index}>{element}</li>  
                        })}
                    </ul>
                </div>    
            </div>
         </>}    
        </div>
    );
  }
  
  export default BeerDetails;
  