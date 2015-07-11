// Process metadata about a collection and render display of a collection. 
// If collection is set to active and current, trigger Collection Item to build and render.
var Candidates = React.createClass({
  displayName: "Candidates",
  
  getDefaultProps: function() {
    return {};
  },

  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {

    var sourcePath = window.location.href + 'api/candidates'

    $.ajax({
      url: sourcePath,
      error: function(error) {
        console.log(error);
      },
      success: function(result) {
          console.log(result);
        if (this.isMounted()) {
          console.log(result);
          // var metadata = this.buildMetadata(result);
          // this.setState(metadata);
          // this.forceUpdate();
        }
      }.bind(this),
      dataType: 'jsonp',
    });
  },

  render: function() {
    return this.renderDisplay();
  },

  renderDisplay: function() {
    return ( React.createElement("div", {className: "measures"}, 
        React.createElement("h2", {className: "title"}, "test")
      ));
  },

});
