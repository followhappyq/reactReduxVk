import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <p>Loading...</p>
    }

    if (name) {
      return <p>Hello, {name}!</p>
    } else {
      return (
        <Button onClick={this.props.handleLogin} primary>
          Войти
        </Button>
      )
    }
  }

  render() {
    console.log('<User/> render')
    return (
      <div className="ui right floated header">{this.renderTemplate()}</div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
}
