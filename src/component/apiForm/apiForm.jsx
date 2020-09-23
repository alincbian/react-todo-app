import React, { Component } from "react";

class apiForm extends Component {
  state = {
    data: [],
  };

  sendHandler = (e) => {
    e.preventDefault();

    const newData = {};

    for (let i = 0; i < e.target.length - 1; i++) {
      newData[e.target[i].name] = e.target[i].value;
    }
    const allData = [...this.state.data, newData];
    this.setState({ data: allData });
    console.log(this.state.data);
  };

  removeHandler = (item) => {
    // console.log(item);
    const filteredItems = this.state.data.filter((e) => e !== item);

    this.setState({ data: filteredItems });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.sendHandler}>
          <input type="text" placeholder="Enter Name" name="userName" /> <br />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            name="userPassword"
          />
          <br /> <br />
          <input type="email" placeholder="Enter Email" name="userMail" />
          <br /> <br />
          <button>Submit</button>
        </form>

        <ul>
          {this.state.data.map((item, index) => {
            return (
              <li key={index} onClick={() => this.removeHandler(item)}>
                UserName : {item.userName} &nbsp; UserPassword :
                {item.userPassword} &nbsp; UserEmail : {item.userMail}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default apiForm;
