import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import { setTranslations } from '../../actions/loc';
import SwitchLanguage from '../../components/loc/SwitchLanguage';
import AwesomeComponent from '../../components/loc/AwesomeComponent';


const mapStateToProps=(state)=>{  
    //let currentLang window.localStorage.get('currentLang')??window.localStorage.get('currentLang'):'cn'
    const {languages}=state;
    console.log(languages);     
    return {currentLang:languages.currentLang};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: {
            setLocale: (lang) => {
                debugger;
                console.log(lang);
                return dispatch(setTranslations(lang));
            }
        }
    }
}

const divStyle={
    color:'white',
    padding:'8px',
}

/*@connect(null, mapDispatchToProps)*/
export class SwitchContainer extends Component {

    render(){
    const { actions } = this.props;
    return ( 
        <div style={divStyle}>
        <SwitchLanguage onLanguageChange = { actions.setLocale } currentLang={this.props.currentLang}></SwitchLanguage>
        <br/>
        <br/>
        <AwesomeComponent />
        </div>
    );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SwitchContainer);