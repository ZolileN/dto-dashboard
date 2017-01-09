
import {connect} from 'react-redux';

import Page from './pageDashboards_component';


const mapStateToProps = (state, ownProps) => ({
  dashboards: state.dashboards
});
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
