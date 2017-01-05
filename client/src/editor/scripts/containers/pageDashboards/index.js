import { connect } from 'react-redux';

import PageDashboards from './../../components/pages/dashboards';


const mapStateToProps = (state, ownProps) => ({
  dashboards: state.dashboards
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageDashboards);
