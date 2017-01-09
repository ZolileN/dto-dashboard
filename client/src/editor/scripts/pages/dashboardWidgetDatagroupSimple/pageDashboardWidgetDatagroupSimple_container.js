
import { connect } from 'react-redux';

import { getDashboardById } from './../../redux/dashboards/dashboardsReducer';
import { getWidgetById } from './../../redux/widgets/widgetsReducer';

import Page from './pageDashboardWidgetDatagroupSimple_component';


const mapStateToProps = (state, ownProps) => {
  let dashboard = getDashboardById(state.dashboards, ownProps.params.dashboard_id);
  let widget = getWidgetById(state.widgets, ownProps.params.widget_id);
  return {
    dashboard,
    widget
  }
};
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
