MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper green lighten-2">
        <a href="#" className="brand-logo center">Garage Viewer</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
		  <li><a href="/">Course Home</a></li>
		  <li><a href="index.html">Home</a></li>
		  <li><a href="garages.html">List</a></li>
		  <li><a href="/apps/parking/garages_map.html">Map</a></li>
        </ul>
        </div>
      </nav>
    );
  }
});
