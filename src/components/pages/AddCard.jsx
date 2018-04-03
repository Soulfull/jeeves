import React from 'react';
import NumberFormat from 'react-number-format';
import {
  ContentBlock,
  GridRow,
  GridCol,
  Navbar,
  Page
} from 'framework7-react';
import Button from '../../components/Button.jsx';


const onChangeHandler = (event) => {
  console.log('change');
};

export const AddCard = () => {
  return (
    <Page>
      <div className="page-wrapper page-wrapper--start">
      <ContentBlock inner className="no-margin">
        <div className="form-input">
          <div className="form-input__label">Name</div>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="form-input">
          <div className="form-input__label">Credit card number</div>
          <NumberFormat format="#### #### #### ####" placeholder="XXXX XXXX XXXX XXXX" />
        </div>
        <GridRow>
          <GridCol width={50}>
            <div className="form-input">
              <div className="form-input__label">Entry date</div>
              <NumberFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']}/>
            </div>
          </GridCol>
          <GridCol width={50}>
            <div className="form-input">
              <div className="form-input__label">CVC code</div>
              <input type="text" placeholder="XXX" />
            </div>
          </GridCol>
        </GridRow>
      </ContentBlock>
      <div className="buttons-group">
        <Button href="/scan">Done</Button>
      </div>
      </div>
    </Page>
  );
};
