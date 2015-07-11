//./node_modules/react-tools/bin/jsx public/js/src/ public/js/build/

// Build components.
React.render(
  <Candidates />,
  document.getElementById('candidates')
);

React.render(
  <Measures />,
  document.getElementById('measures')
);
