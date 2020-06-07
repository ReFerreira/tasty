import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList, Container } from './styles';
import * as CartActions from '../../store/modules/cart/action';

import { formatPrice } from '../../utils/format';

import data from '../../services/data';

class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    foods: [],
  };

  componentDidMount() {
    const { foods } = data;

    const dados = foods.map((food) => ({
      ...food,
      priceFromatted: formatPrice(food.price),
    }));
    this.setState({ foods: dados });
  }

  handleAddProduct = (food) => {
    const { addToCart } = this.props;

    addToCart(food);
  };

  render() {
    const { foods } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <ProductList>
          {foods.map((food) => (
            <li key={food.id}>
              <img src={food.image} alt={food.name} />
              <strong>{food.name}</strong>
              <p>{food.description}</p>
              <span>{food.priceFromatted}</span>

              <button type="button" onClick={() => this.handleAddProduct(food)}>
                <div>
                  <MdAddShoppingCart size="1.5rem" /> {amount[food.id] || 0}
                </div>
                <span>Add to Order</span>
              </button>
            </li>
          ))}
        </ProductList>
      </Container>
    );
  }
  // const foods = data;
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, food) => {
    amount[food.id] = food.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
