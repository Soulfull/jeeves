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
    myDishes: 0,
    isInvited: false,
  }

  orderItems = [];

  componentWillMount() {
    this.updateData({"data":{"order_items":[{"id":24,"menu_item":{"name":"Beer Lager","price":250},"users":[{"id":45,"name":"Misha"}]},{"id":25,"menu_item":{"name":"Beer Lager","price":250},"users":[{"id":45,"name":"Misha"}]},{"id":26,"menu_item":{"name":"Lobster","price":10000},"users":[{"id":45,"name":"Misha"}]},{"id":27,"menu_item":{"name":"Beer Weisse","price":260},"users":[]},{"id":28,"menu_item":{"name":"Chateaut Boudeaux","price":2500},"users":[{"id":43,"name":"Simon"}]},{"id":29,"menu_item":{"name":"Ceasar Salad","price":350},"users":[{"id":43,"name":"Simon"}]},{"id":30,"menu_item":{"name":"Olivie Salad","price":430},"users":[{"id":43,"name":"Simon"}]},{"id":31,"menu_item":{"name":"Ceasar Salad","price":350},"users":[]},{"id":32,"menu_item":{"name":"Expresso","price":300},"users":[]},{"id":33,"menu_item":{"name":"Borshch","price":99},"users":[{"id":74,"name":"5434543"}]},{"id":34,"menu_item":{"name":"Chateaut Boudeaux","price":2500},"users":[{"id":75,"name":"5435345435"}]},{"id":35,"menu_item":{"name":"Olivie Salad","price":430},"users":[{"id":75,"name":"5435345435"}]}]}})
    // axios.post('https://jeeves-199912.appspot.com/order/status')
    //   .then((response) => {
    //     this.updateData(response.data)
    //   });
  }

  updateData = (data) => {
    this.data = data;
    this.orderItems = this.data.data.order_items || [];
    this.setState({
      tm: +new Date()
    })
  };

  pay = () => {
    axios.post('https://jeeves-199912.appspot.com/order/pay')
      .then(() => {
        getFramework7().mainView.router.loadPage('/rating');
      });
  };

  selectItem = (id) => {
    axios.post('https://jeeves-199912.appspot.com/order/join_order', {
      detail_id: id,
    }).then((response) => {
      this.sum = 0;
      this.setState({
        myDishes: ++this.state.myDishes,
      })
      this.updateData(response.data);
    });

  };

  unSelectItem = (id) => {
    axios.post('https://jeeves-199912.appspot.com/order/leave_order', {
      detail_id: id,
    }).then((response) => {
      this.sum = 0;
      this.setState({
        myDishes: --this.state.myDishes,
      });
      this.updateData(response.data);
    });

  };

  inviteGarson = () => {
    if(this.state.isInvited) {
      return false;
    }
    this.setState({
      isInvited: true,
    });

    setTimeout(() => {
      this.setState({
        isInvited: false,
      })
    }, 5000)
  };

  sum = 0;

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
                      this.sum = this.sum + item.menu_item.price
                    }
                    return user.name;
                  });
                  return (
                    <li
                      key={item.id}
                      className={`order-list-item ${me ? 'order-list-item--selected': ''}`}
                      onClick={onClick}
                    >
                      <div className="order-list-item__col">
                        <div className="order-list-item__name">{item.menu_item.name}</div>
                        {
                          users.length
                            ? users.length > 1
                              ? <div className="order-list-item__users">Split between {`${me ? 'me' : ''} ${users.join(', ')}`}</div>
                              : <div className="order-list-item__users">– {users[0]}</div>
                            : null
                        }

                      </div>
                      <div className="order-list-item__col">
                        <div className="order-list-item__price">
                          <NumberFormat
                            displayType="text"
                            value={me && users.length > 0 ? Math.floor(item.menu_item.price / users.length) : item.menu_item.price}
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

        {
          this.state.myDishes > 0
          ? (
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
                        value={this.state.sum}
                        decimalScale={2}
                        prefix="$ "/>
                    </div>
                  </div>
                </div>
              </div>
            ): (
              <div>
                <div className="description">
                 <span className="lite-text">
                    There is 1 unaccepted dish. It’s price will be split among 2 guests.
                </span>
                  <span className="bold-text">
                  You wil be charged for $ 5.00
                </span>
                </div>
                <div className="buttons-group w100 buttons-group_transparent">
                  <button onClick={this.inviteGarson} className="app-button_transparent">
                    {
                      this.state.isInvited
                      ? <span>Wait please...</span>
                      : <span>Garçon!</span>
                    }
                  </button>
                </div>
              </div>
            )
        }

      </Page>
    )
  }
}

export default OrderPage;
