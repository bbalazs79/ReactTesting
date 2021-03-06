import { createContext, useReducer } from 'react';
import { IGlobalContext, ITransaction } from '../interfaces/IGlobalContext.interface';
import AppReducer from './AppReducer';

const initialState: IGlobalContext = {
    beers: [{
        "id": 1,
        "name": "Buzz",
        "tagline": "A Real Bitter Experience.",
        "first_brewed": "09/2007",
        "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.5,
        "ibu": 60,
        "target_fg": 1010,
        "target_og": 1044,
        "ebc": 20,
        "srm": 10,
        "ph": 4.4,
        "attenuation_level": 75,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 64,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 3.3,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.2,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.4,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale???"
        },
        "food_pairing": [
            "Spicy chicken tikka masala",
            "Grilled chicken quesadilla",
            "Caramel toffee cake"
        ],
        "brewers_tips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
        "contributed_by": "Sam Mason <samjbmason>"
    }],
    deleteBeer:() => {},
    addBeer: () => {},
    replaceBeers: () => {},
    auth: {
        username: '',
        isLoggedIn: false,
    },
    login: () => {},
    logout: () => {},
    transactions: [],
    addTransaction: () => {},
    removeTransaction: () => {},
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( { children }: any ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteBeer(id: number): void {
        dispatch({
            type: 'DELETE_BEER',
            payload: id,
        });
    }

    function addBeer(beer: any): void {
        dispatch({
            type: 'ADD_BEER',
            payload: beer,
        });
    }

    function replaceBeers(beers: any[]): void {
        dispatch({
            type: 'REPLACE_BEERS',
            payload: beers,
        })
    }

    function addBeersToArray(beers: any[]): void {
        dispatch({
            type: 'ADD_BEERS_TO_ARRAY',
            payload: beers,
        })
    }

    function login(username: string): void {
        dispatch({
            type: 'LOGIN',
            payload: username,
        })
    }

    function logout(): void {
        dispatch({
            type: 'LOGOUT',
        })
    }

    function addTransaction(transaction: ITransaction): void {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
    }

    function removeTransaction(id: string): void {
        dispatch({
            type: 'REMOVE_TRANSACTION',
            payload: id,
        });
    }

    return (
    <GlobalContext.Provider value={{
        beers: state.beers, 
        deleteBeer, 
        addBeer, 
        replaceBeers, 
        addBeersToArray, 
        auth: state.auth,
        login,
        logout,
        transactions: state.transactions,
        addTransaction,
        removeTransaction,
        }}>
        {children}
    </GlobalContext.Provider>)
}