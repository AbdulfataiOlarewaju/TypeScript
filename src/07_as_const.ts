

const ROLES = ["admin", "user", "operator"] as const;

// derive a union type from the array elements 
type Role = typeof ROLES[number];  //give me the typeOf each but the 'number' means give me the type of any element inside this array.


function setRole(r:Role){
    console.log(r);
    
}

setRole("admin") //work
// setRole('test') //error