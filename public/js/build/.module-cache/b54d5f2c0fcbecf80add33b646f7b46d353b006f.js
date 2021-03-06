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
        console.log(data);
        // if (this.isMounted()) {
        //   var result = JSON.parse(data.responseText);
        //   console.log(result);
        //   this.setState({items: result});
        //   console.log(this.state);
        //   this.forceUpdate();
        // }
      }.bind(this),
    });
  },

  eachItem: function(item, i) {
    if (c !== null) {
      return (React.createElement("div", {className: "set-item"}, 
          item
      ));
    }
    else {
      return;
    }
  },

  render: function() {
    return this.renderDisplay();
  },

  renderDisplay: function() {
    return ( React.createElement("div", {className: "set"}, 
        this.state.items.map(this.eachItem)
      ));
  },

});
