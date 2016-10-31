import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { humanisedShortDate } from './../utils/humanisedDates';
import Preview from './datagroupPreview';


const WidgetTypeKpiHeroGroup = ({widget, editUrl}) => {
  return (
    <article className="widget-list__item">
      <header className="clearfix">
        <div className="title">
          <h1 className="h5">Kpi Performance Indicators</h1>
        </div>
        <div className="ancillary">
          <span className="date-meta">Last updated: todo}</span>
        </div>
      </header>

      WidgetTypeKpiHeroGroup
    </article>
  )
};


export default WidgetTypeKpiHeroGroup;
