import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const countContacts = async () => {
    try {
        const data = fs.readFileSync(PATH_DB,'utf-8');
        const contacts = JSON.parse(data);

        return contacts.length;
    } catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());
