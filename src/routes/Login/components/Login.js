import React ,{Component,PropTypes} from 'react'
import {createForm} from 'rc-form';

export class Login extends Component{
	constructor(props) {
		super(props);		
	}
	componentDidMount(){

	}
	submit = () => {
		this.props.form.validateFields((error, value) => {
			if(error){
				console.log(error, value);
			}
      	let {loginSign}=this.props;
      	console.log(typeof loginSign);
      	loginSign(value.name,value.password);
    });
  	}
  	reset = () => {
  		//this.setState({name:'',password:''});
  		this.props.loginReset();
  	}
	render(){		
		let {loginSign,loginReset} = this.props;
		const{ getFieldProps } = this.props.form;

	return (
			<div>
		       <div style={{color:'red'}}>
		        Name: <input {...getFieldProps('name')}/>
		      </div>
		    
		      <div style={{color:'red'}}>
		        Password: <input {...getFieldProps('password')} type='password'/>
		      </div>
		      <div style={{color:'red'}}>
		        <button onClick={loginSign.bind(null,this)}>submit</button>
		        <button onClick={this.reset}>Reset</button>
		      </div>
		    </div>
			);
	}
}
export default createForm({mapPropsToFields(props) {
    console.log('mapPropsToFields', props);
    return {
      name:{value:props.name},
      password:{value:props.password}
    };
  },
  onFieldsChange(props, fields) {
    console.log('onFieldsChange', fields);
    let{currentInfo}=props;
    currentInfo(fields);
  }
})(Login);
