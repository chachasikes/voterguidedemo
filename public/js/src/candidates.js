// Process metadata about a collection and render display of a collection. 
// If collection is set to active and current, trigger Collection Item to build and render.
var Candidates = React.createClass({
  displayName: "Candidates",
  
  getDefaultProps: function() {
    return {};
  },

  getInitialState: function() {
    return {
      items: []
    };
  },

  componentDidMount: function() {

    var sourcePath = 'api/candidates'

    // $.get(sourcePath, function(result) {
    //   console.log(result);
    //   // if (this.isMounted()) {
    //   //   this.setState({
    //   //     username: lastGist.owner.login,
    //   //     lastGistUrl: lastGist.html_url
    //   //   });
    //   // }
    // }.bind(this));


    $.ajax({
      url: sourcePath,
      error: function(error) {
        console.log(error);
      },
      success: function(data) {
        if (this.isMounted()) {
          this.setState({items: data});
          console.log(this.state);
          this.forceUpdate();
        }
      }.bind(this),
    });
  },

  eachItem: function(item, i) {
    console.log(item);
    if (item !== null) {
      return (<div className="set-item">
      <h1>{item.ballot_section}</h1>
      <h2>{item.contest}</h2>
      <div className="name">{item.name}</div>
      <div className="party">{item.party}</div>
      <div className="vote">{item.yes_no}</div>
      <div className="image"><img src={"http://216.151.17.6:3000" + item.url} /></div>
      </div>);
    }
    else {
      return;
    }
  },

  render: function() {
    return this.renderDisplay();
  },

  renderDisplay: function() {
    return ( <div className="set" >
        {this.state.items.map(this.eachItem)}
      </div>);
  },

});
