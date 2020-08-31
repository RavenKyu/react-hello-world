import React, { Component } from 'react';
import TableBody from "./table-body"

class Table extends Component {
    render() {
        const data = this.props.data
        return (
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <TableBody data={data} />
            </table>
        );
    }
}

export default Table;
