import React, { Component } from 'react';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { connect } from 'react-redux';

import Toast from './../components/toast';
import IconLoader from './../../../_shared/scripts/components/iconLoader';


class Layout extends Component {

  componentDidUpdate() {
    document.body.scrollTop = 0;
  }

  render() {
    return (
      <div className="app-scene">
        <IconLoader />
        <Toast />
        <TransitionGroup
          transitionAppear={false}
          transitionName={{
            enter:'fadeIn',
            leave:'fadeOut'
          }}
          transitionEnterTimeout={400}  // total time
          transitionLeaveTimeout={200}  // total time
          component="div"
          className="app-page-parent">
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}
        </TransitionGroup>
      </div>
    )
  }
}

const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  null
)(Layout);
