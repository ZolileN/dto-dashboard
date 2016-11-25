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

import * as uiAppActions from './../actions/uiApp';
import Breadcrumbs from './../../../_shared/scripts/components/uikit-components/breadcrumbs';
import WidgetTypeSimple from './../components/widgetTypeSimple';
import WidgetTypeTimeSeries from './../components/widgetTypeTimeSeries';

import {
  getDashboardUrl,
  getDashboardWidgetDatagroupSimpleUrl,
  getDashboardWidgetDatagroupTimeSeriesUrl,
  getDashboardWidgetDescriptionsUrl,
  getServiceDashboardUrl,
  getServiceDashboardUrlAnchor
} from './../utils/urlHelpers';


const mapStateToProps = (state, ownProps) => {
  let dashboard = getDashboardById(state.dashboards, ownProps.params.dashboard_id);
  let widgets = getWidgetsByDashboardId(state.widgets, dashboard.id);
  let datagroupsets = getDatagroupsets(state, widgets);
  let datagroupsetSlices = getDatagroupsetSlices(datagroupsets, ownProps.params.datagroup_key);

  let heroDatagroupsetSlice = dashboard.display_hero ?
    filterDatagroupsetByHeroWidget(datagroupsetSlices) :
    null;

  let btlDatagroupsetsSlices = filterDatagroupsetsByBtlWidgets(datagroupsetSlices);

  return {
    uiApp: state.ui.app,
    // ui: ownProps.ui.pageDashboardWidgets
    dashboard,
    heroDatagroupsetSlice,
    btlDatagroupsetsSlices,
    ui: state.ui.pageDashboardWidgets
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiAppActions, dispatch)
});


class PageDashboardWidgets extends Component {

  componentDidMount() {
    if (this.props.uiApp.didTransactionDatagroup.widgetId) {
      this.scrollToWidget(this.props.uiApp.didTransactionDatagroup.widgetId);
    }
  }

  componentWillUnmount() {
    if (this.props.uiApp.didTransactionDatagroup.widgetId) {
      this.props.actions.clearDatagroupTransacted();
    }
  }

  scrollToWidget(widgetId) {
    let pageNode = this.refs.page;
    let headerNode = document.getElementsByClassName('editor__top-bar')[0];
    let headerNodeHeight = headerNode.offsetHeight;

    let node = findDOMNode(this.refs[widgetId]);

    if (node) {
      let nodeYPosition = (node.offsetTop - node.scrollTop + node.clientTop) + headerNodeHeight;
      pageNode.scrollTop = nodeYPosition;
    }
  }

  render() {
    let {
      uiApp,
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

                <h1 className="h3">{dashboard.name}</h1>

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

                  {/* todo - kpi widget will have different alertprops check because 5 widget id not 1 */}
                  {heroDatagroupsetSlice && <div ref={String(heroDatagroupsetSlice.widget.id)}>
                    <WidgetTypeTimeSeries
                      recentDatagroupset={heroDatagroupsetSlice}
                      addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, heroDatagroupsetSlice.widget.id, heroDatagroupsetSlice.sliceNextKey)}
                      editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, heroDatagroupsetSlice.sliceKey)}
                      serviceDashboardUrl={getServiceDashboardUrl(dashboard.id, dashboard.name)}
                      editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, heroDatagroupsetSlice.id)}
                      dashboard={dashboard}
                      alertProps={uiApp.didTransactionDatagroup.widgetId === heroDatagroupsetSlice.widget.id ? uiApp.didTransactionDatagroup : null}
                    />
                  </div>}


                  {btlDatagroupsetsSlices.map((slice, idx) => {
                    if (slice.type === 'simple') {
                      return (
                        <div key={idx} ref={String(slice.widget.id)}>
                          <WidgetTypeSimple editUrl={getDashboardWidgetDatagroupSimpleUrl(dashboard.id, slice.widget.id)}
                            widget={slice.widget}
                            dashboard={dashboard}
                            alertProps={uiApp.didTransactionDatagroup.widgetId === slice.widget.id ? uiApp.didTransactionDatagroup : null}
                          />
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
                            serviceDashboardUrl={getServiceDashboardUrlAnchor(dashboard.id, dashboard.name, slice.widget.name)}
                            dashboard={dashboard}
                            alertProps={uiApp.didTransactionDatagroup.widgetId === slice.widget.id ? uiApp.didTransactionDatagroup : null}
                           />
                        </div>
                      )
                    }
                  })}
                </section>


                <section className="page-dashboardwidgets__bookend-ctas">
                  <Link to="" className="UIKIT-button btn btn-primary pr-1"
                        disabled={true}
                        onClick={e => e.preventDefault()}>Add new chart</Link>
                  <Link to="" className="UIKIT-button btn btn-primary"
                        disabled={true}
                        onClick={e => e.preventDefault()}>Add new fact</Link>
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

