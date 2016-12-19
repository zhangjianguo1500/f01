import React, { Component,PropTypes } from 'react';
import './EmailMenu.scss'
import './E-Global.scss'
import './EmailCont.scss'
import Select, { Option } from 'rc-select'
import '../../../components/Select/assets/index.scss'
import '../../../styles/font.scss'

import CenterEmail from './EmailMenu'
import EmailBmain from './EmailBmain'

const EmailBox = React.createClass({

    render(){
        return (
            <div className ='EmailCont'>
                <span className ='col1'>
                    <CenterEmail />
                </span>
                <span className ='col2'>
                    <EmailBmain />
                </span>
            </div>
        )
    }
})

export default EmailBox;
