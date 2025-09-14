import { ref, onValue } from "firebase/database";
import { database } from './firebase';

export const listenToCollection = (path, callback) => {
    const collectionRef = ref(database, path);

    return onValue(collectionRef, (snapshot) => {
        const data = snapshot.val();

        if (data) {
            const items = Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            }));
            callback(items);
        } else {
            callback([]);
        }
    });
};