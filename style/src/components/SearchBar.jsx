import React, { Component } from 'react';
// React,{Component } its like assigning Component=React.Component it is Called Sugar Coating
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    render() {
        // return <input onChange={event=>console.log(event.target.value)}/>;   Event Handling Example 
        return (
            <div className="searchBar">

                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
                {/* Value of Input is {this.state.term} */}
            </div>
        );
    }
onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);

}
}
export default SearchBar;