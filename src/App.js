import React from 'react';
import Card from './Card.js';
import Scroll from './Scroll.js'
import Searchbox from './Searchbox.js';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: [ ],
      searchField: '',
    }
    
    }


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => this.setState({user:json}))
}
 
handleChange = (event) => {
  this.setState(({
    searchField: event.target.value
  }))
}
  render(){
    const filterUser = this.state.user.filter(user =>{
      return user.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      
    
    })
    
      return(
        <div>
          <Searchbox handleChange={this.handleChange} />
          <Scroll>
            <Card user={filterUser}/>
          </Scroll>
          
        </div>
      )
    }
   
  }



export default App;

