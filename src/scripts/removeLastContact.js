import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const removeLastContact = async () => {
    try {
        const data = fs.readFileSync(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        contacts.pop();

        await fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

        console.log('Successfull removed last contact');
    } catch (error) {
        console.log(error);
    }
};

removeLastContact();
