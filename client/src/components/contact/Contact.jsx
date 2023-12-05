import axios from "axios";
import React from "react";

export default function Contact({ contact, setContacts }) {
  const { id, name, address, phone, email, favorite } = contact;

  const handleFavorite = async (event) => {
    try {
      const updatedContact = {
        ...contact,
        favorite: !favorite,
      };

      const { data } = await axios.put(
        `http://localhost:3001/contact`,
        updatedContact
      );

      await setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (event) => {
      try {
        const { data } = await axios.delete(
            `http://localhost:3001/contact/${id}`
          );
          await setContacts(data);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
      <h3>Name: {name}</h3>
      <h4>ID: {id}</h4>
      <h4>Address: {address}</h4>
      <h4>Phone: {phone}</h4>
      <h4>Email: {email}</h4>
      {favorite ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={handleDelete}>Delete</button>
      <hr />
    </div>
  );
}
