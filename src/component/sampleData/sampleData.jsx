import React, { Component } from "react";

class sampleData extends Component {
  state = {
    newItem: [
      {
        userName: "ALi",
        userPassword: "135546",
        userMail: "as@a.com",
      },
      {
        userName: "ALi21",
        userPassword: "135546",
        userMail: "a12s@a.com",
      },
    ],
    update: {
      userName: "",
      userPassword: "",
      userMail: "",
    },
    updateRow: false,
    updateIndex: "",
  };

  sendHandler = (e) => {
    e.preventDefault();
    let data = {};
    for (let i = 0; i < e.target.length - 1; i++) {
      data[e.target[i].name] = e.target[i].value;
    }
    const { updateRow, updateIndex, newItem } = this.state;
    if (updateRow) {
      let up = newItem;
      up[updateIndex] = data;
      this.setState({
        up: up,
        newItem: newItem,
        updateRow: false,
      });
    } else {
      const addItem = [...newItem, data];
      this.setState({ newItem: addItem });
    }

    console.log(this.state);
  };

  removeItem = (index) => {
    const { newItem } = this.state;
    // console.log(index);
    const filterItems = newItem.filter((e) => e !== index);
    // console.log(filterItems);
    this.setState({ newItem: filterItems });
    console.log(this.state.newItem);
  };

  updateItem = (item, index) => {
    const { update } = this.state;
    // console.log(index);

    this.setState({
      updateRow: true,
      updateIndex: index,
      update: {
        ...update,
        userName: item.userName,
        userPassword: item.userPassword,
        userMail: item.userMail,
      },
    });

    console.log(this.state);
  };

  currentUpdate = (e) => {
    const { update } = this.state;
    let newState = update;
    newState[e.target.name] = e.target.value;
    this.setState({
      newState: newState,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.sendHandler}>
          <label>Enter userName</label> &nbsp;
          <input
            name="userName"
            type="text"
            value={this.state.update.userName}
            onChange={this.currentUpdate}
            placeholder="first name"
          />
          <br />
          <br />
          <label>Enter userPassword</label> &nbsp;
          <input
            name="userPassword"
            type="password"
            value={this.state.update.userPassword}
            onChange={this.currentUpdate}
            placeholder="password"
          />
          <br />
          <br />
          <label>Enter userMail</label> &nbsp;
          <input
            type="email"
            name="userMail"
            value={this.state.update.userMail}
            onChange={this.currentUpdate}
            placeholder="usermail"
          />
          <br />
          <br />
          <button>submit</button>
        </form>

        <ul>
          {this.state.newItem.map((item, index) => {
            return (
              <li key={index}>
                UserName : {item.userName} &nbsp; password :{item.userPassword}
                &nbsp; email address : {item.userMail} &nbsp;
                <button onClick={() => this.removeItem(item)}>Delete</button>
                &nbsp;
                <button onClick={() => this.updateItem(item, index)}>
                  Update
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default sampleData;
