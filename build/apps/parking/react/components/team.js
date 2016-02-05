MyComponents.Team = React.createClass({
  render: function() {

    // inspect this.props.team to make sure we load the data correctly
    console.log('members', this.props.members)

    // For each 'member' in 'team', create a <li> component to display
    // information about this member.

    var members = this.props.members.map(function(member, i){
      return <li key={i} className="collection-item">
              <img src="../person.png" width="20" high="20"></img> {member.name}&nbsp;&nbsp;>>
              <a className="white" href={member.github}>Github</a>
            </li>
    })

    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">Team Members</span>
          <div className="collection">
            {members}
          </div>
        </div>
      </div>
	  
    );
  }
});