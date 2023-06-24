console.log("HI")

const contacts = require('./contacts')

// contacts
//     .listContacts()
//     .then((contact) => console.log(contact))
//     .catch((error) => console.error(error));

contacts
    .getContactById('rsKkOQUi80UsgVPCcLZZW')
    .then((contact) => console.log(contact))
    .catch((error) => console.error(error));  