import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

const firstFive = contacts.slice(0, 5);
// const allContacts = contacts.length

export class App extends Component {
  state = {
    contacts: firstFive,
    // allContacts : contacts.length
  };

  addRandom = () => {
    const stateCopy = [...this.state.contacts];
    stateCopy.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({
      contacts: stateCopy,
    });
  };

  sortByName = () => {
    const stateCopy = [...this.state.contacts];
    stateCopy.sort((a, b) => a.name.localeCompare(b.name));
    console.log(stateCopy);

    this.setState({
      contacts: stateCopy,
    });
  };

  sortByPopularity = () => {
    const stateCopy = [...this.state.contacts];
    stateCopy.sort((a, b) => b.popularity - a.popularity);
    console.log(stateCopy);

    this.setState({
      contacts: stateCopy,
    });
  };

  removeContact = (id) => {
    const stateCopy = [...this.state.contacts];

    this.setState({
      contacts: stateCopy.filter((contact) => contact.id !== id),
    });
  };

  render() {
    // const randomContact =  * contacts)
    //this.setState()
    return (
      <div className="App">
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort contacts by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      className="images"
                      src={contact.pictureUrl}
                      alt="pics"
                      width="70px"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                 {/* <td>
                    <button onClick={this.addToFavorites}>
                      {" "}
                      Add to Favorites{" "}
                    </button>
                  </td> */}
                  <td>
                    <button onClick={() => this.removeContact(contact.id)}>
                      
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
