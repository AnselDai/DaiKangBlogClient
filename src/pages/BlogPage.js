import React from 'react'
import {withRouter} from 'react-router-dom'
import '../css/Page.css'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Blog from '../components/Blog'
import config from '../config'

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.server_url = config.server_url;
        this.state = {
            blogcount: 0
        }
    }
    GetBlogCount() {
        fetch(this.server_url + '/blogcount').then(res => res.text()).then(res => {
            console.log(res);
            var data = JSON.parse(res);

            this.setState({
                blogcount: data.blogcount
            })
        })
    }
    componentWillMount() {
        this.GetBlogCount();
    }
    render() {
        return (
            <div className="outsider-div">
                <div id="banner" className="banner container">
                    <Banner active="mainPage"/>
                </div>
                <div className="banner-div hidden-xs hidden-sm visible-md visible-lg"></div>
                <div className="page-header hidden-md hidden-lg"></div>
                <div id="root" className="root container">
                    <div className="page row">
                        <div className="row">
                            <div id="nav" className="leftPage hidden-xs hidden-sm col-md-offset-1 col-md-3 col-lg-offset-1 col-lg-3">
                                <Nav blogcount={this.state.blogcount} active="mainPage"/>
                            </div>
                            <div id="blog" className="rightPage col-xs-12 col-sm-12 col-md-7 col-lg-7">
                                <Blog />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(BlogPage);