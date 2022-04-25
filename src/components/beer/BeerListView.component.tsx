import { useContext } from "react";
import './beer.style.css';
import { GlobalContext } from "../../contexts/GlobalState";

const BeerListView = () => {
    //const [beers, setBeers] = useState<any[]>([]);
    const { beers } = useContext(GlobalContext);

    console.log(beers);

   /* useEffect(()=>{
        axios.get('https://api.punkapi.com/v2/beers', {})
        .then(res => {
            setBeers(res.data);
        })
        .catch(error =>{
            console.log(error);
        })
    }, []); */

    return (
        <div className="beer-container">
            {beers.map(beer=>(
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
  