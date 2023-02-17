const { Role } = require('../db');


/*Creo los roles en la DB*/
const insertRoles = async () => {
    const roles = [
        {name: 'ADMIN_ROLE'},
        {name: 'USER_ROLE'},
        {name: 'GUEST_ROLE'},
    ]
    await Role.bulkCreate(roles)
;    console.log('Roles loaded in the db');  
};
module.exports = {
    insertRoles
}