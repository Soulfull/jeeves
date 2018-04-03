import React from 'react';
import {
  ContentBlock,
  Navbar,
  Page
} from 'framework7-react';
import Button from '../../components/Button.jsx';

export const Garson = () => {
  return (
    <Page>
      <Navbar className="navbar-light" title="Тable 4 at «Seabass»" sliding />
      <div className="page-wrapper flex-column">
        <ContentBlock>
          <div className="app-text">
            Saint-Petersburg, <br />
            Prospect Medikov 24
          </div>
        </ ContentBlock>
        <div className="buttons-group">
          <Button href="/order">Garçon!</Button>
        </div>
        <div style={{height: '210px'}}></div>
      </div>
    </Page>
  );
};
