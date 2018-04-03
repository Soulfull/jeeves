import React, {Component} from 'react'
import QrReader from 'react-qr-reader';
import {Page, Navbar} from 'framework7-react';
import { getFramework7 } from '../App.jsx';
import axios from 'axios';
import appState from '../../stores/appStore.js';

class ScanPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      delay: 300,
      error: false,
      result: 'No result',
    };
    this.handleScan = this.handleScan.bind(this)
  }

  sendCode(data) {
    const d = JSON.parse(data);

    appState.rest = d.rest;
    appState.table = d.table;
    this.setState({
      loading: true,
    });
    return axios.post('/code', data)
      .then(() => {
        this.setState({
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
          loading: false,
        });
      })
  }

  handleScan(data) {
    if (data) {
      this.sendCode(data)
        .then(() => {
          // if (!this.state.error) {
            getFramework7().mainView.router.loadPage('/garson/');
          // }
        });
    }
  }
  handleError(err){
    console.error(err);
  }
  render(){
    return(
      <Page>
        <Navbar title="Jeeves" sliding />
          <div className="app-scan">
            <div className="scan-box">
              <div className="scan-title">Scan QR code at your table</div>
              <QrReader
                className="scan-code"
                delay={this.state.delay}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '100%', height: '100%', position: 'absolute' }}
              />
            </div>
            <div className="scan-title scan-title--bottom">Help

              <button onClick={() => {getFramework7().mainView.router.loadPage('/garson/');}}>GO NEXT!</button>
            </div>
          </div>
      </Page>
    )
  }
}

export default ScanPage;
