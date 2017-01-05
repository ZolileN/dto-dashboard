import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getDashboardById } from './../reducers/dashboards';
import { getWidgetsByDashboardId } from './../reducers/widgets';
import {
  getDatagroupsets,
  getDatagroupsetSlices,
  filterDatagroupsetByHeroWidget,
  filterDatagroupsetsByBtlWidgets,
} from './../reducers';

import * as uiAppActions from './../actions/uiApp';

import PageDashboardWidgets from './../components/pages/dashboardWidgets';


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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageDashboardWidgets);

