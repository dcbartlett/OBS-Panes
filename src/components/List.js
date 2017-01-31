import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import * as components from './';
import styles from './List.css';

class List extends Component {
  constructor() {
    super();
    this.state = {
      componentList: getComponentList()
    }
  }
  render() {
    var list = [];
    this.state.componentList.forEach(function(item){
      list.push(<li key={item.name}>{item.name}</li>);
    });
    return (
      <div styleName="List">
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default CSSModules(List, styles);;

function getComponentList(){
  let componentList = [];
  Object.keys(components).forEach(function(componentName){
    if (componentName !== 'List') {
      componentList.push({
        name: componentName
      })
    }
  })
  console.log(componentList);
  return componentList;
};
