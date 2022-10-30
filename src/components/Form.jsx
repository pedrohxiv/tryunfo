import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form-div">
        <h2 className="form-title">Adicione nova carta</h2>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            data-testid="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            id="description"
            data-testid="description-input"
            cols="30"
            rows="10"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            id="attr1"
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            id="attr2"
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
          />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input
            id="attr3"
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            id="image"
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            name="cardRare"
            id="rare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <p>
          {`Total de Pontos = ${
            (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3))
          }`}
        </p>
        <div>
          {hasTrunfo ? (
            <span>Você já tem um Super Trunfo em seu baralho</span>
          ) : (
            <label htmlFor="trunfo">
              <input
                name="cardTrunfo"
                id="trunfo"
                data-testid="trunfo-input"
                type="checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trybe Trunfo
            </label>
          )}
          <button
            name="isSaveButtonDisabled"
            id="save-button"
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
