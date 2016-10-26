import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getWidgetById } from './../reducers/widgets';


const mapStateToProps = (store, ownProps) => {
  return {
    dashboard: ownProps.dashboard,
    widget: getWidgetById(ownProps.widgets, ownProps.params.widget_id)
  }
};
const mapDispatchToProps = dispatch => ({});

class Dashboard extends Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          dashboard: this.props.dashboard,
          widget: this.props.widget
        })}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
