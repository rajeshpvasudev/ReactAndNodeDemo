import React, { Component } from 'react';

class EmployeeList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Employee List Component {this.props.employees.length}</h1>
                <table border="1">
                    <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date Of Birth</th>
                        <th>Address</th>
                    </tr>                      
                {this.props.employees.map(function(emp, index){
                    return(
                        <tr key={emp.firstName}>  
                    <td>{emp.firstName}</td>
                    <td>{emp.lastName}</td>
                    <td>{emp.dob}</td>
                    <td>{emp.Address}</td>           
                    </tr>
                    )
                })}
                </tbody>
                </table>
            </div>
        );       
    }

    
}

export default EmployeeList;