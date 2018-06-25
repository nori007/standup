# react 공부하려고 만든 프로젝트.
```
머리속으로 그리는 리액트 프로그래밍 - 도경태 + 이홍식 + 김윤영 + 유봉주 / 이상과공상
https://github.com/ehrudxo/standup/

```

## day1
### gh-pages 사용 방법.
* github project settings -> 하위 메뉴 "GitHub Pages" 설정 -> gh-pages branch 로 설정

### gh-pages 설정하면서 발생한 문제
 * ssh 연결 관련 문제(https://github.com/hexojs/hexo-deployer-git/issues/71)
 remote 저장소를 SSH로 변경 -> deploy keys 키등록



## day2
### 로고 & 파비콘
 * https://ko.cooltext.com/Logos
 * https://www.favicon-generator.org/


## day3
### jest
 * 자바스크립트 단위테스트를 도와주는 틀은 많은 것으로 알고있었는데, create-react-app에서 기본적으로 제공하는 ject를 활용한 단위테스트. 신세계였음. npm 기반으로 된 프로젝트에서 활용하면 될것으로 보임. 추가적으로 ~.spec.js 파일도 테스트 파일로아는데 같이 사용되는지 확인해 볼 것.

 ### .env
  * REACT_APP_ 자동으로 붙여주는게 아니라 붙여주는게 규칙임. 안붙이면은 안붙인 변수로 접근하면 됨.
  * 나중에 gitignore에 추가해서 키 노출안되도록 수정. 


## day4
### firebase 
 * nosql이며, 그냥 사용하면됨! 간단한 데이터 저장은 요기 이용하면 될듯.
 * https://firebase.google.com/docs/database/?hl=ko
 * orderByChild(), orderByKey(), orderByValue() 등 제공하는 함수 있음.

### 리엑트 컴포넌트 생명주기
 * getDefaultProps() -> getInitialState() -> componentWillMount() -> render() -> componentDidMount()
 * getDefaultProps() / getInitialState() : this.state 값 참조 불가, this.setState() 함수 사용 불가
 * render() : this.state 참조 가능 하나 this.setState() 사용 불가


## day5
### 추가 기능
 * thumbnail 이미지가 없을경우 이미지 없음 기본이미지 출력

### embed.ly
 * 돈이...! 빼고 진행.

 