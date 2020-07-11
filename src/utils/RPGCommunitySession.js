const RPGCommunitySession = {
    exists: function (objectName) {
        if (sessionStorage.getItem(objectName)) {
            return true;
        } else {
            return false;
        }
    }
    ,
    add: function (name, object) {
        if (!RPGCommunitySession.exists(name)) sessionStorage.setItem(name, JSON.stringify(object));
    }
    ,
    get: function (name) {
        var response = { error: null, result: null }
        response.result = sessionStorage.getItem(name);

        try {
            response.result = JSON.parse(response.result);
        } catch (ex) {
            response.error = "Não foi converter obter o item " + name + " na sessão de usuário para JSON: " + ex.toString();
        }

        return response;
    }
    ,
    remove: function (name) {
        if (RPGCommunitySession.exists(name)) sessionStorage.setItem(null);
    }
}
export default RPGCommunitySession;

