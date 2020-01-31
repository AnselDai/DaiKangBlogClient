import React from 'react'
import '../css/BlogTitle.css'

class BlogTitle extends React.Component {
    constructor(props) {
        super(props);
        this.needMeta = this.props.needMeta;
        let tags = []
        if (this.needMeta) {
            let tags_data = this.props.tags.split(',');
            for (var i = 0; i < tags_data.length; i++) {
                tags.push(tags_data[i].trim());
            }
        }
        this.state = {
            title: this.props.title,
            postTime: this.props.postTime,
            tags: tags
        }
    }
    componentWillReceiveProps(props, nextProps) {
        let tags = []
        if (this.needMeta) {
            let tags_data = props.tags.split(',');
            for (var i = 0; i < tags_data.length; i++) {
                tags.push(tags_data[i].trim());
            }
        }
        this.setState ({
            title: props.title,
            postTime: props.postTime,
            tags: tags,
            needMeta: this.props.needMeta
        })
    }
    render() {
        var meta = (<span className="tag">
                        <span className="post-time">
                            <span className="post-time-icon glyphicon glyphicon-calendar"></span>
                            &nbsp;
                            <time>{this.state.postTime}</time>
                            &nbsp;
                        </span>
                        <span className="v-divider"></span>
                        &nbsp;&nbsp;
                        <span className="glyphicon glyphicon-folder-open"></span>
                        &nbsp;&nbsp;
                        {this.state.tags.map(tag => <span key={tag} className="category"><a>{tag}</a>&nbsp;&nbsp;</span>)}
                    </span>)
        var no_meta = (<div></div>)
        var insert;
        if (this.needMeta) insert = meta;
        else insert = no_meta;
        return (
            <h1 className="title-h1">
                <a className="post-link-title">{this.state.title}</a>
                <div className="post-meta">
                    {insert}
                </div>
            </h1>
        )
    }
}

export default BlogTitle;