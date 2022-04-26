export default (state: any, action: any) => {
    switch(action.type){
        case 'DELETE_BEER':
            return {
                ...state,
                beers: state.beers.filter((beers: any) => beers.id !== action.payload)
            }
        case 'ADD_BEER':
            return {
                ...state,
                beers: [...state.beers, action.payload]
            }
        case 'REPLACE_BEERS':
            return {
                ...state,
                beers: [action.payload]
            }
        case 'ADD_BEERS_TO_ARRAY':
            return {
                ...state,
                beers: [...state.beers, ...action.payload]
            }
        default: 
            return state;
    }
}