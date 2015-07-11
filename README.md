## Voter's Guide

This is an example of a Voter's Guide for the 2016 election.


## Process

### Discovery

#### Design Research
For this example, there were two examples of what needed to be built (see _design folder.)

#### Technology Research
For any technology project my general process is to investigate the datasets, and do some research on a suite of tools. Javascript tools change constantly, and require an updates. This also usually requires setting up and updating a local development environment.

For this project, the requirements were nodejs, express and jade, to consume a public API (with no secert or keys) There were some limits on the data that needed to be rendered. Examples of data returned in _design/json_sample.

There are two API's that need to be called. There are a few ways to handle this, on the server side, or on the client side. 
* Handling on the server side has the benefit of likely faster markup generation, but if APIs take a longer time to parse and render they can be blocking and prevent the page from loading. Having a socket and injecting markup into the page would be one way to handle this. 

* Handling on the client side can give the appearance of a more immediate response, as the page is not blocked, and asynchronous data can be injected and rendered using ReactJS, or injected as rendered markup snippets by being passed through a local api that uses jade templates. 

For demonstration purposes, adding ReactJS on the front end for better control of page components.
The testing framework used here is Jasmine.


## Data Markup
Basic barely styled version of data backend.

## Wireframes
Sketch out basic architecture on paper. A more involved version would include some paper prototyping and user research.

## Design
Similar to wireframes, based on user research, design some mockups and do some design discovery. 

## Nodes
- Node version v0.12.7 is the latest.

## Recommendations
- Incoporate Swagger Docs for API endpoints.

## SASS
sass public/css/style.scss:public/css/app.css
sass --watch public/css/style.scss:public/css/app.css