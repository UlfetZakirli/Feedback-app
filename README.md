# React Feedback App
#### These tools were used in this project

* Components
* JSX
* Props (propTypes, defaultprops, etc)
* State (Component & App Level)
* Styling
* Handling Events
* Custom Component
* List & Keys
* Concurrently package
* Forms
* Context API
* HTTP Requests

#### Q: Why are we spreading data and item?
Before implementing json-server, when we updated feedback we didn't have feedback ID in the updItem so spreading both data and item merges the two objects so we have all the properties. After changing the code to use json-server we can instead use the data response from json-server which will have an ID. So spreading both data and item are no longer necessary.

#### Q: Why does the default rating of 10 not show?
Initially feedbackEdit.item.rating is undefined, so when RatingSelect first mounts we set local state in our useEffect to undefined, which is why the default rating of 10 does not show. However there is no need for local state, useEffect or consuming context in this component as it's just a duplicate of parent state. Relies on selected being passed as prop


### Usage
#### Install dependencies

```bash
npm install
```

#### Run
```bash
npm run dev
```

This will run JSON-server on port :5000 and React on port :3000

