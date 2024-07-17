import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const getAllContacts = async () => {
  try {
    const data = fs.readFileSync(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    return contacts;

  } catch (error) {
    console.log(error);
    return [];
  }
};

console.log(await getAllContacts());
