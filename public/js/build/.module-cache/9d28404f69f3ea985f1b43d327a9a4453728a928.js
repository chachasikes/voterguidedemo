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

  // Attributes Referernce.
  // Add attributes by adding to the voterGuide.candidates.fields array.

  // ballot_section: "Federal",
  // contest: "Congressional House of Representatives District 13 - California",
  // name: "Barbara Lee",
  // party: "Democratic",
  // yes_no: 0,
  // url: "candidate/2014/november/california/13-representative/249-barbara-lee",
  // office_lang_id: 25,
  // office_id: 56,
  // language_id: 1,
  // district_display: "District 13",
  // office_body: "House of Representatives",
  // office_name: "Congressional House of Representatives",
  // member_title: "Representative",
  // short_member_title: "Rep.",
  // office_lang_timestamp: "2015-06-16T02:10:53.000Z",
  // candidate_id: 5771,
  // person_id: 249,
  // fec_id: "H8CA09060",
  // election_date: "2014-11-04T00:00:00.000Z",
  // election_type: "G",
  // session: "",
  // party_id: 1,
  // ico: "",
  // status_code_id: 0,
  // status_date: "0000-00-00",
  // votes: 0,
  // published: 1,
  // last_funding_update: "2014-09-03T00:00:00.000Z",
  // last_funding_filed_date: "0000-00-00",
  // funding_csv_file: "",
  // unpublished_csv_file: "",
  // flags: "",
  // source: "",
  // import_batch_id: "",
  // candidate_timestamp: "2014-09-18T19:27:18.000Z",
  // first_name: "Barbara",
  // middle_name: "",
  // last_name: "Lee",
  // name_suffix: "",
  // name_prefix: "",
  // nick_name: "",
  // original_name: "Barbara Lee",
  // display_name: "Barbara Lee",
  // gender: "F",
  // has_picture: 1,
  // bio: "",
  // import_flag: "4334",
  // person_timestamp: "2014-02-27T20:20:38.000Z",
  // party_abbrev: "DEM",
  // party_name: "Democratic",
  // party_type: "D",
  // state: "CA",
  // state_name: "California"

  // Render each item.
  eachItem: function(item, i) {
    if (item !== null) {
      return (React.createElement("div", {className: "set-item"}, 
        React.createElement("div", {className: "name"}, React.createElement("a", {href: item.url}, item.name), " ", React.createElement("span", {className: "party"}, item.party)), 

        React.createElement("hr", null), 
        React.createElement("div", {className: "ballot-section"}, item.ballot_section), 
        React.createElement("div", {className: "contest"}, item.office_name), 
        React.createElement("div", {className: "district"}, item.district), 
        React.createElement("div", {className: "vote"}, this.checkBox(item.yes_no))
      ));
    }
    else {
      return;
    }
  },

  checkBox: function(value) {
    if(value === 1) {
      return (React.createElement("div", null))
    }
    else {
      return
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
