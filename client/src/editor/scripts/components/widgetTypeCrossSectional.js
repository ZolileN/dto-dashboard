import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { humanisedShortDate } from './../utils/humanisedDates';
import Preview from './datagroupPreview';
import { makePreviewItems } from './../helpers/datagroup';


const WidgetTypeCrossSectional = ({datagroup, editUrl, editDescriptionsUrl, widget}) => {
  return (
    <article className="widget-list__item">
      <header className="clearfix">
        <div className="title">
          <h1 className="h5">{widget.name}</h1>
        </div>
        <div className="ancillary">
          <span className="date-meta">Last updated: {humanisedShortDate(datagroup.head[0].lastUpdated)}</span>
        </div>
      </header>

      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <Preview date={datagroup.key} items={makePreviewItems(datagroup)} />
        </div>
        <div className="col-xs-12 col-lg-6">
          <Link to={editUrl} disabled={true}>Edit data</Link><br/>
          <Link to={editDescriptionsUrl} disabled={true}>Edit KPI descriptions</Link><br/>
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
