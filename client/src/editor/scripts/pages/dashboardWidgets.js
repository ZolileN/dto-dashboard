import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getDashboardById } from './../reducers/dashboards';
import { getWidgetsByDashboardId } from './../reducers/widgets';
import {
  getDatagroupsets,
  getDatagroupsetSlices,
  filterDatagroupsetByHeroWidget,
  filterDatagroupsetsByBtlWidgets,
} from './../reducers/index';

import * as uiActions from './../actions/ui';
import Breadcrumbs from './../components/breadcrumbs';
import WidgetTypeSimple from './../components/widgetTypeSimple';
import WidgetTypeTimeSeries from './../components/widgetTypeTimeSeries';

import {
  getDashboardUrl,
  getDashboardWidgetDatagroupSimpleUrl,
  getDashboardWidgetDatagroupTimeSeriesUrl,
  getDashboardWidgetDescriptionsUrl
} from './../utils/urlHelpers';


const mapStateToProps = (state, ownProps) => {
  let dashboard = getDashboardById(state.dashboards, ownProps.params.dashboard_id);
  let widgets = getWidgetsByDashboardId(state.widgets, dashboard.id);
  let datagroupsets = getDatagroupsets(state, {widgets});
  let datagroupsetSlices = getDatagroupsetSlices(datagroupsets, ownProps.params.datagroup_key);

  let heroDatagroupsetSlice = dashboard.display_hero ?
    filterDatagroupsetByHeroWidget(datagroupsetSlices) :
    null;

  let btlDatagroupsetsSlices = filterDatagroupsetsByBtlWidgets(datagroupsetSlices);

  return {
    dashboard,
    heroDatagroupsetSlice,
    btlDatagroupsetsSlices,
    ui: state.ui.pageDashboardWidgets
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiActions, dispatch)
});


class PageDashboardWidgets extends Component {

  componentDidMount() {
    if (this.props.ui.anchorTo) {
      this.scrollToWidget(this.props.ui.anchorTo);
      this.props.actions.clearAnchorToAtDashboardWidgets();
    }
  }

  scrollToWidget(widgetId) {
    let pageNode = this.refs.page;
    let node = findDOMNode(this.refs[widgetId]);
    if (pageNode && node) {
      pageNode.scrollTop = window.innerHeight + node.offsetTop;
    }
  }

  render() {
    let {
      dashboard,
      heroDatagroupsetSlice,
      btlDatagroupsetsSlices
    } = this.props;

    return (
      <div className="page page-dashboardwidgets" ref="page">

        <div className="page__header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-8">

                <Breadcrumbs paths={[
                  {path: '/', name:'Manage Dashboards'},
                  {path: getDashboardUrl(dashboard.id), name:`${dashboard.name}`}
                ]} />

                <h1>{dashboard.name}</h1>

                <p className="title-description">Edit service overview</p>

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="page__body">
            <div className="row">
              <div className="col-xs-12 col-lg-8">

                {/*<div className="page-dashboardwidgets__title-block">*/}
                  {/*<p>{dashboard.description}</p>*/}
                  {/*<Link to={getDashboardUrl(dashboard.id)}*/}
                        {/*disabled={true}*/}
                        {/*onClick={e => e.preventDefault()}>Edit dashboard overview</Link>*/}
                {/*</div>*/}

                <section className="widget-list">

                  {heroDatagroupsetSlice && <div ref={String(heroDatagroupsetSlice.widget.id)}>
                    <WidgetTypeTimeSeries
                      recentDatagroupset={heroDatagroupsetSlice}
                      addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, heroDatagroupsetSlice.sliceNextKey)}
                      editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, heroDatagroupsetSlice.sliceKey)}
                      editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, heroDatagroupsetSlice.id)}
                      dashboard={dashboard} />
                  </div>}


                  {btlDatagroupsetsSlices.map((slice, idx) => {
                    if (slice.type === 'simple') {
                      return (
                        <div key={idx} ref={String(slice.widget.id)}>
                          <WidgetTypeSimple editUrl={getDashboardWidgetDatagroupSimpleUrl(dashboard.id, slice.widget.id)}
                                            widget={slice.widget}
                                            dashboard={dashboard} />
                        </div>
                      )
                    }
                    else if (slice.type === 'time-series') {
                      return (
                        <div key={idx} ref={String(slice.widget.id)}>
                          <WidgetTypeTimeSeries recentDatagroupset={slice}
                                                addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, slice.widget.id, slice.sliceNextKey)}
                                                editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, slice.widget.id, slice.sliceKey)}
                                                editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, slice.widget.id)}
                                                dashboard={dashboard} />
                        </div>
                      )
                    }
                  })}
                </section>
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
)(PageDashboardWidgets);

