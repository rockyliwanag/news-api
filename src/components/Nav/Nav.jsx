import React from 'react';
import { Button, Form } from 'semantic-ui-react';

function Nav(props) {
    return(
        <nav>
            <div>
                <h1>Real News Network</h1>
            </div>
            <div className="login-username">
                {
                props.signedIn ? 
                    <h1>Welcome {props.username}</h1>
                    :
                    <Form onSubmit={props.handleSubmit}>
                        <Form.Input onChange={props.handleChange} type="text"/> <Button>Login</Button>
                    </Form>
                }
            </div>
        </nav>
    )
}

export default Nav;