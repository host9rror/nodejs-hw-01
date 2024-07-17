import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        const clearedContacts = [];

        await fs.writeFile(PATH_DB, JSON.stringify(clearedContacts, null, 2), 'utf-8');

        console.log('cleared all contacts');
    } catch (error) {
        console.log(error);
    }
};

removeAllContacts();
