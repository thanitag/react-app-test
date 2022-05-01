import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters:[]
  };

    removeCharacter = (index) => {
      const {characters} = this.state

      this.setState({
        characters: characters.filters((characters, i) => {
          return i !== index
        })
      });
    }

    handleSumbit = (character) => {
      this.setState({characters: [...this.state.characters, character]});
    }

    render() {
      const {characters} = this.state;

      return (
        <div className="container">
        <h1>React App Test</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table
        characterData={characters}  removeCharacter={this.removeCharacter} />
        <h3>Add New</h3>
        <Form handleSumbit={this.handleSumbit} />
        </div>
      );
    }
  }

export default App;
