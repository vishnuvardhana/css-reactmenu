
import styleSheetData from './css3ReactMenu';
var React = require('react');



var defaultMenuItemWidth = '9%';
var defaultMenuHeight = '150px';
var defaultMenuClasses = ['hm','fb','gp','tw','cl'];
var divStyle = {
  width:defaultMenuItemWidth,
  padding:"5px"
};


var Css3Reactmenu = React.createClass({
	addMenu:function(){
		 var menu  = this.state.menu;
		 if(menu.length===10){
			 alert("Can add only 10 menu items");
			 return;
		 }
		 menu.push({
			 "name": "Menu Item "+(menu.length+1),

		 })
			this.setState({
				menu:menu
			})
	},
	removeMenu:function(){
		 var menu  = this.state.menu;
		 if(menu.length===1){
			 alert("Minimum one menu item must be there");
			 return;
		 }
		 menu.pop();

			this.setState({
				menu:menu
			})
	},
	getInitialState: function() {

	 return {menu: !this.props.menuObjs?[{"name":"Menu Item 1"}]:this.props.menuObjs};
 },

	render: function() {

		var menuObjs = this.state.menu;

		var demobutton = (this.props.isDemo ? <div><button  className="css3reactmenuButton" onClick={this.addMenu}>Add One More Menu</button> <button  className="css3reactmenuButton" onClick={this.removeMenu}>Remove Menu</button></div>:null)


		if(menuObjs&&menuObjs.length>10){
			menuObjs.length=10;
		}

		return (<div className="css3reactmenu">

			<ul className="nav">
				{menuObjs.map(function(menuObj,index){return <li className={defaultMenuClasses[index%5]} key={index} style={divStyle}> <img className="icon"  alt=""/> <span>{menuObj.name}</span> </li>})}
			</ul>
			<div>
				{demobutton}

			</div>
		</div>);
	}
});

export default Css3Reactmenu;
