import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { humanisedShortDate } from './../utils/humanisedDates';


const WidgetTypeSimple = ({widget, editUrl}) => {
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

      <p>{widget.description}</p>
      <Link to={editUrl}
            className="btn primary"
            disabled={true}
            onClick={e => e.preventDefault()}>Edit{widget.type === 'fact' ? ' Fact' : ''}</Link>
    </article>
  )
};

WidgetTypeSimple.propTypes = {
  widget: PropTypes.object.isRequired,
  editUrl: PropTypes.string.isRequired
};

export default WidgetTypeSimple;
