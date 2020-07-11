import RPGCommunityFirebase from '../utils/RPGCommunityFirebase';

const RPGCommunityModelAdapterFirestore = {
    getById: async (collectionName, primaryKeyFieldName, primaryKeyCriterium) => {
        var response = {error: null, result: null};

        var firestore = RPGCommunityFirebase.firestore;
        var query = await firestore.collection(collectionName).where(primaryKeyFieldName, "==", primaryKeyCriterium).get()
        .catch(error => {
            response.error = error;
        });

        if(response.error) return response;

        if (query.docs.length > 0) {
            response.result = query.docs[0].data();
        } else {
            response.error = "Nenhum registro encontrado.";
        }

        return response;
    },

    createOrUpdate: async (collectionName, primaryKeyFieldName, primaryKeyCriterium, newValue) => {
        var response = {error: null, result: null};
        newValue[primaryKeyFieldName] = primaryKeyCriterium;

        var firestore = RPGCommunityFirebase.firestore;

        var query = await firestore.collection(collectionName).where(primaryKeyFieldName, "==", primaryKeyCriterium).get()
        .catch(error => {
            response.error = error;
        });

        if(response.error) return response;

        var ref;
        var newRef;

        if (query.docs.length > 0) {
            ref = query.docs[0];

            await firestore.collection(collectionName).doc(ref.id).update(newValue).catch(error => {
                response.error = error;
            });

            if(response.error) return response;
            
            query = await firestore.collection(collectionName).where(primaryKeyFieldName, "==", primaryKeyCriterium).get()
            .catch(error => {
                response.error = error;
            });     

            if(response.error) return response;

            if(query.docs.length > 0) response.result = await query.docs[0].data();
        } else {
            newRef = await firestore.collection(collectionName).add(newValue)
            .catch(error => {
                response.error = error;
            }); 

            if(response.error) return response;
            
            query = await firestore.collection(collectionName).where("id", "==", newRef.id).get()
            .catch(error => {
                response.error = error;
            });

            if(query.docs.length > 0) response.result = await query.docs[0].data();
        }

        return response;
    }
}

export default RPGCommunityModelAdapterFirestore;