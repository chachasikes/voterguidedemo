// Process metadata about a collection and render display of a collection. 
// If collection is set to active and current, trigger Collection Item to build and render.
var Measures = React.createClass({
  displayName: "Measures",
  
  getDefaultProps: function() {
    return {};
  },

  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {

    var sourcePath = '/api/measures'

    $.ajax({
      url: sourcePath,
      success: function(result) {
        if (this.isMounted()) {
          console.log(result);
          var metadata = this.buildMetadata(result);
          this.setState(metadata);
          this.forceUpdate();
        }
      }.bind(this),
      dataType: 'jsonp',
    });
  },

  buildMetaData: function(result) {
    return result;
  },

  render: function() {
    return this.renderDisplay();
  },

  renderDisplay: function() {
    return ( React.createElement("div", {className: "measures"}, 
        React.createElement("h2", {className: "title"}, this)
      ));

  },

});
