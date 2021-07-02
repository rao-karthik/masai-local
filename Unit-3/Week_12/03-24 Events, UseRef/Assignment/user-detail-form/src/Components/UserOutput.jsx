import React from 'react'

export const UserOutput = ({id, name, age, address, department, salary, maritalStatus, handleDelete}) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{address}</td>
                        <td>{department}</td>
                        <td>{salary}</td>
                        <td>{maritalStatus ? "Married" : "Not Married"}</td>
                        <td><button onClick = {()=> handleDelete(id)} >Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
