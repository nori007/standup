const Article = () => {
    let user = 'user1';
    let content = 'user1 입니다.';
    let url = 'https://github.com/nori007/standup';
    let title = 'user1 title';
    let description = 'test user1 객체입니다. 이러쿵 저러쿵, asd123asd12sgnuign34';
    let imageUrl = '';
    let imgWidth = 640;
    let imgHeight = 480;
    let thumbnailUrl = '';
    let thumbnailWidth = 80;
    let thumbanilHeight = 80;

    return ({
        user: user,
        content: content,
        urls:[{
            url: url,
            title: title,
            description: description,
            imageUrl: imageUrl,
            imgWidth: imgWidth,
            imgHeight: imgHeight,
            thumbnailUrl: thumbnailUrl,
            thumbnailWidth: thumbnailWidth,
            thumbanilHeight: thumbanilHeight
        }]
    })
}

export default Article;