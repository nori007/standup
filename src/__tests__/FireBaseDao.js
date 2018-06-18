import CloudDao from '../component/FirebaseDao';
import firebaseConfig from '../config/firebaseConfig';
import Article from '../component/Article';

let dao = new CloudDao(firebaseConfig);

it('upload article and edit and delete', function() {
    let key = dao.newKey();
    
    let article1 = Article();
    let article2 = Object.assign({}, article1);
    article2.user = 'user2';
    article2.content = 'next';
    article2.urls[0].url = 'https://172.16.10.114:6800/';

    var updated = dao.update(key, article1);
    dao.getArticle(key).on('value', (snapShot) => {
        expect(snapShot.key).toEqual(key);

        dao. update(key, article2)

        dao.remove(key);
    });

    return updated;
});

it('list article', function() {
    dao.list(25).once('value', (dataSnapshots) => {
        dataSnapshots.forEach((dataSnapshot) => {
            keys.push(dataSnapshot.key);
            var article = dataSnapshot.val();
            expect(article.user).toEqual("user1");
        })
    });
})