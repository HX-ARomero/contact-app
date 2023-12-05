import React, { useEffect, useState } from "react";
import axios from "axios";
import Contact from "../contact/Contact";

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/contact");
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const [input, setInput] = useState({
    name: "",
    address: "",
    phone: "1234-5678",
    email: "ejemplo@gmail.com",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log(input);
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post("http://localhost:3001/contact", input);
      setContacts(data);
      setInput({
        name: "",
        address: "",
        phone: "1234-5678",
        email: "ejemplo@gmail.com",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h2>Create Contact</h2>

        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="Enter name..."
            onChange={handleChange}
          />
          <br />
          <label>Address: </label>
          <input
            type="text"
            name="address"
            value={input.address}
            placeholder="Enter address..."
            onChange={handleChange}
          />
          <br />
          <button onSubmit={handleSubmit}>Create Contact</button>
        </form>

        <hr />
      </div>
      <div>
        <h2>Contacts</h2>
        {contacts?.map((contact, index) => (
          <Contact key={index} contact={contact} setContacts={setContacts} />
        ))}
      </div>
    </div>
  );
}
