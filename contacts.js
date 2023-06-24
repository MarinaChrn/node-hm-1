const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const contactsPath = path.join(__dirname, ".","db","contacts.json")

const listContacts = async () => {
    return JSON.parse(await fs.readFile(contactsPath));
  };

async function getContactById(contactId) {
    const contacts = await listContacts();
    const contact = contacts.find((contact)=>contact.id===contactId);
    return contact||null;
}

async function writeContacts(contacts) {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  }

async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
        return null;
      }
    const [result] = contacts.splice(index, 1);
    await writeContacts(contacts);
    return result;
}

async function addContact(contact) {
    const contacts = await listContacts();
    const newContact = { ...contact, id: crypto.randomUUID() };
    contacts.push(newBook);
    await writeBooks(contacts);
    return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact}