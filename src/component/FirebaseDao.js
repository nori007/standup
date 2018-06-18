import firebase from 'firebase';

export default class FirebaseDao {
    
    constructor(config){
        firebase.initializeApp(config);
    } 

    // insert(postData) {
    //     return firebase.database().ref().child('posts').push(postData);
    // }

    getArticle(key) {
        return firebase.database().ref('/posts/' + key);
    }

    newKey(){
        return firebase.database().ref().child('posts').push().key;
    }

    update(key, postData) {
        var updates = {};

        updates['/posts/' + key] = postData;
        updates['/user-post/user1/' + key] = postData;
        
        return firebase.database().ref().update(updates);
    }

    remove(key) {
        firebase.database().ref('/posts/').child(key).remove();

        return firebase.database().ref('/user-post/user1/').child(key).remove();
    }

    off() {
        return firebase.database().ref().off();
    }

    list(pasgesize) {
        return firebase.database().ref('/posts/')
            .orderByKey().limitToLast(pasgesize);
    }
}