import React, { Component,PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory ,Link} from 'react-router';
class PanelContent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(this.props.id, 'constructor');
  }

  componentWillReceiveProps() {
    console.log(this.props.id, 'componentWillReceiveProps');
  }

  render() {
    const count = [1, 1, 1, 1,1,1,1];// new Array(4) skip forEach ....
    const els = count.map((c, i) => {
      return <Link className="box_space" key ={i}>
                <label>总理点赞的赣南脐fdgdfg橙已被抢购一空</label>
                <span>9/29</span>
              </Link>;
    });
    return (<div className = 'box i-news'>
          <div className ='news-list-box'>
            {els}
          </div>
          <div className ='more'><Link>更多<i className="ic-i-arrow-more"></i></Link></div>
    </div>);
  }
}
PanelContent.propTypes = {
  id: React.PropTypes.number,
};

export default PanelContent;
