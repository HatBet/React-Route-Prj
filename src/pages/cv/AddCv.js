import { Component } from 'react'
import React from 'react'
import { Input } from 'semantic-ui-react'
import '../../App.css'
import PageWrapper from '../../layouts/PageWrapper'

export default class AddCv extends Component {
  render() {


    const {match} = this.props;

    return (
      <PageWrapper match={match}>
      <div className="ui raised very padded text container segment" id="cvForm">
       

        <form className="ui form">
          <div className="field">
            <label>Kişisel Bilgiler </label>
            <div className="two fields">
              <div className="field">
                <Input type="text" name="shipping[first-name]" placeholder="Adınız..." />
              </div>
              <div className="field">
                <Input type="text" name="shipping[last-name]" placeholder="Soyadınız..." />
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label>Cinsiyet</label>
                <select className="ui fluid dropdown">
                  <option value="">Cinsiyet</option>
                  <option value="K">Kadın</option>
                  <option value="E">Erkek</option>
                </select>
              </div>
              <div className="field">
                <label>Yaş</label>
                <Input type="number" name="yas" placeholder="yaşınız.." />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Adres</label>
            <div className="fields">
              <div className="twelve wide field">
                <Input type="text" name="shipping[address]" placeholder="Street Address" />
              </div>
              <div className="four wide field">
                <Input type="text" name="shipping[address-2]" placeholder="Apt #" />
              </div>
            </div>
          </div>
          <div className="two fields">

          </div>

         
          <div className="ui button" tabindex="0">Submit Order</div>
        </form>

      </div>
      </PageWrapper>

    )
  }
}


