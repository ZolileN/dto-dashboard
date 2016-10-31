import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { humanisedShortDate } from './../utils/humanisedDates';
import Preview from './datagroupPreview';


const makePreviewItems = datapoints => {
  return datapoints.map(d => {
    return {
      label: d.label,
      value: d.value
    }
  })
};

const WidgetTypeCrossSectional = ({widget, datagroup, editUrl, editDescriptionsUrl}) => {
  return (
    <article className="widget-list__item">
      <header className="clearfix">
        <div className="title">
          <h1 className="h5">{widget.name}</h1>
        </div>
        <div className="ancillary">
          <span className="date-meta">Last updated: {humanisedShortDate(widget.last_updated_at)}</span>
        </div>
      </header>

      {/*<h1>WidgetTypeCrossSectional</h1>*/}
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <Preview date={datagroup.key} items={makePreviewItems(datagroup.headDatapoints)} />
        </div>
        <div className="col-xs-12 col-lg-6">
          <Link to={editUrl}>Edit data</Link><br/>
          <Link to={editDescriptionsUrl}>Edit KPI descriptions</Link><br/>
        </div>
      </div>
    </article>
  )
};

WidgetTypeCrossSectional.propTypes = {
  widget: PropTypes.object.isRequired,
  editUrl: PropTypes.string.isRequired
};

export default WidgetTypeCrossSectional;
