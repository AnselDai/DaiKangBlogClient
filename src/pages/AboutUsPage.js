import React from 'react'
import {withRouter} from 'react-router-dom';
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import config from '../config'
import ReactMarkdown from 'react-markdown'
import '../css/AboutUs.css'
import BlogTitle from '../components/BlogTitle'
import '../css/Page.css'

class AboutUsPage extends React.Component {
    constructor(props) {
        super(props)
        this.server_url = config.server_url;
        this.state = {
            blogcount: 0,
            content: ""
        }
    }
    GetData() {
        fetch(this.server_url + '/aboutus').then(res => res.text()).then(data => {
            this.setState({
                blogcount: JSON.parse(data).blogcount,
                content: JSON.parse(data).content
            })
        })
    }
    componentDidMount() {
        this.GetData();
    }
    render() {
        return (
            <div className="outside-div">
                <div id="banner" className="banner">
                    <Banner active="aboutusPage"/>
                </div>
                <div className="banner-div hidden-xs hidden-sm visible-md visible-lg"></div>
                <div className="page-header hidden-md hidden-lg"></div>
                <div id="root" className="root container">
                    <div className="page row">
                        <div className="row">
                            <div id="nav" className="leftPage hidden-xs hidden-sm col-md-offset-1 col-md-3 col-lg-offset-1 col-lg-3">
                                <Nav blogcount={this.state.blogcount} active="aboutusPage"/>
                            </div>
                            <div id="about us" className="rightPage col-xs-12 col-sm-12 col-md-7 col-lg-7">
                                <BlogTitle title="这是我们的小窝" needMeta={false} />
                                <ReactMarkdown
                                    className="about-us"
                                    source={this.state.content}
                                    escapeHtml={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(AboutUsPage);