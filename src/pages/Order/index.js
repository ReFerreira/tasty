/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/action';

import emptyCart from '../../assets/emptyCart.png';
import { Container, ProductTable, Total, Warn } from './styles';

function Order({ cart, total, removeFromCart, updateAmount }) {
  const name = localStorage.getItem('name');
  function increment(food) {
    updateAmount(food.id, food.amount + 1);
  }

  function decrement(food) {
    updateAmount(food.id, food.amount - 1);
  }
  return (
    <>
      {cart.length === 0 ? (
        <Warn>
          <h2>Hi {name} your cart is empty</h2>
          <img src={emptyCart} alt="emptyCart" />
        </Warn>
      ) : (
        <Container>
          <ProductTable>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Qtd</th>
                <th>SubTotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((food) => (
                <tr>
                  <td>
                    <img src={food.image} alt={food.name} />
                  </td>
                  <td>
                    <strong>{food.name}</strong>
                    <span>{food.priceFromatted}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(food)}>
                        <MdRemoveCircleOutline size="2rem" color="#ffb84d" />
                      </button>
                      <input type="number" readOnly value={food.amount} />
                      <button type="button" onClick={() => increment(food)}>
                        <MdAddCircleOutline size="2rem" color="#ffb84d" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{food.subtotal}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => removeFromCart(food.id)}
                    >
                      <MdDelete size="2rem" color="#ffb84d" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <button type="button">Finalizar Pedido</button>
            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </Container>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((food) => ({
    ...food,
    subtotal: formatPrice(food.price * food.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, food) => {
      return total + food.price * food.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Order);
