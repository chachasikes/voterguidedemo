// Process metadata about a collection and render display of a collection. 
// If collection is set to active and current, trigger Collection Item to build and render.
var Measures = React.createClass({
  displayName: "Measures",
  
  getDefaultProps: function() {
    return {};
  },

  getInitialState: function() {
    return {
      items: []
    };
  },
  // Load data from local API.
  componentDidMount: function() {

    var sourcePath = 'api/measures'

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

  // Attributes Referernce.
  // Add attributes by adding to the voterGuide.meaures.fields array.
  
  // ballot_section: "State",
  // contest: "California Ballot Measures",
  // identifier: "Prop. 1",
  // topic: "Water Bond",
  // url: "california/ballot-measures/2014/november/prop-1",
  // measure_id: 293,
  // office_level: "S",
  // state: "CA",
  // county: "",
  // city: "",
  // special_district: "",
  // election_date: "2014-11-04T00:00:00.000Z",
  // election_type: "G",
  // measure_identifier: "Prop. 1",
  // last_funding_update: "2014-10-17T00:00:00.000Z",
  // last_funding_filed_date: "0000-00-00",
  // funding_csv_file: "california-2014-11-prop-1-funding_20141017.csv",
  // unpublished_csv_file: "",
  // status: "",
  // votes_for: null,
  // votes_against: null,
  // source: "",
  // import_batch_id: "",
  // office_notes: "",
  // weight: 0,
  // measures_timestamp: "2015-06-16T02:09:05.000Z",
  // measure_lang_id: 83,
  // language_id: 1,
  // title: "Authorizes $7.12 billion in general obligation bonds for various water supply infrastructure projects.",
  // summary: "<p>Authorizes $7.12 billion in general obligation bonds for state water supply infrastructure projects, such as surface and groundwater storage; ecosystem and watershed protection and restoration; drinking water protection; water supply management; water recycling and advanced water treatment technology; and flood control.</p>",
  // fulltext_url: "http://www.sos.ca.gov/elections/ballot-measures/pdf/ab-1471-chapter-188.pdf",
  // proposition_type: "Legislative Bond Act - Majority Approval Required",
  // identifier_url: "prop-1",
  // published: 1,
  // measure_lang_timestamp: "2015-06-16T02:09:05.000Z",
  // state_name: "California"

  // Render each item.
  eachItem: function(item, i) {
    if (item !== null) {
      return (React.createElement("div", {className: "set-item"}, 

        React.createElement("div", {className: "ballot-section"}, item.ballot_section), 
        React.createElement("div", {className: "name"}, React.createElement("a", {href: item.url}, item.identifier)), 
        React.createElement("div", {className: "contest"}, item.office_name), 
        React.createElement("div", {className: "district"}, item.district), 
        React.createElement("div", {className: "topic"}, item.topic), 
        React.createElement("div", {className: "type"}, item.proposition_type), 
        React.createElement("div", {className: "description"}, " ", React.createElement("div", {dangerouslySetInnerHTML: item.summary}), " ", item.read_more)



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
