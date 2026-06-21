"use strict";
function getUserPropN7(objN6, keyN7) {
    return objN6[keyN7];
}
// t[K] -> object of K(key)
const userN7 = {
    id: 'ui', name: 'Abdulfatai' //-'john'
};
const idValN7 = getUserPropN7(userN7, 'id');
function setUserPropN7(objN7, keyN7, newVal) {
    objN7[keyN7] = newVal;
}
setUserPropN7(userN7, 'name', 'john');
setUserPropN7(userN7, 'phone', 123);
