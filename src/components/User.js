import React, { Component } from 'react'

 class User extends Component {
     constructor(props){
         super(props);
            
         }
  render() {
    if(this.props.UserName === "Mango"){
        throw new Error("Not a user name.")
    }
    return (
      <div>
          <h3>{this.props.UserName}</h3>
      </div>
    )
  }
}

export default User