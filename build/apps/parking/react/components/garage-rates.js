MyComponents.Rate = React.createClass({
 render: function() {

   var keyMap = {'BEG': 'Beginning', 'END': 'End', 'RATE': 'Rate', 'RQ': 'Type of Rate', 'RR': 'Other Info', 'DESC': 'Description', }
   var vals = [];
   for(var key in this.props.rate) {
     vals.push(<span key={key}>{keyMap[key]}: {this.props.rate[key]}<br /></span>);
   }

   return (

       <span className="card-content">
        <br /> { vals }----------------------------------------------------------------------------------<br />
       </span>
   );
 }
});


MyComponents.GarageRates = React.createClass({
  render: function() {

    var rates = this.props.rates.map(function(r,i){
      return <MyComponents.Rate rate={r} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
			<img src="coin_money.png" width="20" high="20"></img>&nbsp;
			<span className="blue-text text-darken-2"><font size="18px">Garage Open Hour:</font></span>

			{ rates }

        </div>
      </div>
    );
  }
});