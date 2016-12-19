import React, { Component } from 'react';


class ErrorRoot extends Component {

  render() {
    return (
      <div className="app-scene">
        <div className="app-page-parent">

          <div className="page page-dashboard">

            <div className="page__header">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-lg-8">
                    <h1 className="h3">Sorry. we're having technical issues right now.</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="page__body">
                <div className="row">
                  <div className="col-xs-12 col-lg-8">
                    <p>Please check back soon or contact your Dashboard Administrator at <a href="mailto:performancedashboard@digital.gov.au" className="UIK-link" rel="external">performancedashboard@digital.gov.au</a></p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }

}


export default ErrorRoot;
