import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getDashboardById } from './../reducers/dashboards';
import { getWidgetById } from './../reducers/widgets';

import Breadcrumbs from './../components/breadcrumbs';
import * as uiActions from './../actions/ui';
import { getDashboardWidgetsUrl } from './../utils/urlHelpers';
import UpdateDatagroupSimpleForm from './../components/forms/updateDatagroupSimple';
import metadata from './../data/widgetMetadata';


const mapStateToProps = (state, ownProps) => {
  let dashboard = getDashboardById(state.dashboards, ownProps.params.dashboard_id);
  let widget = getWidgetById(state.widgets, ownProps.params.widget_id);
  return {
    dashboard,
    widget
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


class DashboardWidgetDatagroupSimplePage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      metadata: {}
    };

    if (this.props.widget.type && this.props.widget.units) {
      try {
        let metadata = metadata[this.props.widget.type][this.props.widget.units];
        if (metadata) {
          this.setState('metadata', metadata);
        }
      } catch(e) {
        console.warn('no widget metadata for that permutation', this.props.widget.type, this.props.widget.units);
      }
    }
  }

  render() {
    let {
      widget,
      dashboard
    } = this.props;

    let {
      metadata
    } = this.state;

    return (
      <div className="page page-dashboardwidgetdatagroupsimple">

        <div className="page__header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-8">

                <Breadcrumbs paths={[
                  {path: '/', name:'Manage Dashboards'},
                  {path: getDashboardWidgetsUrl(dashboard.id), name:`${dashboard.name}`},
                  {path: '', name:`Fact: ${widget.name}`}
                ]} />

                <h1>{widget.name}</h1>

                {metadata.widget_help && <p className="title-description">{metadata.widget_help}</p>}

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="page__body">
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <UpdateDatagroupSimpleForm formModel={widget} />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardWidgetDatagroupSimplePage);
