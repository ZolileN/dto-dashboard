
import React, {Component, PropTypes} from 'react';
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router';

import Breadcrumbs from './../../../../_shared/scripts/components/uikit-components/breadcrumbs';
import WidgetTypeSimple from './../../components/widgetTypeSimple';
import WidgetTypeTimeSeries from './../../components/widgetTypeTimeSeries';

import {
  getDashboardUrl,
  getDashboardWidgetDatagroupSimpleUrl,
  getDashboardWidgetDatagroupTimeSeriesUrl,
  getDashboardWidgetDescriptionsUrl,
  getServiceDashboardUrl,
  getServiceDashboardUrlAnchor
} from './../../utils/urlHelpers';
import {
  getElementY,
  scrollToY
} from './../../utils/scrollPosition';
import { onNextFrame } from './../../utils/DOM';


class PageDashboardWidgets extends Component {

  componentDidMount() {
		// this.scrollToWidget("13"); // "Device Usage"
    // this.scrollToWidget("14"); // "Browser"

    console.log('mounted', this.props.ui.lastViewedWidget);

    if (this.props.ui.lastViewedWidget) {
      console.log('scroll SCROLL');
      this.scrollToWidget(this.props.ui.lastViewedWidget);
    }
  }

  componentWillUnmount() {
    if (this.props.ui.lastDatagroupsetTransaction && this.props.ui.lastDatagroupsetTransaction.widgetId) {
      this.props.actions.setLastDatagroupsetTransaction({});
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
      btlDatagroupsetsSlices,
      widget,
      actions
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
                      widget={heroDatagroupsetSlice.widget}
                      addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, heroDatagroupsetSlice.widget.id, heroDatagroupsetSlice.sliceNextKey)}
                      editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, heroDatagroupsetSlice.sliceKey)}
                      serviceDashboardUrl={getServiceDashboardUrl(dashboard.id, dashboard.name)}
                      editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, heroDatagroupsetSlice.id)}
                      dashboard={dashboard}
                      alertProps={ui.lastDatagroupsetTransaction && ui.lastDatagroupsetTransaction.widgetId === heroDatagroupsetSlice.widget.id ? ui.lastDatagroupsetTransaction : null}
                      setLastViewedWidget={actions.setLastViewedWidget.bind(this)}
                    />
                  </div>}


                  {btlDatagroupsetsSlices.map((slice, idx) => {
                    if (slice.type === 'simple') {
                      return (
                        <div key={idx} ref={String(slice.widget.id)}>
                          <WidgetTypeSimple editUrl={getDashboardWidgetDatagroupSimpleUrl(dashboard.id, slice.widget.id)}
                            widget={slice.widget}
                            dashboard={dashboard}
                            alertProps={ui.lastDatagroupsetTransaction && ui.lastDatagroupsetTransaction.widgetId === slice.widget.id ? ui.lastDatagroupsetTransaction : null}
                            setLastViewedWidget={actions.setLastViewedWidget.bind(this)}
                          />
                        </div>
                      )
                    }
                    else if (slice.type === 'time-series') {
                      return (
                        <div key={idx} ref={String(slice.widget.id)}>
                          <WidgetTypeTimeSeries recentDatagroupset={slice}
                            widget={slice.widget}
                            addUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, slice.widget.id, slice.sliceNextKey)}
                            editUrl={getDashboardWidgetDatagroupTimeSeriesUrl(dashboard.id, slice.widget.id, slice.sliceKey)}
                            editDescriptionsUrl={getDashboardWidgetDescriptionsUrl(dashboard.id, slice.widget.id)}
                            serviceDashboardUrl={getServiceDashboardUrlAnchor(dashboard.id, dashboard.name, slice.widget.name)}
                            dashboard={dashboard}
                            alertProps={ui.lastDatagroupsetTransaction && ui.lastDatagroupsetTransaction.widgetId === slice.widget.id ? ui.lastDatagroupsetTransaction : null}
                            setLastViewedWidget={actions.setLastViewedWidget.bind(this)}
                           />
                        </div>
                      )
                    } else {
                      return null;
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

PageDashboardWidgets.propTypes = {
  ui: PropTypes.object.isRequired,
  dashboard: PropTypes.object.isRequired,
  heroDatagroupsetSlice: PropTypes.object,
  btlDatagroupsetsSlices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default PageDashboardWidgets;

