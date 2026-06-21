// union means you are having a value, it can be either this or that
// value -> this or that

 
// primitve union
function printId(id: string | number){
    // if(typeof id === "string"){
    //     id.toUpperCase()
    // } else {
    //     id.toFixed(2);
    // }

}


// object union
type Admin = {role :'Admin', permissions: string[]}
type Customer = {role:'Customer', loyaltyPoints :number}


function describeUser(user: Admin | Customer){
    if(user.role === 'Admin'){
        console.log(user.permissions);
    } else {
        console.log(user.loyaltyPoints);
        
    }
}



function describeUserWithInOperator(user: Admin | Customer){
    if('permissions' in user){
        console.log(user.role, 'Ádmin');
        
    } else {
        // console.log(user.role, 'Customer' );
        console.log(user.loyaltyPoints);
    }
}




// array of unions and union of arrays
const arrOfUnion : (string | number)[] = ["a", 1, 2, 'b']  //it can be arranged any how because it is not a tupple


const unionOfArrays : string[] | number[] = Math.random() > 0.1 ? ["x", "y"] : [1,2]

// unionOfArrays.push("z") you can't push bcause it does not know wheather it is a string or number
