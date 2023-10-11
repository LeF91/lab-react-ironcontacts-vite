import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [listContacts, setListContacts] = useState(contacts);
  console.log(listContacts);

  console.log(listContacts);

  const handleAddRandomContact = () => {
    const remainingContacts = contacts.filter(
      (contact) => !listContacts.includes(contact)
    );
    if (remainingContacts.length === 0) return;

    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    listContacts([...listContacts, randomContact]);
  };

  function sortByName(contactA, contactB) {
    return contactA.localeCompare(contactB, undefined, { sentivity: "base" });
  }

  const handleSortByName = () => {
    const copy = [...listContacts];
    copy.sort((contactA, contactB) => {
      return sortByName(contactA.name, contactB.name);
    });
    setListContacts(copy);
  };

  const handleSortByPopularity = () => {
    const copy = [...listContacts];
    copy.sort((contactA, contactB) => {
      const popularityA = contactApopularity,
        popularityB = contactB.popularity;
      return popularityA - popularityB;
    });
    setListContacts(copy);
  };

  const handleContactDelete = (id) => {
    const contactsToKeep = listContacts.filter((contact) => {
      return contact.id !== id;
    });

    setListContacts(contactsToKeep);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
        <button onClick={handleAddRandomContact}>Add Random Contact</button>
        <button onClick={handleSortByName}>Sort by Name</button>
        <button onClick={handleSortByPopularity}>Sort by Popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listContacts.map((listContacts, index) => (
            <tr key={index}>
              <td>
                <img
                  src={listContacts.pictureUrl}
                  alt={listContacts.name}
                  style={{ height: "100px" }}
                ></img>
              </td>
              <td>{listContacts.name}</td>
              <td>{listContacts.popularity.toFixed(2)}</td>
              <td>{listContacts.wonOscar ? "🏆" : ""}</td>
              <td>{listContacts.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button onClick={() => handleContactDelete(listContacts.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
