import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const data = fs.readFileSync(PATH_DB,'utf-8');
        const contacts = JSON.parse(data);

        const newContact = createFakeContact();

        contacts.push(newContact);

        fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
        console.log(`added 1 contact`);
    } catch (error) {
        console.log(error);
    }
};

addOneContact();
