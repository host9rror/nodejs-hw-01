import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const data = fs.readFileSync(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

    for (let i = 0; i < number; i++) {
        const newContact = createFakeContact();
        contacts.push(newContact);
    }

    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

    console.log(`added ${number} contacts`);
    } catch (error) {
        console.log(error);
    }
};

generateContacts(7);
