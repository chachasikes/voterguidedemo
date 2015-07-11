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
    if (item !== null) {
      return (React.createElement("div", {className: "set-item"}, 
      React.createElement("h1", null, item.ballot_section), 
      React.createElement("h2", null, item.contest), 
      React.createElement("div", {className: "name"}, item.name), 
      React.createElement("div", {className: "name"}, item.party), 
      React.createElement("div", {className: "name"}, item.yes_no), 
      React.createElement("div", {className: "name"}, React.createElement("img", {src: item.url}))
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
