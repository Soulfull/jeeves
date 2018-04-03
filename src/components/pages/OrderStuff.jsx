import React, {Component} from 'react'
import NumberFormat from 'react-number-format';
import {
  Navbar,
  Page,
  ContentBlock,
} from 'framework7-react';
import Button from '../../components/Button.jsx';


class OrderStuff extends Component {
  render() {
    return (
      <Page>
        <Navbar className="navbar-light" title="Тable 4 at «Seabass»" sliding />
        <ContentBlock inner>
          <div className="order">
            <ul className="order-list">
              <header className="header-group">
                <h4 className="common-title">Table 4:</h4>
                <Button className="add-button" href="/menu">+ Add</Button>
              </header>
              <li className="order-list-item">
                <div className="order-list-item__col">
                  <div className="order-list-item__name">Beer Weisse</div>
                </div>
                <div className="order-list-item__col">
                  <div className="order-list-item__price">
                    <NumberFormat
                      displayType="text"
                      value={10}
                      decimalScale={2}
                      prefix="$ "/>
                  </div>
                </div>
              </li>
              <li className="order-list-item">
                <div className="order-list-item__col">
                  <div className="order-list-item__name">Beer Lager</div>
                </div>
                <div className="order-list-item__col">
                  <div className="order-list-item__price">
                    <NumberFormat
                      displayType="text"
                      value={5}
                      decimalScale={2}
                      prefix="$ "/>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="order-list">
              <header className="header-group">
                <h4 className="common-title">Alexey:</h4>
                <button className="add-button">+ Add</button>
              </header>
              <li className="order-list-item">
                <div className="order-list-item__col">
                  <div className="order-list-item__name">Cookies</div>
                </div>
                <div className="order-list-item__col">
                  <div className="order-list-item__price">
                    <NumberFormat
                      displayType="text"
                      value={10}
                      decimalScale={2}
                      prefix="$ "/>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="order-list">
              <header className="header-group">
                <h4 className="common-title">Mihail:</h4>
                <button className="add-button">+ Add</button>
              </header>
              <li className="order-list-item">
                <div className="order-list-item__col">
                  <div className="order-list-item__name">Cookies</div>
                </div>
                <div className="order-list-item__col">
                  <div className="order-list-item__price">
                    <NumberFormat
                      displayType="text"
                      value={10}
                      decimalScale={2}
                      prefix="$ "/>
                  </div>
                </div>
              </li>
            </ul>


          </div>
        </ContentBlock>

        <div className="buttons-group to-bottom w100">
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

export default OrderStuff;
