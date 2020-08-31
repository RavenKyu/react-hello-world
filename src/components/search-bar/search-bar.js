import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        searchName: '',
        searchPhone: ''
    }
    static defaultProps = {
        onChangeSeachData: () => console.warn('onChange not defined')
      }
    handleChange = async (e) => {
        console.log(e.target.name)
        await this.setState({
            [e.target.name]: e.target.value
        });
        this.props.onChangeSeachData(this.state)
        // console.log(this.state)
    }

    render() {
        return (
            <form>
                <input placeholder="이름" value={this.state.searchName}
                onChange={this.handleChange} name="searchName" />

                <input placeholder="전화번호" value={this.state.searchPhone} 
                onChange={this.handleChange} name="searchPhone" />
            </form>
        );
    }
}

export default SearchBar;
