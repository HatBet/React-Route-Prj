import React from 'react'
import {Dropdown, Menu, Icon} from 'semantic-ui-react'
export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item> 
                <Icon size="large" name="user circle"/>
                <Dropdown>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim"  icon="info"/>
                        <Dropdown.Item  onClick={signOut} text="Çıkış Yap"  icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item> 
        </div>
    )
}
