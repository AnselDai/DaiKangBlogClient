import React from 'react';
import {withRouter} from 'react-router-dom';
import '../css/Nav.css';
import '../css/Banner.css';
import classname from 'classname'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.blogcount)
        this.state = {
            blogcount: this.props.blogcount
        }
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
    GotoMainPage() {
        console.log('hello')
        this.props.history.push({
            pathname: '/'
        })
    }
    // 关于我们
    GotoAboutUs() {
        console.log('hello')
        this.props.history.push({
            pathname: '/aboutus'
        })
    }
    componentWillReceiveProps(props, newprops) {
        this.setState({
            blogcount: props.blogcount
        })
    }
    render() {
        return (
            <div className="nav-panel row">
                <div className="p_menu panel-group">
                    <div className="menu-panel panel">
                        <h4 className="inner-panel panel-heading">
                            <a className="menu-title">
                                Dai & Kang
                            </a>
                        </h4>
                    </div>
                    <div>
                        <ul className="list-group">
                            <li className={this.main_nav_class}>
                                <a className="menu-link" onClick={(e) => this.GotoMainPage(e)}>
                                    <span className="glyphicon glyphicon-home"></span>&nbsp;&nbsp;首页
                                </a>
                            </li>
                            <li className={this.aboutus_nav_class}>
                                <a className="menu-link" onClick={(e) => this.GotoAboutUs(e)}>
                                <span className="glyphicon glyphicon-book"></span>&nbsp;&nbsp;关于我们
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="info-panel col-md-12 col-lg-12 hidden-xs hidden-sm">
                    <div className="site-info col-md-12 col-lg-12">
                        <div className="row">
                            <div className="have-border info col-md-4 col-lg-4">
                                <a>
                                <span className="info-num">{this.state.blogcount}</span>
                                    <span className="info-name">日志</span>
                                </a> 
                            </div>
                            <div className="info have-border col-md-4 col-lg-4">
                                <a>
                                    <span className="info-num">2</span>
                                    <span className="info-name">分类</span>
                                </a>
                            </div>
                            <div className="info col-md-4 col-lg-4">
                                <a>
                                    <span className="info-num">1</span>
                                    <span className="info-name">标签</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="music">
                        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="200" height="86" src="//music.163.com/outchain/player?type=2&id=2872362&auto=1&height=66"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Nav)