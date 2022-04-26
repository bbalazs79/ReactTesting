import axios from "axios";

export function getBeers() {
    axios.get('https://api.punkapi.com/v2/beers', {})
    .then(res => {
        return res.data;
    })
    .catch(error =>{
        console.log(error);
    });
}