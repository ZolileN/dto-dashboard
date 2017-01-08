
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {getDashboardById} from './../../../reducers/dashboards';
import {getWidgetById} from './../../../reducers/widgets';
import {
  getDatagroupset,
  getDatagroupsetSlice
} from './../../../reducers';

import DashboardWidgetDatagroupTimeSeriesPage from './pageDashboardWidgetDatagroupTimeseries_component';


const mapStateToProps = (state, ownProps) => {
  const dashboard = getDashboardById(state.dashboards, ownProps.params.dashboard_id);
  const widget = getWidgetById(state.widgets, ownProps.params.widget_id);
  const datagroupset = getDatagroupset(state, widget);
  const datagroupsetSlice = getDatagroupsetSlice(datagroupset, ownProps.params.datagroup_key);
  return {
    dashboard,
    widget,
    datagroupsetSlice
  }
};
const mapDispatchToProps = dispatch => ({
  push: bindActionCreators(push, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardWidgetDatagroupTimeSeriesPage);
