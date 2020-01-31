import React from 'react'
import '../css/Banner.css'
import {withRouter} from 'react-router-dom';
import config from '../config'
import classname from 'classname'

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.GotoMainPage = this.GotoMainPage.bind(this);
        this.GotoAboutUs = this.GotoAboutUs.bind(this);
        this.base_url = config.base_url;
        this.main_nav_class = classname({
            'nav-item-active': this.props.active === 'mainPage',
            'nav-item': true,
            'list-group-item': true
        })
        this.aboutus_nav_class = classname({
            'nav-item-active': this.props.active === 'aboutusPage',
            'nav-item': true,
            'list-group-item': true
        })
    }
    // 首页
    GotoMainPage(e) {
        e.preventDefault();
        console.log('hello')
        console.log(this)
        this.props.history.push('/')
    }
    // 关于我们
    GotoAboutUs(e) {
        e.preventDefault();
        this.props.history.push('/aboutus')
    }
    render() {
        return (
            <div className="banner-row row">
                <div id="p_menu" className="p_menu panel-group col-xs-12 col-sm-12 visible-xs visible-sm hidden-md hidden-lg" data-toggle="dropdown">
                    <div className="menu-panel panel">
                        <h4 className="inner-panel panel-heading">
                            <a className="menu-btn" data-toggle="collapse" data-parent="#p_menu" href="#menu">
                                <span className="menu-item glyphicon glyphicon-align-justify"></span>
                            </a>
                            <a className="menu-title" href="#">Dai & Kang</a>
                        </h4>
                    </div>
                    <div id="menu" className="panel-collapse collapse">
                        <ul className="list-group">
                            <li className={this.main_nav_class}>
                                <a className="menu-link" onClick={this.GotoMainPage}>
                                    <span className="glyphicon glyphicon-home"></span>&nbsp;&nbsp;首页
                                </a>
                            </li>
                            <li className={this.aboutus_nav_class}>
                                <a className="menu-link" onClick={this.GotoAboutUs}>
                                    <span className="glyphicon glyphicon-book"></span>&nbsp;&nbsp;关于我们
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Banner)