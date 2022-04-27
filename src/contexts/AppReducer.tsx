import { ITransaction } from "../interfaces/IGlobalContext.interface"

export default (state: any, action: any) => {
    switch(action.type){
        case 'DELETE_BEER':
            return {
                ...state,
                beers: state.beers.filter((beers: any) => beers.id !== action.payload),
            }
        case 'ADD_BEER':
            return {
                ...state,
                beers: [...state.beers, action.payload],
            }
        case 'REPLACE_BEERS':
            return {
                ...state,
                beers: action.payload,
            }
        case 'ADD_BEERS_TO_ARRAY':
            return {
                ...state,
                beers: [...state.beers, ...action.payload],
            }
        case 'LOGIN':
            return {
                ...state,
                auth: {username: action.payload, isLoggedIn: true},
            }
        case 'LOGOUT':
            return {
                ...state,
                auth: {username: '', isLoggedIn: false},
            }   
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            }
        case 'REMOVE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter((transaction: ITransaction) => transaction.id !== action.payload),
            } 
        default: 
            return state;
    }
}