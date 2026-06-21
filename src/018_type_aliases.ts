

// object shapes -> similar to interfaces
// union types (A | B)
// intersection types (A & B)


// type is more general than interface

type Person = {
    id: string,
    address: string,
    salary: number,
}

const person: Person = {
    id: '1',
    address: "address",
    salary: 234567,
}

type status = "new" | "paid" | "pending"
function nextActionCheck(s: status) {
    switch (s) {
        case 'new':

            return 'new';
        case 'paid':

            return 'paid'
        case 'pending':

            return 'pending'

        default:
            return 'default'
    }
}

type ToMerge1 = { price: number }
type ToMerge2 = { stock: number }


type MergedPorductInfo = Person & ToMerge1 & ToMerge2;