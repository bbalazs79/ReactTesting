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
        default: 
            return state;
    }
}