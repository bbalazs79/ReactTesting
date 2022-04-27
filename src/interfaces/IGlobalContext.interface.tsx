export interface IGlobalContext {
    beers: Array<any>,
    addBeer?: (beer:any)=> void,
    deleteBeer?: (id: number) => void,
    replaceBeers: (beers: any[]) => void,
    addBeersToArray?: (beers: any[]) => void,
    auth: {
        username: string,
        isLoggedIn: boolean,
    },
    login: (username: string) => void,
    logout?: () => void,
    transactions: Array<ITransaction>,
    addTransaction: (transaction: ITransaction) => void,
    removeTransaction: (id: string) => void,
}

export interface ITransaction {
    id: string,
    text: string,
    amount: number,
}