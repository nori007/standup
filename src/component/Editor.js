import React, {Component} from 'react';
import './Editor.css';
import Profile from './Profile';
import Article from './Article';
import Card from './Card'
import getEmbedly from './EmbedlyDao'

class Editor extends Component {

    constructor(props) {
        super(props);
        this.onPaste = this.onPaste.bind(this);
        this.editorChange = this.editorChange.bind(this);
        this.hasValue = this.hasValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.detectURL = this.detectURL.bind(this);
        this.getArticle = this.getArticle.bind(this);
        this.getForcedState = this.getForcedState.bind(this);

        this.state = {
            embedlyUrl: undefined,
            content: undefined,
            cardInfo: undefined
        }
    }

    getForcedState(embedlyUrl, content) {
        return new Promise(resolve => {
            if(embedlyUrl) {
                getEmbedly(embedlyUrl).then (response => {
                    resolve({
                        embedlyUrl: embedlyUrl,
                        content: content,
                        cardInfo: response
                    });
                }).catch(error => {
                    resolve({
                        embedlyUrl: undefined,
                        content: undefined,
                        cardInfo: undefined
                    });
                })
            }
            else {
                resolve({
                    content: content
                });
            }
        })
    }


    onPaste(event) {
        event.clipboardData.items[0].getAsString(text=>{
            if(this.detectURL(text)) {
                this.setState({embedlyUrl: text, content: this.state.content});
            }
        })    
    }

    editorChange(event) {
        let checkText = this.detectURL(event.currentTarget.textContent);
        if(!this.state.embedlyUrl && (event.keyCode === 32 || event.keyCode === 13) && checkText){
            this.getForcedState(checkText, event.currentTarget.textContent).then((obj => {
                this.setState(obj);
            }))
        }else{
            this.getForcedState(undefined, event.currentTarget.textContent).then((obj => {
                this.setState(obj);
            }))
        }
    }

    getArticle() {
        let article = {};
        article.user = "user1";
        article.content = this.state.content;
        if(this.state.embedlyUrl) {
            article.ardInfo = this.state.cardInfo;
        }

        return article;
    }

    detectURL(text) {
        var urls = text.match(/(https?:\/\/[^\s]+)/g)||text.match(/(www.[^\s]+)/g);
        if(urls && urls.length > 0) return urls[0];
        else return undefined;
    }

    getCard(embedlyUrl) {
        if(embedlyUrl) {
            return (
                <div>{embedlyUrl}</div>
            );
        }else {
            return(<div></div>);
        }
    }

    hasValue(value) {
        if((value && (typeof value) === "string")){
            return (!value) ? false : (value.trim() === '' ? false : true);
        }else {
            return false;
        }
    }

    handleSubmit(event) {
        let article = Object.assign({}, Article());
        article.user = "user1";
        article.content = this.state.content;
        article.urls[0].url = this.state.embedlyUrl;
        this.props.handleSubmit(article);
    }

    render () {
        return (
            <div className="wrapEditor">
                <Profile isAnonymous={this.props.isAnonymous}/>
                
                <div className="textEditor">
                    <div className="innerEdit" contentEditable="true" placeholder="write.." onPaste={this.onPaste} onKeyUp={this.editorChange}>
                    </div>
                    <Card cardInfo = {this.state.cardInfo} />
                </div>
                <div className="actionBar">
                    <button className="upload" onClick={this.handleSubmit}>
                        <span>StandUp</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Editor;