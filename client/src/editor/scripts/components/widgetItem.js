import React from 'react';
import { Link } from 'react-router';


const Preview = () => {
  return (
    <section>
      <h1>Preview</h1>
      <dl>
        <dt>todo</dt><dd>value</dd>
      </dl>
    </section>
  )
};

const WidgetItem = props => {

  let {
    dashboard,
    widget,
    addDataUrl,
    editDataUrl,
    editDescriptionsUrl
  } = props;


  return (
    <section>
      <span>Last updated: {widget.last_updated_at}</span>
      <h1>{widget.name}</h1>
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <Preview />
        </div>
        <div className="col-xs-12 col-lg-6">
          <Link to={addDataUrl}>Add data</Link><br/>
          <Link to={editDataUrl}>Edit data</Link><br/>
          <Link to={editDescriptionsUrl}>Edit KPI descriptions</Link><br/>
        </div>
      </div>
    </section>
  )
};

export default WidgetItem;
