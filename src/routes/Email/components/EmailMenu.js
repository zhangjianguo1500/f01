import React, { Component,PropTypes } from 'react';
import './EmailMenu.scss'
import './E-Global.scss'
import Select, { Option } from 'rc-select'
import '../../../components/Select/assets/index.scss'
import '../../../styles/font.scss'

const EmailBox = React.createClass({

    render(){
        return (
            <div className="EmailMenu">
                <div className="NameHead">
                    <h2>林海<span>销售经理</span></h2>
                    <div className="EmailName">sales02@china...</div>
                </div>
                <ul className="Operating">
                    <li><i className="ic-i-menu"></i>写邮件</li>
                    <li><i className="ic-i-menu"></i>收邮件</li>
                    <li><i className="ic-i-menu"></i>收件箱</li>
                    <li><i className="ic-i-menu"></i>已发送</li>
                    <li><i className="ic-i-menu"></i>已删除</li>
                    <li><i className="ic-i-menu"></i>审核箱</li>
                    <li><i className="ic-i-menu"></i>垃圾箱</li>
                    <li><i className="ic-i-menu"></i>草稿箱</li>
                </ul>
            </div>
        )
    }
})

export default EmailBox;
