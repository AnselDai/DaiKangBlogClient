import React from 'react'
import {withRouter} from 'react-router-dom'
import '../css/Page.css'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import BlogOverview from '../components/BlogOverview'
import config from '../config'

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {overview_data: []}
        this.server_url = config.server_url;
    }
    GetOverviewData() {
        fetch(this.server_url + "/")
        .then(res => {
            return res.text();
        })
        .then(res => {
            let data = JSON.parse(res);
            console.log(data);
            this.setState({
                blogcount: data.blogcount,
                overview_data: data.overviews
            })
        })
    }
    componentDidMount() {
        this.GetOverviewData();
    }
    render() {
        return (
            <div className="outside-div">
                <div id="banner" className="banner">
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
                            <div id="overview" className="rightPage col-xs-12 col-sm-12 col-md-7 col-lg-7">
                                {this.state.overview_data.map(overview => <BlogOverview key={overview.id} id={overview.id} title={overview.title} postTime={overview.postTime} tags={overview.tags} description={overview.description} headImg={overview.headImg} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(MainPage);