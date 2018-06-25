export default function getarticle(
    user = 'user1',
    content = 'user1 입니다.',
    url = 'https://github.com/nori007/standup',
    title = 'user1 title',
    description = 'test user1 객체입니다. 이러쿵 저러쿵, asd123asd12sgnuign34',
    thumbnail_url = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    thumbnail_width = 80,
    thumbanil_height = 80,
    provider_name = "google"
){
    return {
        user: user,
        content: content,
        cardInfo: {
            url: url,
            title: title,
            description: description,
            thumbnail_url: thumbnail_url,
            thumbnail_width: thumbnail_width,
            thumbanil_height: thumbanil_height,
            provider_name: provider_name
        }
    }
}