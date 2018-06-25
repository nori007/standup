import React, { Component } from 'react';
import logo from './img/standup.logo.png';
import './App.css';
import Editor from './component/Editor';
import FireBaseDao from './component/FirebaseDao';
import FirebaseConfig from './config/firebaseConfig';
import CardList from './component/CardList'

// import myConfig from './config/firebaseConfig';
// console.log(myConfig.apiKey);

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dao = new FireBaseDao(FirebaseConfig);
    this.submit = this.submit.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.state = {
      articles: []
    }
  }

  handleSubmit(e) {
    //console.log(this.e);  
  }

  isAnonymous() {
    return true;
  }

  submit(article) {
    if(article) {
      let key = this.dao.newKey();
      let updated = this.dao.update(key, article);

      return updated;
    }
  }

  getArticles() {
    let lis = [];
    for(let i = 0; i < this.state.articles.length; i++){
      lis.push(<li key={this.state.articles[i].key}>{this.state.articles[i].content}</li>);
    }
    return lis;
  }
  
  componentWillMount() {
    this.dao.list(25).on('value', (dataSnapshots) => {
      var items = [];
      dataSnapshots.forEach((dataSnapshot) => {
        var item = dataSnapshot.val(); 
        item['key'] = dataSnapshot.key;
        items.push(item);
      })

      if(items && items.length > 0) {
        this.setState({
          articles: items.reverse()
        });
      }
    });
  }

  componentWillUnmount() {
    this.dao.off();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Editor handleSubmit={this.submit} isAnonymous={this.isAnonymous}/>
        <ul>
          <CardList articles={this.state.articles}/>
        </ul>
      </div>
    );
  }
}

export default App;
