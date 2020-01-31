import React from 'react';
import '../css/BlogOverview.css';
import {withRouter} from 'react-router-dom';
import config from '../config'
import BlogTitle from './BlogTitle'

class BlogOverview extends React.Component {
    constructor(props) {
        super(props);
        this.base_url = config.base_url;
        this.state = {
            id: this.props.id,
            title: this.props.title,
            postTime: this.props.postTime,
            tags: this.props.tags,
            description: this.props.description,
            headImg: this.props.headImg
        }
    }
    render() {
        return (
            <div className="overview row">
                <header>
                    <BlogTitle title={this.state.title} postTime={this.state.postTime} tags={this.state.tags} needMeta={true} />
                </header>
                <div className="blog-overview-body row">
                    <span className="blog-title">{this.state.description}</span>
                    <br />
                    <a className="col-xs-10 col-sm-10 col-xs-offset-1 col-sm-offset-1">
                        <img className="img-responsive" src={this.state.headImg} />
                    </a>
                    <a className="read-more-btn col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4" href={this.base_url + '/blog/' + this.state.id}>
                        来瞧瞧？&nbsp;<span className="glyphicon glyphicon-hand-right"></span>
                    </a>
                </div>
                <footer>
                    <div className="post-eof"></div>
                </footer>
            </div>
        )
    }
}
export default withRouter(BlogOverview)