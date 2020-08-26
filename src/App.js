import React, {Component} from 'react';
import Table from './components/Table/Table'
import Pagination from './components/Pagination/Pagination'
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state={
      totalUsers: [],
      currentPageUsers: [],
      total: null,
      currentPage:1,
      lastPageLoaded:0
    }
  }

  componentDidMount(){
    this.getUserData(1);
  }

  getUserData = (page) => {
    if (this.state.lastPageLoaded < page) {
      for (var i = this.state.lastPageLoaded +1; i <= page; i++) {
        fetch(`https://reqres.in/api/users?page=${i}`)
        .then(response => response.json())
        .then(users => {
          this.setState({lastPageLoaded: page})
          let tempUserArray = JSON.parse(JSON.stringify(this.state.totalUsers));
          console.log(tempUserArray, "tempUserArray")
          let temp = tempUserArray.concat(users.data);
          console.log(temp, "temp")
          this.setState({totalUsers: temp, total: users.total }, () => this.getCurrentPageUser(page))
        });
      }
  }
    else{
        fetch(`https://reqres.in/api/users?page=${page}`)
        .then(response => response.json())
        .then(users => {
          this.setState({lastPageLoaded: page})
          let tempUserArray = JSON.parse(JSON.stringify(this.state.totalUsers));
          console.log(tempUserArray, "tempUserArray")
          let temp = tempUserArray.concat(users.data);
          console.log(temp, "temp")
          this.setState({totalUsers: temp, total: users.total }, () => this.getCurrentPageUser(page))
        });
    }
  }

  getCurrentPageUser = (page) => {
    let tempUsers = JSON.parse(JSON.stringify(this.state.totalUsers));
    let tempCurrentPageUsers = tempUsers.splice((page-1)*3, 3)
    this.setState({currentPageUsers: tempCurrentPageUsers})
  }

  setCurrentPage = (page) => {
    this.setState({currentPage: page}, () => console.log(this.state.currentPage))  
  }

  render(){

    const pageNumbers = [];

    if (this.state.total !== null) {
      for (let i = 1; i <= Math.ceil(this.state.total / 3); i++) {
        pageNumbers.push(i);
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <Table Users={this.state.currentPageUsers}  />
          <Pagination pageNumbers={pageNumbers} getUserData={this.getUserData} setCurrentPage={this.setCurrentPage} currentPage={this.state.currentPage}/>
        </header>
      </div>
    );
  }
}

export default App;
