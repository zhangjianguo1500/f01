import React, { Component } from 'react'

import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
import { navAddTab } from '../NavigateTabs/modules/tabs'

import NavigateTabs from '../NavigateTabs/containers/Container'
import './Header.scss'
import LogImage from './assets/logo.png'

const mapDispatchToProps = (dispatch) => {

  return {
    actions: {
      addTabs: function (tabs) {
        if (tabs == null) {
          let random = Math.random() * 1000

          tabs = [{name: 'Hello' + random,component: 'Hello' + random}]
        }
        return dispatch(navAddTab(tabs))
      }
    }
  }
}
const mapStateToProps = (state) => ({
  tabs: state.navigate.tabs
})
export class Header extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    let {actions} = this.props
    let tabs = [{
      name: <i className="ic-i-home"></i>,
      component: '首页'
    }, {
      name: '客户',
      component: '客户'
    }, {
      name: '客户详情',
      component: '客户详情'
    }]
    actions.addTabs(tabs)
  }
  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
  }
  render () {
    let {tabs, actions} = this.props
    return (
      <div className='head-bg'>
        <div>
          <Link className='logo fl'>
          <img src={LogImage} alt='logo' />
          </Link>
        </div>
        <div className='nav'>
          <NavigateTabs key={'nav'} tabs={tabs} />
          <input
            type='button'
            value='添加'
            className='fl'
            onClick={actions.addTabs.bind(null, null)} />
        </div>
        <div className="user-link">
            <ul>
                <li><Link id="menu1"><i className="ic-i-menu"></i></Link></li>
                <li><Link id="menu2"><i className="ic-i-search"></i></Link></li>
                <li><Link id="menu3" ><i className="ic-i-add"></i></Link></li>
                <li><Link id="menu4"><i className="ic-i-message"></i></Link><sub style={{color:'#fff'}}>{'6'}</sub></li>
                <li><Link id="menu5"><i className="ic-i-email"></i> </Link><sub>10</sub></li>
                <li><Link id="menu6"><i className="ic-i-user"></i> </Link></li>
                <li><Link href=""><i className="ic-i-help"></i> </Link></li>
            </ul>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
