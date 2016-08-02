var React = require('react');
var ReactDOM = require('react-dom');
var Css3Reactmenu = require('css3-reactmenu');

var App = React.createClass({
	render () {
		return (
			<div>
				<Css3Reactmenu isDemo={true}/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
