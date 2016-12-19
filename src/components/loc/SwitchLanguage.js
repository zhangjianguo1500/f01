//import languages from '../../langs/languages';

import React,{Component,PropTypes} from 'react';

export default class SwitchLanguage extends Component{
	constructor(props){
		super(props);		
	}
	render(){
		return (<div>
			<select onChange={(e)=>this.props.onLanguageChange(e.target.value)} value={this.props.currentLang}>
				<option value='cn'>中文-简体</option>
				<option value='ct'>中文-繁體</option>
				<option value='en'>English</option>
			</select>
		</div>);
	}
 }

SwitchLanguage.PropTypes={
	onLanguageChange:PropTypes.func.isRequired,
	currentLang		:PropTypes.string.isRequired,
}
