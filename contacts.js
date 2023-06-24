const fs = require("node:fs/promises");
const path = require("node:path");

const contactsPath = path.join(__dirname, ".","db","contacts.json")

async function listContacts() {
    const data = await fs.readFile(contactsPath,{ encoding: "utf-8" });
    return JSON.parse(data);
}

async function getContactById(contactId) {
    const contacts = await listContacts();
    const contact = contacts.find((contact)=>contact.id===contactId);
    return contact;
}

module.exports = { listContacts, getContactById}