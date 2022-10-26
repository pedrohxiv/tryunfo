import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          Nome
          <input id="name" data-testid="name-input" type="text" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            id="description"
            data-testid="description-input"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input id="attr1" data-testid="attr1-input" type="number" />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input id="attr2" data-testid="attr2-input" type="number" />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input id="attr3" data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="image">
          Imagem
          <input id="image" data-testid="image-input" type="text" />
        </label>
        <label htmlFor="rare">
          Raridade
          <select name="rare" id="rare" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input
            name="trunfo"
            id="trunfo"
            data-testid="trunfo-input"
            type="checkbox"
          />
        </label>
        <button data-testid="save-button" type="button">
          Salvar
        </button>
      </div>
    );
  }
}
