const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async({ action, id, name, email, phone }) =>{
  switch (action) {
    case 'list':
        const allContacts = await listContacts();
        console.table(allContacts);
        break;
    case 'get':
       const getContact = await getContactById(id);
       console.log(getContact)
        break;
    case 'add':
        const addNewContact = await addContact({name, email, phone})
        console.log(addNewContact)
        break;
    case 'remove':
        const deleteContact = await removeContact(id)
        console.log(deleteContact)
        break;
    default:
        console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);