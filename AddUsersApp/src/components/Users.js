import React, { useState, Component } from "react";
import User from "./User";
import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = { showUsers: false };
  }
  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }


  render() {
    const usersList = (
      <ul>
        {this.props.filteredList.map((user) => (
          <User name={user.name} key={user.id} />
        ))}
       
      </ul>
    );

    // if (this.props.show.length > 0) {
    //   this.state = { showUsers: true };
    // } 

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {" "}
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(false);
//   const dummyData = [
//     {
//       id: "u1",
//       user: "Rakshith",
//     },
//     {
//       id: "u2",
//       user: "Chinnu",
//     },
//     {
//       id: "u3",
//       user: "Kushal",
//     },
//   ];

//   const usersList = (
//     <ul>
//       {dummyData.map((user) => (
//         <User name={user.user} key={user.id} />
//       ))}
//     </ul>
//   );

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {" "}
//         {!showUsers ? "Show" : "Hide"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
