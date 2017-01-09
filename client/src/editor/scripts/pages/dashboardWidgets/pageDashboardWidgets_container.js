import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {getDashboardById} from './../../redux/dashboards/dashboardsReducer';
import {getWidgetsByDashboardId} from './../../redux/widgets/widgetsReducer';
import {
  getDatagroupsets,
  getDatagroupsetSlices,
  filterDatagroupsetByHeroWidget,
  filterDatagroupsetsByBtlWidgets,
} from './../../redux/root/rootReducer';
import {
  setDatagroupsetTransacted,
  clearDatagroupsetTransacted
} from './../../redux/ui/uiActions';

import Page from './pageDashboardWidgets_component';


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
    ui: state.ui,
    dashboard,
    heroDatagroupsetSlice,
    btlDatagroupsetsSlices
  }
};
const mapDispatchToProps = dispatch => ({
  setDatagroupsetTransacted: bindActionCreators(setDatagroupsetTransacted, dispatch),
  clearDatagroupsetTransacted: bindActionCreators(clearDatagroupsetTransacted, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

