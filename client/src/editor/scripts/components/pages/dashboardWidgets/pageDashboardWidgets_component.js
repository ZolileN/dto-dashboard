import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getDashboardById } from './../../../reducers/dashboards';
import { getWidgetsByDashboardId } from './../../../reducers/widgets';
import {
  getDatagroupsets,
  getDatagroupsetSlices,
  filterDatagroupsetByHeroWidget,
  filterDatagroupsetsByBtlWidgets,
} from './../../../reducers/index';

import * as uiActions from './../../../actions/ui';
import Breadcrumbs from './../../../../../_shared/scripts/components/uikit-components/breadcrumbs';
import WidgetTypeSimple from './../../widgetTypeSimple';
import WidgetTypeTimeSeries from './../../widgetTypeTimeSeries';

import {
  getDashboardUrl,
  getDashboardWidgetDatagroupSimpleUrl,
  getDashboardWidgetDatagroupTimeSeriesUrl,
  getDashboardWidgetDescriptionsUrl,
  getServiceDashboardUrl,
  getServiceDashboardUrlAnchor
} from './../../../utils/urlHelpers';
import {
  getElementY,
  scrollToY
} from './../../../utils/scrollPosition';
import { onNextFrame } from './../../../utils/DOM';


class PageDashboardWidgets extends Component {

  componentDidMount() {
    // this.scrollToWidget("13"); // "Device Usage"
    // this.scrollToWidget("14"); // "Browser"

    if (this.props.ui.didTransactDatagroupset.widgetId) {
      this.scrollToWidget(this.props.ui.didTransactDatagroupset.widgetId);
    }
  }

  componentWillUnmount() {
    if (this.props.ui.didTransactDatagroupset.widgetId) {
      this.props.actions.clearDatagroupsetTransacted();
    }
  }

  scrollToWidget(widgetId) {
    let node = findDOMNode(this.refs[widgetId]);

    if (node !== 'undefined') {
      onNextFrame(() => {
        let yPos = getElementY(node);
        scrollToY(yPos);
      });
    }
  }

  render() {
    let {
      ui,
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
                      alertProps={ui.didTransactDatagroupset.widgetId === heroDatagroupsetSlice.widget.id ? ui.didTransactDatagroupset : null}
                    />
                  </div>}


                  {btlDatagroupsetsSlices.map((slice, idx) => {
                    if (slice.type === 'simple') {
                      return (
                        <div key={idx} ref={String(slice.widget.id)}>
                          <WidgetTypeSimple editUrl={getDashboardWidgetDatagroupSimpleUrl(dashboard.id, slice.widget.id)}
                            widget={slice.widget}
                            dashboard={dashboard}
                            alertProps={ui.didTransactDatagroupset.widgetId === slice.widget.id ? ui.didTransactDatagroupset : null}
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
                            alertProps={ui.didTransactDatagroupset.widgetId === slice.widget.id ? ui.didTransactDatagroupset : null}
                           />
                        </div>
                      )
                    }
                  })}
                </section>


                <section className="page-dashboardwidgets__bookend-ctas">
                  <Link to="" className="UIK-button btn btn-primary pr-1"
                        disabled={true}
                        onClick={e => e.preventDefault()}>Add new chart</Link>
                  <Link to="" className="UIK-button btn btn-primary"
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

export default PageDashboardWidgets;

