import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList, Container } from './styles';

export default function Main() {
  // const name = localStorage.getItem('name');

  return (
    <Container>
      <ProductList>
        <li>
          <img
            src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png"
            alt="Ao molho"
          />
          <strong>Ao molho</strong>
          <p>Macarrão ao molho branco, fughi e cheiro verde das montanhas.</p>
          <span>R$19,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size="1.5rem" /> 0
            </div>
            <span>Add to Order</span>
          </button>
        </li>
        <li>
          <img
            src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png"
            alt="Ao molho"
          />
          <strong>Ao molho</strong>
          <p>Macarrão ao molho branco, fughi e cheiro verde das montanhas.</p>
          <span>R$19,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size="1.5rem" /> 0
            </div>
            <span>Add to Order</span>
          </button>
        </li>
        <li>
          <img
            src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png"
            alt="Ao molho"
          />
          <strong>Ao molho</strong>
          <p>Macarrão ao molho branco, fughi e cheiro verde das montanhas.</p>
          <span>R$19,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size="1.5rem" /> 0
            </div>
            <span>Add to Order</span>
          </button>
        </li>
        <li>
          <img
            src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png"
            alt="Ao molho"
          />
          <strong>Ao molho</strong>
          <p>Macarrão ao molho branco, fughi e cheiro verde das montanhas.</p>
          <span>R$19,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size="1.5rem" /> 0
            </div>
            <span>Add to Order</span>
          </button>
        </li>
        <li>
          <img
            src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png"
            alt="Ao molho"
          />
          <strong>Ao molho</strong>
          <p>Macarrão ao molho branco, fughi e cheiro verde das montanhas.</p>
          <span>R$19,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size="1.5rem" /> 0
            </div>
            <span>Add to Order</span>
          </button>
        </li>
      </ProductList>
    </Container>
  );
}
