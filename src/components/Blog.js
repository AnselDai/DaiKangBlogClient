import React from 'react';
import '../css/Blog.css'
import {withRouter} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import config from '../config';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { jsx, javascript, sass, scss } from 'react-syntax-highlighter/dist/esm/languages/prism';
import BlogTitle from './BlogTitle';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.server_url = config.server_url;
        this.state = {
            title: "",
            postTime: "",
            tags: "",
            content: "",
            blogcount: 0
        }
    }
    componentWillMount() {
        SyntaxHighlighter.registerLanguage("jsx", jsx);
        SyntaxHighlighter.registerLanguage("javascript", javascript);
        let params = this.props.match.params;
        this.GetBlogDataById(params.id);
    }
    GetBlogDataById(id) {
        fetch(this.server_url + '/blog', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: id})
        }).then(res => res.text())
        .then(res => {
            console.log(res);
            let data = JSON.parse(res);
            console.log(data);
            this.setState({
                title: data.overview.title,
                postTime: data.overview.postTime,
                tags: data.overview.tags,
                content: data.content
            })
        })
    }
    render() {
        let params = this.props.match.params;
        return (
            <div className="blog-div">
                <BlogTitle title={this.state.title}
                           postTime={this.state.postTime}
                           tags={this.state.tags}
                           needMeta={true}
                />
                <ReactMarkdown 
                    className="blog-content"
                    source={this.state.content}
                    escapeHtml={false}

                />                
            </div>
        )
    }
}
export default withRouter(Blog)