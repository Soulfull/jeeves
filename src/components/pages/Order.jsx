import React, {Component} from 'react'
import NumberFormat from 'react-number-format';
import {
  Navbar,
  Page,
  ContentBlock,
} from 'framework7-react';
import Button from '../../components/Button.jsx';
import axios from 'axios';
import appState from '../../stores/appStore.js';
import {getFramework7} from "../App.jsx";

class OrderPage extends Component {
  state = {
    tm: null,
  }

  componentWillMount() {

    // axios.post('https://jeeves-199912.appspot.com/order/status')
    //   .then((response) => {
    //     console.log(response);
    //   });
    this.data = {
      "data": {
        "order_items": [
          {
            "id": 2,
            "menu_item": {
              "name": "Borshch",
              "price": 99
            },
            "users": [
              {
                "id": 2,
                "name": "asdsdf"
              }
            ]
          },
          {
            "id": 3,
            "menu_item": {
              "name": "Chicken",
              "price": 140
            },
            "users": [
              {
                "id": 2,
                "name": "asdsdf"
              }
            ]
          }
        ]
      }
    }
    this.orderItems = this.data.data.order_items;
  }

  updateData = (data) => {
    this.data = data;
    this.orderItems = this.items.data.order_items;
    this.setState({
      tm: +new Date()
    })
  };

  pay = () => {
    axios.post('https://jeeves-199912.appspot.com/order/pay')
      .then(() => {
        getFramework7().mainView.router.loadPage('/order-stuff');
      });
  };

  selectItem = (id) => {
    axios.post('https://jeeves-199912.appspot.com/order/join_order', {
      detail_id: id,
    }).then((response) => {
      console.log(response);
      this.updateData(response.data);
    });

  };

  unSelectItem = (id) => {
    axios.post('https://jeeves-199912.appspot.com/order/leave_order', {
      detail_id: id,
    }).then((response) => {
      console.log(response);
      this.updateData(response.data);
    });

  };

  render() {
    let me = null;
    return (
      <Page>
        <Navbar className="navbar-light" title="Тable 4 at «Seabass»" sliding />
        <ContentBlock inner>
          <div className="order">
            <div className="order__title">Your dishes:</div>
            <ul className="order-list">
              {
                this.orderItems.map(item => {
                  const itemId = item.id;
                  const onClick = () => {
                    if (me) {
                      this.unSelectItem(itemId);
                    } else {
                      this.selectItem(itemId);
                    }
                  };
                  let me = null;
                  const users = item.users.map(user => {
                    if (user.id === appState.user.id) {
                      me = true;
                    }
                    return user.name;
                  });
                  return (
                    <li
                      className={`order-list-item ${me ? 'order-list-item--selected': ''}`}
                      onClick={onClick}
                    >
                      <div className="order-list-item__col">
                        <div className="order-list-item__name">{item.menu_item.name}</div>
                        <div className="order-list-item__users">Split {`${me ? 'me' : ''} ${users.join(', ')}`}</div>
                      </div>
                      <div className="order-list-item__col">
                        <div className="order-list-item__price">
                          <NumberFormat
                            displayType="text"
                            value={item.menu_item.price}
                            decimalScale={2}
                            prefix="$ "/>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </ContentBlock>

        <div className="buttons-group to-bottom w100">
          <div
            className="app-button"
            onClick={this.pay}
          >
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
          </div>
        </div>
      </Page>
    )
  }
}

export default OrderPage;
