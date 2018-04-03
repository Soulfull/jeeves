import React, {Component} from 'react'
import Rating from 'react-rating';
import {
  Navbar,
  Page,
  ContentBlock,
} from 'framework7-react';
import {getFramework7} from "../App.jsx";


class RatingPage extends Component {
  render() {
    return (
      <Page>
        <Navbar className="navbar-light" title="Тable 4 at «Seabass»" sliding />
        <div className="page-wrapper flex-column">
          <ContentBlock>
            <div className="order__title">Success</div>
          </ ContentBlock>
          <div className="rating">
            <div className="rating__title">Please, rate the restaurant</div>
            <Rating
              onChange={() => {
                setTimeout(() => {
                  getFramework7().mainView.router.loadPage('/thx/');
                }, 400)
              }}
              fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35">
                <path fill="#6336D9" fill-rule="evenodd" d="M17.522 28.688L8.209 34.06a1 1 0 0 1-1.478-1.073l2.23-10.517a1 1 0 0 0-.308-.95L.667 14.322a1 1 0 0 1 .564-1.738l10.691-1.128a1 1 0 0 0 .809-.588l4.377-9.819a1 1 0 0 1 1.826 0l4.377 9.82a1 1 0 0 0 .809.587l10.691 1.128a1 1 0 0 1 .565 1.738l-7.986 7.197a1 1 0 0 0-.31.95l2.231 10.517a1 1 0 0 1-1.478 1.073l-9.312-5.37a1 1 0 0 0-1 0z"/>
              </svg>
              }
              emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37">
                <path fill="#000" fill-rule="nonzero" d="M20.02 28.822l9.313 5.371-2.23-10.517a2 2 0 0 1 .617-1.9l7.986-7.197-10.691-1.129a2 2 0 0 1-1.617-1.174l-4.377-9.82-4.377 9.82a2 2 0 0 1-1.617 1.174L2.336 14.58l7.986 7.197a2 2 0 0 1 .618 1.9L8.71 34.193l9.312-5.371a2 2 0 0 1 1.998 0zM9.708 35.926a2 2 0 0 1-2.955-2.148l2.23-10.517-7.986-7.197a2 2 0 0 1 1.13-3.474l10.69-1.129 4.377-9.82a2 2 0 0 1 3.654 0l4.377 9.82 10.691 1.129a2 2 0 0 1 1.13 3.474l-7.987 7.197 2.23 10.517a2 2 0 0 1-2.955 2.148l-9.313-5.372-9.313 5.372z"/>
              </svg>
              }
            />
          </div>
          <div style={{height: '210px'}}></div>
        </div>


      </Page>
    )
  }
}

export default RatingPage;
