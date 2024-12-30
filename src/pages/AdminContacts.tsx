import { useEffect, useState } from "react";
import type { Contact } from "../types";
import { getAllContacts } from "../service/adminService";

const AdminContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([ ]);
useEffect(() => {
  const fetchreservations = async () => {
    try {
      const response=await getAllContacts();
      setContacts(response);
       
     } catch (error) {
       
     }
  }
  fetchreservations();
 
},[]);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Contact Messages</h1>

      <div className="grid gap-6">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">{contact.name}</h3>
              <p className="text-gray-600">{contact.email}</p>
              <p className="text-sm text-gray-500">{contact.date}</p>
            </div>
            <p className="text-gray-700">{contact.message}</p>
          </div>
        ))}

        {contacts.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No contact messages yet
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminContacts;
