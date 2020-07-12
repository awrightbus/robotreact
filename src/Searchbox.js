import React from 'react';

class Searchbox extends React.Component{
    constructor(props){
        super(props)
    }
   
    render(){
        return(
            <div>
                <input type="text" 
                placeholder="search robots" 
                onChange={this.props.handleChange}
                ></input>
            </div>
        )
    }
}



export default Searchbox;