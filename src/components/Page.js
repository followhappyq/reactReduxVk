import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }

  renderTemplate = () => {
    const { photos } = this.props
    let createdYear

    const photosYear = photos.filter(elem => {
      createdYear = new Date(elem.date * 1000).getFullYear()
      return createdYear === this.props.year
    })
    return photosYear.map((entry, index) => (
      <span key={index} className="ui medium bordered image">
        <img src={entry.sizes[0].url} alt="" />
      </span>
    ))
  }

  render() {
    const { year, photos, isFetching } = this.props
    return (
      <div className="ui medium header">
        Your photos for {year} year!
        <div>
          <Button onClick={this.onBtnClick} primary>
            2018
          </Button>
          <Button onClick={this.onBtnClick} primary>
            2017
          </Button>
          <Button onClick={this.onBtnClick} primary>
            2016
          </Button>
          <Button onClick={this.onBtnClick} primary>
            2015
          </Button>
          <Button onClick={this.onBtnClick} primary>
            2014
          </Button>
          <Button onClick={this.onBtnClick} primary>
            2013
          </Button>
          {isFetching ? (
            <div className="ui active centered inline loader" />
          ) : (
            <p>You have {photos.length} photos</p>
          )}
          {this.renderTemplate()}
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
}
