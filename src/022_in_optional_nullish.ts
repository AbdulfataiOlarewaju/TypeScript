

type InExample1 = {role : 'Admin', permission : string[]}
type InExample2 = {role : 'User', expireAt:Date}

type UserExample = InExample1 | InExample2;

function decribeUserExample(u:UserExample){
    if('permission' in u){
        return `Admin ${u.permission.join(',')}`
    } else {
        return `User ${u.expireAt.toISOString()}`
    }
}

console.log(decribeUserExample({role : 'Admin', permission : ['read', 'write']}));
console.log(decribeUserExample({role: 'User', expireAt:new Date()}));

// main idea  is to avoid runtimes crashes
// ?? and ||
// obj?.a

type ProfileN3 = {
    name : string;
    contact?: {email?:string};
}

const PIN2:ProfileN3 = {
    name:'John',
    contact:{
        email:'john@gmail.com'
    }
}
const PIN3 : ProfileN3 ={
    name:'Jane'
}
const email1N3 = PIN2.contact?.email
const email2N3 = PIN3.contact?.email


// ?? -> uses right hand default only when left hand side is null or undefined
// || -> uses the default when the left hand side is falsy (null,undefined,false,'', 0 NaN)

const countFromServer : number | null = 0;
const labelFromServer : string | undefined = '';

const count = countFromServer ?? 5; // 0
const count2 = countFromServer || 5; // 5

const label = labelFromServer ?? 'default'; // ''


console.log(count);
console.log(count2);

