import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

export default class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    saveInformation: [],
    informationFiltered: [],
    trunfoChecked: false,
  };

  checkSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      saveInformation,
    } = this.state;
    const limitSum = 210;
    const limitNum = 90;
    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && Number(cardAttr1) >= 0
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) >= 0
      && Number(cardAttr1) <= limitNum
      && Number(cardAttr2) <= limitNum
      && Number(cardAttr3) <= limitNum
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= limitSum) {
      this.setState({ isSaveButtonDisabled: false });
    } else this.setState({ isSaveButtonDisabled: true });
    this.setState({ hasTrunfo: saveInformation.some((card) => card.cardTrunfo) });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      saveInformation,
    } = this.state;
    const arrInformation = saveInformation;
    arrInformation.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    });
    this.setState(
      { saveInformation: arrInformation, informationFiltered: arrInformation },
      () => {
        this.setState(
          {
            cardName: '',
            cardDescription: '',
            cardAttr1: '0',
            cardAttr2: '0',
            cardAttr3: '0',
            cardImage: '',
            cardRare: 'normal',
            cardTrunfo: false,
          },
          () => { this.checkSaveButton(); },
        );
      },
    );
  };

  onInputChange = ({ target: { name, value, type, checked } }) => {
    value = type === 'checkbox' ? checked : value;
    this.setState(
      { [name]: value },
      () => { this.checkSaveButton(); },
    );
  };

  deleteCart = ({ target }) => {
    const { saveInformation } = this.state;
    const arrInformation = saveInformation.filter(
      (card) => card.cardName !== target.name,
    );
    if (saveInformation.find((card) => card.cardName === target.name)) {
      this.setState({
        hasTrunfo: false,
        saveInformation: arrInformation,
        informationFiltered: arrInformation,
      });
    } else this.setState({ saveInformation: arrInformation });
  };

  nameFilter = ({ target }) => {
    const { saveInformation } = this.state;
    this.setState({ informationFiltered: saveInformation
      .filter((card) => card.cardName.includes(target.value)) });
  };

  rareFilter = ({ target }) => {
    const { saveInformation } = this.state;
    let arrInformation = saveInformation
      .filter((card) => card.cardRare === target.value);
    if (target.value === 'todas') arrInformation = saveInformation;
    this.setState({ informationFiltered: arrInformation });
  };

  trunfoFilter = ({ target }) => {
    const { saveInformation } = this.state;
    this.setState({ informationFiltered: saveInformation
      .filter((card) => card.cardTrunfo === target.checked),
    trunfoChecked: target.checked,
    });
  };

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
      informationFiltered,
      trunfoChecked,
    } = this.state;

    return (
      <>
        <div className="creation-div">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <h2 className="card-title">pré-visualização</h2>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <h3 className="title-all-cards">Todas as cartas</h3>
        <div className="filter-bar">
          <p className="subtitle-all-cards">Filtros de busca</p>
          <label htmlFor="name-filter">
            <input
              name="name-filter"
              id="name-filter"
              data-testid="name-filter"
              type="text"
              onChange={ this.nameFilter }
              disabled={ trunfoChecked }
              placeholder="Nome da carta"
            />
          </label>
          <label htmlFor="rare-filter">
            <select
              name="rare-filter"
              id="rare-filter"
              data-testid="rare-filter"
              onChange={ this.rareFilter }
              disabled={ trunfoChecked }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-filter" className="trunfo-filter-label">
            <input
              name="trunfo-filter"
              id="trunfo-filter"
              data-testid="trunfo-filter"
              type="checkbox"
              checked={ trunfoChecked }
              onChange={ this.trunfoFilter }
            />
            Super Trybe Trunfo
          </label>
          {informationFiltered.map((card) => (
            <div key={ `div-${card.cardName}` }>
              <Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                key={ `delete-button-${card.cardName}` }
                name={ card.cardName }
                type="button"
                data-testid="delete-button"
                onClick={ this.deleteCart }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
