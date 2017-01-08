/*global describe,it,beforeEach*/

import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme'
import sinon from 'sinon'

import {SubmissionError} from 'redux-form'
import CreateDatagroupsetContainer from './formCreateDatagroupset_container';
import CreateDatagroupsetForm from './formCreateDatagroupset_component';


describe('(Form) Create Datagroupset Form - Container', () => {

  it.skip('todo');

});

describe('(Form) Create Datagroupset Form - Behaviour', () => {

  it.skip('todo');

  // unit test behaviour of submit

  // unit test behaviour of cancel

});

describe('(Form) Create Datagroupset Form - Form', () => {

  let subject = null;
  let submitting, touched, error, reset, onSave, onSaveResponse, handleSubmit;
  beforeEach(() => {
    submitting = false;
    touched = false;
    error = null;
    reset = sinon.spy();
    onSaveResponse = Promise.resolve();
    handleSubmit = fn => fn;
  });
  const buildSubject = () => {
    onSave = sinon.stub().returns(onSaveResponse);
    const props = {
      onSave,
      submitting: submitting,
      // The real redux form has many properties for each field,
      // including onChange and onBlur handlers. We only need to provide
      // the ones that will change the rendered output.
      fields: {   // todo
        groups: [
          {
            dataset: {id:1},
            value: '',
            touched: touched,
            error: error
          }
        ]
      },
      formModel: {
        dataset: {id:1},
        datapoint: null
      },
      handleSubmit,
      reset
    };
    return shallow(<CreateDatagroupsetForm {...props}/>)
  };

  // todo
  it.skip(`integrations test behaviour of submit - with success`);
  it.skip(`integrations test behaviour of submit - with error`);
  it.skip(`integrations test behaviour of submit - that form resets`);
  it.skip(`integrations test behaviour of cancel`);

});
