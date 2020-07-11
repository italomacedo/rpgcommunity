import React from 'react';
import RPGCommunitySignInGoogle from './utils/RPGCommunitySignInGoogle';

function SignInView(props) {
    return (
        <div class="container">
            <div style={{ "height": "117px" }} />
            <div class="row">
                <div class="col">
                    <div class="card" style={{ "width": "448px", "height": "500px" }}>
                        <div class="container">
                            <div class="row justify-content-md-center">
                                <div class="col align-self-center" align="center">
                                    <img src="./resources/applogo.png" class="container" />
                                    <p>Você não está logado.</p>
                                    <p>Podemos fazer o login rapidamente para você, sem necessidade de um novo cadastro.</p>
                                    <p>Faça o login através da sua conta de Preferência.</p>
                                    <RPGCommunitySignInGoogle
                                        onSuccess={props.onSuccess}
                                        onFailure={props.onFailure} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignInView;