
import {connect} from 'react-redux';

import PageDashboards from './pageDashboards_component';


const mapStateToProps = (state, ownProps) => ({
  dashboards: state.dashboards
});
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageDashboards);
