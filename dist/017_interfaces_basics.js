"use strict";
const user333 = {
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
    createdAt: new Date()
};
const admin333 = {
    id: 2,
    name: 'abdulfatai as admin',
    email: 'john@gmail.com',
    createdAt: new Date(),
    permissions: ['admin']
};
const adminWithMeta = {
    id: 2,
    name: 'abdulfatai as admin',
    email: 'john@gmail.com',
    createdAt: new Date(),
    permissions: ['admin'],
    meta: {
        active: true
    }
};
