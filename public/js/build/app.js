//./node_modules/react-tools/bin/jsx public/js/src/ public/js/build/

// Build components.
React.render(
  React.createElement(Candidates, null),
  document.getElementById('candidates')
);

React.render(
  React.createElement(Measures, null),
  document.getElementById('measures')
);
