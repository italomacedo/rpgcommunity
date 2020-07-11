import React, { useState, useEffect } from 'react';

function ViewGoogleUser(props) {
    const [instance, setInstance] = useState(props.instance);

    return (
        <div className="ViewGoogleUser" class="container">
            <div class="row">
                {instance
                    ?
                    <div class="col">
                        <img src={instance.imageUrl} />
                        <h5>Dados básicos</h5>
                        <h6>Nome completo</h6>
                        <p>{instance.name}</p>
                        <h6>Nome</h6>
                        <p>{instance.givenName}</p>
                        <h6>Sobrenome</h6>
                        <p>{instance.familyName}</p>
                        <h6>Email</h6>
                        <p>{instance.email}</p>
                    </div>
                    :
                    <div />
                }
            </div>
        </div>
    );
} export default ViewGoogleUser;