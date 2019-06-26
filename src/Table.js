import React, { Component } from 'react';


const TableHeader = () => {
    return (
            <thead>
                <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Occupation</th>
                <th>Remove</th>
                </tr>
            </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
            <td>{row.name}</td>
            <td>{row.phoneNumber}</td>
            <td>{row.occupation}</td>
            <td><button className="delete" onClick={() => props.removedCharacter(index)}>Delete</button></td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render () {
        const { characterData, removedCharacter } = this.props;

        return (
            <table>
               <TableHeader />
               <TableBody characterData={characterData} removedCharacter={removedCharacter}/>
            </table>
        )
    }
}

export default Table