import React, { Component } from 'react'
import 'semantic-ui-react'
import '../App.css'

export default class SignUp extends Component {
    render() {
        return (
            <div  className="ui raised very padded text container segment">
                <form className="ui form">
                    <div className="field">
                        <h4>Kayıt Ol</h4>
                    </div>
                    <div className="field">
                        <label className="labelG">Ad</label>
                        <input type="text" name="first-name" placeholder="Adınız"/>
                    </div>
                    <div className="field">
                        <label className="labelG">Soyad</label>
                        <input type="text" name="last-name" placeholder="Soyadınız"/>
                    </div>
                    <div className="field">
                        <label className="labelG">E-mail</label>
                        <input type="email" name="last-name" placeholder="email"/>
                    </div>
                    <div className="field">
                        <label className="labelG">Telefon</label>
                        <input type="text" name="last-name" placeholder="telefon"/>
                    </div>
                  <div className="field">
                        <label className="labelG">Kullanıcı Adı</label>
                        <input type="text" name="user-name" placeholder="Kullanıcı Adı"/>
                  </div>
                  <div className="field">
                        <label className="labelG">Şifre</label>
                        <input type="password" name="password" placeholder="Şifreniz"/>
                  </div>
                    <button className="ui button primary" type="submit">Kayıt ol</button>
                </form>
                
            </div>
        )
    }
}
