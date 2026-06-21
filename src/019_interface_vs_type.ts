

// when to use interface and when to use type

// interface -> object shapes basically that yuo expect to extend in future
// it support declaration merging -> meaning if i add one interface, i can reopen another interface with the same name



// type-> more genral  -> used for objects , functions, unions interfaces, tuples etc.
//it can not be reopened like interface -> no merging


interface Box1 {
    width : number,
}
interface Box1{
    height: number;
}

const boxDemo : Box1 = {
    width:234,
    height:5678
} // no error here because of merging


// type Bag = {
//     size:number;
// }

// type Bag = {
//     color:string;
// } // error here because we cant merge types. cant reopen a type or cant redeclare type alia name


