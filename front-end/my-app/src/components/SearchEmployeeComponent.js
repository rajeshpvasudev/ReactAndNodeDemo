import React, { Component } from 'react';

class SearchEmployee extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Search Component</h1>
                <input type="text" placeholder="Search Employee here" 
                    value={this.props.searchKeyword}
                    onChange={(event) => this.props.onChange(event.target.value)}  />
            </div>
        );        
    }
      
}

export default SearchEmployee;