import React, { Component } from 'react';

class TableData extends Component {
    render() {
        const { id, name, phone } = this.props;
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{phone}</td>
            </tr>
        );
    }
}

export default TableData;
