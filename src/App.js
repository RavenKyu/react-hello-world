import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Table from "./components/basic-table/table"
import SearchBar from "./components/search-bar/search-bar"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      phone: '',
      users: []
    };
  }

  handleSearchData = (search) => {
    const {searchName, searchPhone} = search

    let search_list = []
    if (searchName) {
      search_list.push('name=' + searchName)
    }
    if (searchPhone) {
      search_list.push('phone=' + searchPhone)
    }
    let query = search_list.join('&');
    this.loadItem(query)
  }

  loadItem = async (query) => {
    axios
      .get("http://localhost:5000/customers?" + query)
      .then(({ data }) => {
        this.setState({
          users: { data } = data
        })
      })
      .catch(e => {
        console.error(e);
      })
  };

  render() {
    const { users } = this.state
    return (
      <div className='App'>
        <SearchBar onChangeSeachData={this.handleSearchData} />
        <Table data={users}/>
      </div>
    );
  }
}

export default App;
