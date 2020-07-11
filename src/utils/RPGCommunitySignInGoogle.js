import React from 'react';
import GoogleLogin from 'react-google-login'

function RPGCommunitySignInGoogle(props) {
    const onSuccess = (response) => {
        props.onSuccess(response);
    };

    const onFailure = (response) => {
        props.onFailure(response);
    };

    return (
        <div className="container">
            <GoogleLogin
                clientId={process.env.REACT_APP_RPGCommunity_ANESTESIA_KEY}
                buttonText="Entrar"
                onSuccess={onSuccess}
                onFailure={onFailure}           
            />
        </div>
    )
} export default RPGCommunitySignInGoogle;