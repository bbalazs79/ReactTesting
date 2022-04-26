export interface IBeerContext {
    beers: any[],
    addBeer?:(beer:any)=> void,
    deleteBeer?: (id: number) => void,
    replaceBeers: (beers: any[]) => void,
    addBeersToArray?: (beers: any[]) => void,
}