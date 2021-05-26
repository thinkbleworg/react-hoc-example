//Higher order functions
// Higher-order functions in JavaScript take some functions as arguments and return another function. They enable us to abstract over actions, not just values,
// Examples are array.map, .filter, .forEach, .reduce
/*
function examples(args) {
  return function () {
    //process args
  };
}

let fn = examples(() => {});

fn();
*/

//Higher Order Components
// Components take one or more components as arguments, and return a new upgraded component. Sounds familiar, right? They are similar to higher-order functions, which take some functions as an argument and produce a new function.
// We don’t modify or mutate components. We create new ones.
// A HOC is used to compose components for code reuse.
// A HOC is a pure function. It has no side effects, returning only a new component.
// Examples
// In react-redux -->	connect(mapStateToProps, mapDispatchToProps)(UserPage)
// In react-router -->	withRouter(UserPage)
// In material-ui -->	withStyles(styles)(UserPage)
//
/***
 * Structure:
 * It is a component.
 * It takes another component as an argument.
 * Then, it returns a new component.
 * The component it returns can render the original component that was passed to it.
 */
/*
import React from "react";

const SomeComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }
  return HOC;
};
*/
import React, { useEffect, useState } from "react";
import "./styles.css";
import List from "./List.js";
import withLoader from "./Loader.js";

const ListWithLoading = withLoader(List);

const repoArr = [
  {
    id: 1,
    full_name: "React"
  },
  {
    id: 2,
    full_name: "Javascript"
  }
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setRepos(repoArr);
    }, 5000);
  });

  return <ListWithLoading isLoading={isLoading} repos={repos} />;
}
