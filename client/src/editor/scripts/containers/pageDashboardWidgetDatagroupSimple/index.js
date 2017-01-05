import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getDashboardById } from './../../reducers/dashboards';
import { getWidgetById } from './../../reducers/widgets';

import * as uiAppActions from './../../actions/uiApp';

import DashboardWidgetDatagroupSimplePage from './../../components/pages/dashboardWidgetDatagroupSimple';


const mapStateToProps = (state, ownProps) => {
  let dashboard = getDashboardById(state.dashboards, ownProps.params.dashboard_id);
  let widget = getWidgetById(state.widgets, ownProps.params.widget_id);
  return {
    dashboard,
    widget
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(uiAppActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardWidgetDatagroupSimplePage);
