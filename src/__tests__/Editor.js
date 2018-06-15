import Editor from '../component/Editor';

let ed = new Editor;

it('detect URL 1', () => {
    expect(ed.detectURL("tesr www.devpools.kr ")).toEqual("www.devpools.kr");
});

it('detect URL 2', () => {
    expect(ed.detectURL("tesr http://www.devpools.kr www.github.com 가나다")).toEqual("http://www.devpools.kr");
});

it('detect URL 3', () => {
    expect(ed.detectURL("tesr wwwㅇㅁㅁ너ㅏ오.devpools.kr www.gitbug가나다. http://www.devpools.kr")).toEqual("http://www.devpools.kr");
});

it('hasValue 1', () => {
    expect(ed.hasValue(1)).toEqual(false);
})

it('hasValue 2', () => {
    expect(ed.hasValue(new Date)).toEqual(false);
})

it('hasValue 3', () => {
    expect(ed.hasValue("1")).toEqual(true);
})

it('hasValue 4', () => {
    expect(ed.hasValue()).toEqual(false);
})

it('hasValue 5', () => {
    expect(ed.hasValue({})).toEqual(false);
})

it('hasValue 6', () => {
    expect(ed.hasValue([])).toEqual(false);
})