import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './AboutView.scss'
import '../../../styles/font.scss'

export const AboutView = () => (
  <div>
    <h4>About Web!</h4>
    <ul>
    	<li>
    		<a href = "#">添加</a>
    	</li>
    	<li>
    		<a href = "#">添加1</a>
    	</li>
    	
    	
    </ul>
    <img
      alt='This is a about web site, because Redux!'
      className='duck'
      src={DuckImage} />

      <div>
        <i className='fi-view'></i>
      </div>
  </div>
)

export default AboutView
