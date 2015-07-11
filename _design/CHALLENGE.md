The coding challenge will consist of 3 parts.

 1. Create a NodeJs / Express App
 2. Consume the listed API's
 3. Create a view to display the information
 4. Create a test in your preferred framework.
1. Create a NodeJs/Express App.
 Use the latest version of node https://nodejs.org/ (0.12.4) to create a base node app. After that, add the Express framework to your app. Once you are done you should see this. http://216.151.17.6:3000/

2. Consume the listed API's
One of our biggest projects this year leading up to the 16' elections is our national online voter's guide. 
http://votersedge.org/ . If you type in your address you will get a list of candidates and measures.

Here is another example of an online voter's guide. http://whosontheballot.org/ use this address(100 West 52nd Street, Manhattan)

Your task will be create a mock voter's guide with the two endpoints listed. The idea is someone has already typed in their address and all you are displaying is the results. Have your app consume these endpoints so that you can display them in part 3 of this challenge.

Candidates
http://216.151.17.6:3000/api/votersedge/candidates/all

Measures
http://216.151.17.6:3000/api/votersedge/measures/all


3. Create a view to display the data

Create a view that takes the consumed api endpoints and display them in a grid.
 1. Only display 5 candidates and 5 measures.
 2. Use Jade as the templating engine.
 3. It doesn't have to be pretty, but we are interested to see your creativity given this type of data.
 4. You only need to use the first 5 properties of the JSON object for a given measure or candidate, but you can use more if you want.
 5. Be creative :)
Example:
 1. ballot_section: "State",
 2. contest: "California Ballot Measures",
 3. identifier: "Prop. 1",
 4. topic: "Water Bond",
 5. url: "california/ballot-measures/2014/november/prop-1",

4.  Create a test in your preferred framework
 1. Test to ensure that the measure API is returning 14 results.
 2. Test to ensure that the candidate API is returning 51 results.


Please email me any questions you have.

Thanks.
