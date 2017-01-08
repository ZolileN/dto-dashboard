
import { connect } from 'react-redux';

import { getDashboardById } from './../../../reducers/dashboards';
import { getWidgetById } from './../../../reducers/widgets';

import DashboardWidgetDatagroupSimplePage from './pageDashboardWidgetDatagroupSimple_component';


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
)(DashboardWidgetDatagroupSimplePage);
