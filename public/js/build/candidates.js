// Process metadata about a collection and render display of a collection. 
// If collection is set to active and current, trigger Collection Item to build and render.
var Candidates = React.createClass({
  displayName: "Candidates",
  
  getDefaultProps: function() {
    return {};
  },
  // Establish initial state.
  getInitialState: function() {
    return {
      items: []
    };
  },

  // Load data from local API.
  componentDidMount: function() {

    var sourcePath = 'api/candidates'

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

  // Render each item.
  eachItem: function(item, i) {
    if (item !== null) {
      return (React.createElement("div", {className: "set-item"}, 
      React.createElement("div", {className: "ballot-section"}, item.ballot_section), 
      React.createElement("div", {className: "contest"}, item.contest), 
      React.createElement("div", {className: "name"}, React.createElement("a", {href: item.url}, item.name)), 
      React.createElement("div", {className: "party"}, item.party), 
      React.createElement("div", {className: "vote"}, item.yes_no)
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
