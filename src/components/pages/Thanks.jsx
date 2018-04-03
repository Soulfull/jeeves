import React, {Component} from 'react'
import Rating from 'react-rating';
import {
  Navbar,
  Page,
  ContentBlock,
} from 'framework7-react';
import {getFramework7} from "../App.jsx";


class ThanksPage extends Component {
  render() {
    return (
      <Page>
        <Navbar className="navbar-light" title="Тable 4 at «Seabass»" sliding />
        <div className="page-wrapper flex-column">
          <div style={{height: '210px'}}></div>
          <ContentBlock>
            <div className="order__title">Thank you!</div>
          </ ContentBlock>

          <div style={{height: '210px'}}></div>
        </div>


      </Page>
    )
  }
}

export default ThanksPage;
