import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card-div">
        <h3 data-testid="name-card" className="card-div-title">
          {cardName}
        </h3>
        <p data-testid="rare-card" className="card-div-rare">{cardRare}</p>
        {cardTrunfo === true && (
          <span data-testid="trunfo-card" className="card-div-trunfo">Super Trunfo</span>
        )}
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
          className="card-div-img"
        />
        <p data-testid="description-card" className="card-div-desc">{cardDescription}</p>
        <span data-testid="attr1-card" className="card-div-attr1">
          Att01..............................................................
          {cardAttr1}
        </span>
        <span data-testid="attr2-card" className="card-div-attr2">
          Att02..............................................................
          {cardAttr2}
        </span>
        <span data-testid="attr3-card" className="card-div-attr3">
          Att03..............................................................
          {cardAttr3}
        </span>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
