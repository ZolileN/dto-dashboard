
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {getDashboardById} from './../../redux/dashboards/dashboardsReducer';
import {getWidgetById} from './../../redux/widgets/widgetsReducer';
import {
  getDatagroupset,
  getDatagroupsetSlice
} from './../../redux/root/rootReducer';

import Page from './pageDashboardWidgetDatagroupTimeseries_component';


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
)(Page);
