
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import Form from './formCreateDatagroupset_component';
import {validate} from './behaviour';

import {createDatagroupset} from './../../../redux/datagroupset/datagroupsetActions';
import {setLastDatagroupsetTransaction} from './../../../redux/ui/uiActions';
import {getHumanisedMonth} from './../../../utils/humanisedDates';
import {getDashboardWidgetsUrl} from './../../../utils/urlHelpers';


let Container = reduxForm({
  form: 'CreateDatagroupset',
  validate,
  deepEqual: true,
  destroyOnUnmount: false
})(Form);

const mapStateToProps = (state, ownProps) => ({
  enableReinitialize: true,
  initialValues: ownProps.formModel,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  /**
   * submission action
   * @param payload
   * @returns {Promise}
   */
  onSave: payload => { // passes through handleSubmit
    return dispatch(createDatagroupset(payload));
  },
  /**
   * executed once onSave responds successfully
   * @param response
   * @param formModel
   * @param cb
   * @returns {Promise}
   */
  onSaveSuccess: (response, props) => {
    const {formModel} = props;

    dispatch(setLastDatagroupsetTransaction({
      widgetId: formModel.widget.id,
      description: `Published data for: ${getHumanisedMonth(response[0].ts)} - ${response.map((el, idx) => {
        return ` ${formModel.groups[idx].dataset.label} ${el.value === null ? "No data" : el.value}`
      })}`,
      type: 'create'
    }));

    dispatch(push(getDashboardWidgetsUrl(ownProps.dashboard_id)));
  },
  /**
   * Callback from once Cancel is clicked
   * @param props
   */
  onCancelSuccess: (props) => {
    dispatch(push(getDashboardWidgetsUrl(ownProps.dashboard_id)));
  }
});


// We'll pass this mergeProps parameter to redux's connect is what allows us
// to override as we please during testing. In this container,
// mapDispatchToProps provides an onSave prop to our component, but we want to
// override onSave during testing (e.g. so we know if it's called or not).
const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps);

Container = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Container);

export default Container
