import React from 'react';


class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        const allUser = this.props.user.map(user => {
            return(
                <div key={user.id}>
                    <img src={`https://robohash.org/${user.id}`}/>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                </div>
                )
        })

      return(
          <div>
                {allUser} 
                
          </div>
      )
  }
}

export default Card