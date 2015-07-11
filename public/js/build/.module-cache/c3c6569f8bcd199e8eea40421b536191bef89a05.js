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

    var sourcePath = '/api/candidates'

    // Load Google Sheet.
    $.ajax({
      url: sourcePath,
      success: function(result) {
        if (this.isMounted()) {
          console.log(result);
          // Get sheet metadata.
          // var metadata = this.buildSheetMetadata(result);
          // this.setState(metadata);
          // this.setState({sourcePath: sourcePath});
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
    // return ( <div className="candidates" >test</div>);
    // if (this.props.collection.active === true && this.props.collection.current === true && this.state.sourcePath !== undefined) {
    //   var uniqueId = this.state.uniqueId;
    //   var headingId = "heading" + uniqueId;
    //   var anchorId = "#" + uniqueId;
    //   return (<div className="row panel-heading" role="tab" id={headingId}>
    //      <h2 className="title panel-title">
    //       <a role="button" data-toggle="collapse" data-parent="#collections" href={anchorId} aria-expanded="false" aria-controls={uniqueId}>
    //         {this.state.sheetTitle}
    //       </a>
    //      </h2>

    //       <div id={uniqueId} className="collection-item col-md-12 col-xs-12 panel-collapse collapse" role="tabpanel" aria-labelledby={headingId}>
    //         <CollectionItem sourcePath={this.state.sourcePath} sheetTitle={this.state.sheetTitle} />
    //       </div>
    //     </div>
    //     );
    // }
    // else {
    //   return ( <div className="row">
    //     <h2 className="title">{this.state.sheetTitle}</h2>
    //     <div className="extras">{this.state.author_name}, {this.state.source_updated_at}</div>
    //   </div>
    //   );
    // }
  },

});
