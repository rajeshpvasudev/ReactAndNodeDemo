import React, { Component } from 'react';
import Hello from './components/HelloComponent';
import EmployeeList from './components/EmployeeListComponent';
import SearchEmployee from './components/SearchEmployeeComponent';
import callApi from './services/ServiceComponent';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searchKeyword:'',
      employees:[],
      currentPage:1,
      itemsPerPage:5
    }
    
    this.onKeyPressSearchEmployee = this.onKeyPressSearchEmployee.bind(this);
    this.getViewableEmployees = this.getViewableEmployees.bind(this);
    this.viewableEmployees= [];

  }
  render() {
    return (
      <div className="App">
              
        <Hello />
        <hr/>
        <SearchEmployee searchKeyword={this.state.searchKeyword} onChange={this.onKeyPressSearchEmployee} />
        <hr />
        <EmployeeList employees={this.viewableEmployees} />

      </div>
    );
  }
  componentDidMount() {
    callApi('employees')
      .then(res =>{ 
        this.viewableEmployees = res;
        this.setState({ employees: res });
      })
      .catch(err => console.log(err));
  } 

  onKeyPressSearchEmployee(keyword){
      console.log('keyword searched:'+ keyword);
      this.setState({searchKeyword:keyword});
      this.viewableEmployees = this.getViewableEmployees(this.state.employees,keyword);
  }

  getViewableEmployees(employees,filterStr){
    if(filterStr === '' || filterStr === undefined){
      return employees;
    }
    return employees.filter(el => el.firstName.includes(filterStr))
  }
}

export default App;
