import Article from '../component/Article';

var article1 = Article();

it('Object assign', function() {
    var article2 = Object.assign({}, article1);
    article2.user = 'user2';
    article2.content = 'next';
    article2.urls[0].url = 'https://172.16.10.114:6800/';
    expect(article1.urls[0].imgWidth).toEqual(article2.urls[0].imgWidth);
})