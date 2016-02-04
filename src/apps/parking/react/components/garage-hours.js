MyComponents.Hour = React.createClass({
 render: function() {

   var keyMap = {'BEG': 'Open ', 'END': '-', 'FROM': '   ', 'TO': ' through ', }
   var vals = [];
   for(var key in this.props.hour) {
     vals.push(<span key={key}>{keyMap[key]}{this.props.hour[key]}</span>);
   }

   return (

         <p>
         { vals }
         </p>

   );
 }
});


MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
			<i className="small material-icons">schedule</i>&nbsp;<span className="blue-text text-darken-2"><font size="18px">Garage Open Hour:</font></span>
          { hours }

        </div>
      </div>
    );
  }
});