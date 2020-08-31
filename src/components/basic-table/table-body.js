import React, { Component } from 'react';
import TableData from "./table-data"

class TableBody extends Component {
    render() {
        const { data } = this.props;
        console.log(data)
        const list = data.map(
            info => (<TableData key={info.id} id={info.id} name={info.name} phone={info.phone} />))
        return (
            <tbody>
                {list}
            </tbody>
        );
    }
}

export default TableBody;
