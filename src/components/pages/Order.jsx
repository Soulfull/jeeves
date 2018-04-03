import React, {Component} from 'react'
import NumberFormat from 'react-number-format';
import {
  Navbar,
  Page,
  ContentBlock,
} from 'framework7-react';
import Button from '../../components/Button.jsx';


class OrderPage extends Component {
  render() {
    return (
      <Page>
        <Navbar className="navbar-light" title="Тable 4 at «Seabass»" sliding />
        <ContentBlock inner>
          <div className="order">
            <div className="order__title">Your dishes:</div>
            <ul className="order-list">
              <li className="order-list-item">
                <div className="order-list-item__col">
                  <div className="order-list-item__name">Lobster</div>
                </div>
                <div className="order-list-item__col">
                  <div className="order-list-item__price">
                    <NumberFormat
                      displayType="text"
                      value={300}
                      decimalScale={2}
                      prefix="$ "/>
                  </div>
                </div>
              </li>

              <li className="order-list-item order-list-item--selected">
                <div className="order-list-item__col">
                  <div className="order-list-item__name">Lobster</div>
                  <div className="order-list-item__users">Split me Petya and Vasya</div>
                </div>
                <div className="order-list-item__col">
                  <div className="order-list-item__price">
                    <NumberFormat
                      displayType="text"
                      value={300}
                      decimalScale={2}
                      prefix="$ "/>
                  </div>
                  <div className="order-list-item__total">
                    <NumberFormat
                      displayType="text"
                      value={300}
                      decimalScale={2}
                      prefix="$ "/>
                    / 3</div>
                </div>
              </li>

              <li className="order-list-item order-list-item--selected">
                <div className="order-list-item__col">
                  <div className="order-list-item__name">Lobster</div>
                  <div className="order-list-item__users">Split me Petya and Vasya</div>
                </div>
                <div className="order-list-item__col">
                  <div className="order-list-item__price">
                    <NumberFormat
                      displayType="text"
                      value={300}
                      decimalScale={2}
                      prefix="$ "/>
                  </div>
                  <div className="order-list-item__total">
                    <NumberFormat
                      displayType="text"
                      value={300}
                      decimalScale={2}
                      prefix="$ "/>
                    / 3</div>
                </div>
              </li>

              <li className="order-list-item">
                <div className="order-list-item__col">
                  <div className="order-list-item__name">Lobster</div>
                  <div className="order-list-item__users">Split me Petya and Vasya</div>
                </div>
                <div className="order-list-item__col">
                  <div className="order-list-item__price">
                    <NumberFormat
                      displayType="text"
                      value={300}
                      decimalScale={2}
                      prefix="$ "/>
                  </div>
                  <div className="order-list-item__total">
                    <NumberFormat
                      displayType="text"
                      value={300}
                      decimalScale={2}
                      prefix="$ "/>
                    / 3</div>
                </div>
              </li>
            </ul>
          </div>
        </ContentBlock>

        <div className="buttons-group to-bottom">
          <Button href="/rating">
            <div className="flex">
              <div className="col">Pay</div>
              <div className="col">
                <NumberFormat
                  displayType="text"
                  value={1100}
                  decimalScale={2}
                  prefix="$ "/>
              </div>
            </div>
          </Button>
        </div>
      </Page>
    )
  }
}

export default OrderPage;
