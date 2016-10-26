import React from 'react';
import { Link } from 'react-router';
import {
  getCreateDashboardWidgetDataUrl,
  getEditDashboardWidgetDataUrl,
  getEditDashboardWidgetDescriptionsUrl
} from './../utils/urlHelpers';


const Preview = () => {
  return (
    <div>Preview</div>
  )
};

const WidgetItem = props => {

  let dateHash = '16-10'; // todo

  let {
    dashboard,
    widget
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
          <Link to={getCreateDashboardWidgetDataUrl(dashboard.id, widget.id)}>Add data</Link><br/>
          <Link to={getEditDashboardWidgetDataUrl(dashboard.id, widget.id, dateHash)}>Edit data</Link><br/>
          <Link to={getEditDashboardWidgetDescriptionsUrl(dashboard.id, widget.id)}>Edit KPI descriptions</Link><br/>
        </div>
      </div>
    </section>
  )
};

export default WidgetItem;
