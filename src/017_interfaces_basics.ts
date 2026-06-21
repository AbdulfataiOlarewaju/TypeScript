

interface User333 {
    id: number;
    name: string;
    email?: string; // optional property
    readonly createdAt: Date;
}


const user333 : User333 = {
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
    createdAt: new Date()
}

interface Admin333 extends User333 {
    permissions: string[];
}

const admin333 : Admin333 = {
    id: 2,
    name: 'abdulfatai as admin',
    email: 'john@gmail.com',
    createdAt: new Date(),
    permissions: ['admin']
}

interface WithMetal {
    meta? : {
        active: boolean;
    }
}

interface AdminWithMeta extends Admin333, WithMetal {} //this multiple inheritance, it extends both

  const adminWithMeta: AdminWithMeta = {
    id: 2,
    name: 'abdulfatai as admin',
    email: 'john@gmail.com',
    createdAt: new Date(),
    permissions: ['admin'],
    meta: {
        active : true
    }
}