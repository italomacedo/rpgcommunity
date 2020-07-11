import RPGCommunityAdapterGenericFirestore from '../persistence/RPGCommunityFirestoreAdapter';
import RPGCommunityModelAdapterFirestore from '../persistence/RPGCommunityFirestoreAdapter';
import RPGCommunityFirebase from '../utils/RPGCommunityFirebase';
import RPGCommunityModelFactory from '../model/RPGCommunityModelFactory';

const RPGCommunityFacade = {
    init: async () => {
        var user = RPGCommunityFacade.getUserFromStorage();

        if(!user) {
            RPGCommunityFacade.signIn();
        } else {
            RPGCommunityFacade.login(user);
        }
    },   

    signIn: async () => {
        window.location = "/signin";
    },

    login: async (user) => {
        var responseProfile = {error: null, result: null}
        var credential = RPGCommunityFirebase.firebase.auth.GoogleAuthProvider.credential(user.tokenId);
        var signedCredential = RPGCommunityFirebase.firebase.auth().signInWithCredential(credential);

        responseProfile = await RPGCommunityModelAdapterFirestore.getById(RPGCommunityModelFactory.Profile().meta_name, "email", user.email);
        if(responseProfile.error) return responseProfile;

        if(user) sessionStorage.setItem("user", JSON.stringify(user));
        if(responseProfile.result) sessionStorage.setItem("profile", JSON.stringify(responseProfile.result));

        window.location = "/";
    },

    logout: async (user) => {
        var responseProfile = {error: null, result: null}
        var credential = RPGCommunityFirebase.firebase.auth.GoogleAuthProvider.credential(user.tokenId);
        var signedCredential = RPGCommunityFirebase.firebase.auth().signInWithCredential(credential);

        responseProfile = await RPGCommunityModelAdapterFirestore.getById(RPGCommunityModelFactory.Profile().meta_name, "email", user.email);
        if(responseProfile.error) return responseProfile;

        if(user) sessionStorage.setItem("user", JSON.stringify(user));
        if(responseProfile.result) sessionStorage.setItem("profile", JSON.stringify(responseProfile.result));

        window.location = "/";
    },

    getUserFromStorage: () => {
        var sessionItem = sessionStorage.getItem("user");
        var user;

        try {
         user = JSON.parse(sessionItem);
        } catch (ex) {}

        return user;
    },

    getProfileFromStorage: () => {
        var sessionItem = sessionStorage.getItem("profile");
        var profile;

        try {
            profile = JSON.parse(sessionItem);
        } catch (ex) {}

        return profile;
    },

    logout: () => {
        sessionStorage.clear();
    },

    getUser: () => {
        return RPGCommunityFacade.getUserFromStorage();
    },

    getProfile: () => {
        return RPGCommunityFacade.getProfileFromStorage();
    },

    getProfileByEmail: async (email) => {
        var response = {error: null, result: null};
        
        response = await RPGCommunityModelAdapterFirestore.getById(RPGCommunityModelFactory.Profile().meta_name, "email", email);
        if(response.error) return response;

        return response;
    },

    //Begin of Profile
    viewProfile: () => {
        window.location = "/profile";
    },

    createOrUpdateProfile: async (profile) => {
        var response = {error: null, result: null};

        if(RPGCommunityFacade.getUser()) {
            response = await RPGCommunityAdapterGenericFirestore.createOrUpdate(RPGCommunityModelFactory.Profile().meta_name, "email", RPGCommunityFacade.getUser().email, profile);
            if(response.error) return response;
            sessionStorage.setItem("profile", JSON.stringify(response.result));
        } else {
            response.error = "Você não tem autenticação para realizar esta operação."
         }
         
        return response;
    },
    //End of Profile
} 
export default RPGCommunityFacade;