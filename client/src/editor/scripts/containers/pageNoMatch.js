import React, { Component } from 'react';
import { Link } from 'react-router';

import Breadcrumbs from './../../../_shared/scripts/components/uikit-components/breadcrumbs';


export default class NoMatch extends Component {

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="container">

        <div className="page__header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-8">

                <Breadcrumbs paths={[
                  {path:'', name:'Manage Dashboards'}
                ]} />

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="page__body">
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <p>Sorry, we couldn't find that Route. <Link to="/">Go to Manage Dashboards</Link></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
