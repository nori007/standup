import React, {Component} from 'react';
import './Editor.css';
import Profile from './Profile';

class Editor extends Component {
    render () {
        return (
            <div className="wrapEditor">
                <Profile isAnonymous={this.props.isAnonymous}/>
                
                <div className="textEditor">
                    <div className="innerEdit" contentEditable="true" placeholder="write..">
                    </div>
                    <div className="actionBar">
                        <button className="upload" onClick={this.props.handleSubmit}>
                            <span>StandUp</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Editor;