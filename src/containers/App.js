import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer'
import PageContainer from '../containers/PageContainer'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h1 className="ui header">My photo</h1>
        <PageContainer />
        <UserContainer />
      </div>
    )
  }
}

export default App
