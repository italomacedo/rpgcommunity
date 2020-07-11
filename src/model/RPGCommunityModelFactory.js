import RPGCommunityModel from "./RPGCommunityModel";

const RPGCommunityModelFactory = {
    Profile: function (id, name, birthdate, gender, email) {
        return new RPGCommunityModel(
            id,
            "profile",
            "Perfil",
            [
                {
                    id: "name",
                    display: "Nome",
                    type: "input",
                    options: null,
                    value: name
                }  
                ,
                {
                    id: "birthdate",
                    display: "Data de nascimento",
                    type: "date",
                    options: null,
                    value: birthdate
                }                
                ,
                {
                    id: "gender",
                    display: "Sexo",
                    type: "select",
                    options: ["Selecione", "M", "F"],
                    value: gender
                }
                ,
                {
                    id: "email",
                    display: "Email",
                    type: "input",
                    options: null,
                    value: email
                }
            ]);
    }
}

export default RPGCommunityModelFactory;