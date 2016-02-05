MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper green lighten-2">
        <a href="#" className="brand-logo center">Garage Viewer</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
		  <li><a href="/">Course Home</a></li>
        </ul>
        </div>
      </nav>
    );
  }
});
