import React, { Component } from 'react'
import PageWrapper from '../../layouts/PageWrapper'

export default class AddPerson extends Component {
    render() {
        const { match } = this.props;
        return (
            <PageWrapper match={match}>
                <div className="ui raised very padded text container segment" >
                    <form className="ui form">
                        <div className="field">
                            <label>AD</label>
                            <input type="text" name="first-name" placeholder="First Name"/>
                        </div>
                        <div className="field">
                            <label>SOYAD</label>
                            <input type="text" name="last-name" placeholder="Last Name"/>
                        </div>
                        <button className="ui button" type="submit">Submit</button>
                    </form>
                </div>

            </PageWrapper >
        )
    }
}
