import React from "react";

import { Route, withRouter } from "react-router-dom";

class PageTwo extends React.Component<{
  match: { params: any; isExact: boolean; path: string; url: string };
  location: any;
  history: any;
}> {
  componentDidMount() {
    // NOTE: component state is not re-mounted unless main state is reset
    console.log("Mounted!");
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <div>I am Page Two</div>
        <Route path={`${match.path}/alt`}>
          <div>
            <label>Input address only displays</label>
            <input id="address" />
          </div>
        </Route>
      </div>
    );
  }
}

export default withRouter(PageTwo);
