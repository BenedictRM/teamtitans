MyComponents.GarageSpaces = React.createClass({
  render: function() { 
    return (
      <div className="card">
        <div className="card-content">
          Open Space: {this.props.open} <div></div>
		  Total Space: {this.props.total}
        </div>
      </div>
    );
  }
});