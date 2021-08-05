import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, MenuItem } from 'semantic-ui-react'



export default function SignedOut({ signIn }) {
    return (
        <div>
           
            <MenuItem>
                <Button as={NavLink} to="/Giriş" primary onClick={signIn}>Giriş Yap</Button>
            </MenuItem>
        
        </div>
        
    )
}
