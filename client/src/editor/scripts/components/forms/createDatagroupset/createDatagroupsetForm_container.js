
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Form from './createDatagroupsetForm_component';
import {validate} from './behaviour';

import {createDatagroupset} from './../../../actions/datagroupset';
import {setDatagroupTransacted} from './../../../actions/uiApp';
import {getHumanisedMonth} from './../../../utils/humanisedDates';


let Container = reduxForm({
  form: 'CreateDatagroupset',
  validate,
  deepEqual: true,
  destroyOnUnmount: false
})(Form);

const mapStateToProps = (state, ownProps) => ({
  enableReinitialize: true,
  initialValues: ownProps.formModel
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  /**
   * submission action
   * @param payload
   * @returns {Promise}
   */
  onSave: payload => { // passes through handleSubmit
    console.log('Now running onSave action');
    return dispatch(createDatagroupset(payload));
  },
  /**
   * executed once onSave responds successfully
   * @param response
   * @param formModel
   * @param cb
   * @returns {Promise}
   */
  onSaveSuccess: (response, formModel, cb) => {
    console.log('Now running onSaveSuccess');
    return dispatch(setDatagroupTransacted({
      widgetId: formModel.widget.id,
      description: `Published data for: ${getHumanisedMonth(response[0].ts)} -
              ${response.map((el, idx) => {
        return ` ${formModel.groups[idx].dataset.label} ${el.value === null ? "No data" : el.value}`
      })}`,
      type: 'created'
    })).then(() => {
      cb();
    });
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
