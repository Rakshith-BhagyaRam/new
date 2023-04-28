import React, { Fragment, useEffect, useRef, useState, Component } from "react";
import Users from "./Users";
import "./UsersFilter.css";

const data = [
  { id: "u1", name: "Rakshith" },
  { id: "u2", name: "Chaithra" },
  { id: "u3", name: "Kushal" },
];

class UsersFilter extends Component {
  constructor() {
    super();
    this.state = {
      filterUser: data,
      searchTerm: "",
      updatedList: data,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filterUser: this.state.updatedList.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  FinderHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  submithandler(event) {
    event.preventDefault();
  }
  render() {
    
    //  this.setState={ setUpdatedList((prevList) => [
    //           ...prevList,
    //           { id: Math.random(), name: entredName },
    //         ]);

    //         userInputRef.current.value = ""}

    return (
      <Fragment>
        <div className="search">
          <form className="input" onSubmit={this.submithandler.bind(this)}>
            <input type="text" /* ref={this.userInputRef} */ />
            <button>Add User</button>
          </form>
          <input
            type="search"
            onChange={this.FinderHandler.bind(this)}
            placeholder="Search"
          />
        </div>
        <Users filteredList={this.state.filterUser}></Users>
      </Fragment>
    );
  }

  // const UsersFilter = () => {
  //   const [filterUser, setFilterUser] = useState(data);
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [updatedList, setUpdatedList] = useState(data);
  //   const userInputRef = useRef();

  //   useEffect(() => {
  //     setFilterUser(updatedList.filter((user) => user.name.includes(searchTerm)));
  //   }, [searchTerm]);

  //     setUpdatedList((prevList) => [
  //       ...prevList,
  //       { id: Math.random(), name: entredName },
  //     ]);

  //     userInputRef.current.value = "";
  //   };

  // return (
  //   <Fragment>
  //     <div className="search">
  //       <form className="input" onSubmit={submithandler}>
  //         <input type="text" ref={userInputRef} />
  //         <button>Add User</button>
  //       </form>
  //       <input type="search" onChange={FinderHandler} placeholder="Search" />
  //     </div>
  //     <Users filteredList={filterUser}></Users>
  //   </Fragment>
  // );
}

export default UsersFilter;
