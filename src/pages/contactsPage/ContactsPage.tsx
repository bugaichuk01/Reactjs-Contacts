import React from 'react';
import ContactsList from "../../components/contactsList/ContactsList";
import SearchGroup from "../../components/searchGroup/SearchGroup";

const ContactsPage = () => {
    return (
        <div>
            <SearchGroup />
            <ContactsList />
        </div>
    );
}

export default ContactsPage;