

// partial -> makes all the top level fields optional

type AddressN8 = {
    line1: string;
    city: string;
}

type User10 = {
    id: string;
    name: string;
    email?: string;
    address: AddressN8
}

type UserPatch10 = Partial<User10>

const patch10: UserPatch10 = { name: 'olarewaju' }
const patch11: UserPatch10 = {
    address: {
        line1: 'line2',
        city: 'ilorin'
    }
}

// required<T> makes all the top level fields as required

type UserAllRequiredN10 = Required<User10>
const userAllPatch11: UserAllRequiredN10 = {
    id: 'u2',
    name: 'sagam',
    address: { line1: 'line', city: 'ci' },
    email: 'email'
}


// readonly<T> makes all the top level fields as readonly
type ReadonlyUserN10 = Readonly<User10>

const readonlyUser: ReadonlyUserN10 = {
    id: 'us3',
    name: 'name',
    address: { line1: 'line', city: 'ci' },
}


// readonlyUser.name = 'useer' // error beacuase it can not be reassigned

// Pick<T, K> -> keep only some keyys

type PublicUserN10 = Pick<User10, 'id' | 'name'>

const publicUser: PublicUserN10 = { id: 'uS', name: 'name' }

// Omit<T,K>  - > remove some keys
type UserWithoutEmail = Omit<User10, 'email'>

const OmitUserN10: UserWithoutEmail = {
    id: 'u4',
    name: 'name4',
    address: { line1: 'line', city: 'ci' },
}

// OmitUserN10.email = 'email@g'


// Record<K, V>  
type RoleK = 'admin' | 'user' | 'editor'

type RoleCheck = Record<RoleK, User10>

// we can do whenever it is admin, i want to have so so so properties
const dirN10: RoleCheck = {
    admin: { id: 'us10', name: 'admin', address: { line1: 'line', city: 'ci' }, },
    user: { id: 'us10', name: 'user', address: { line1: 'line', city: 'ci' }, email: 'user@gamil.com' },
    editor: { id: 'us10', name: 'editor', address: { line1: 'line', city: 'ci' }, },
}