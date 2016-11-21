import { FLAG_UDPATE_DATAGROUP } from './../constants/flags';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { humanisedShortDate } from './../utils/humanisedDates';
import WidgetAlert from './widgetAlert';


const WidgetTypeSimple = ({
  widget,
  editUrl,
  alertProps
}) => {

  const disableEdit = FLAG_UDPATE_DATAGROUP === false;
  const isFact = widget.type === 'fact';

  return (
    <article className="widget-list__item">

      {alertProps && <WidgetAlert {...alertProps} />}

      <header className="clearfix">
        <div className="title">
          <h1 className="h5">{widget.name}</h1>
        </div>
        <div className="ancillary">
          <span className="date-meta">Published: {humanisedShortDate(widget.last_updated_at)}</span>
        </div>
      </header>

      <p>{widget.description}</p>
      <Link to={editUrl}
            className="UIKIT-button btn btn-primary"
            disabled={disableEdit}
            onClick={e => disableEdit && e.preventDefault()}>{isFact ? 'Edit fact' : 'Edit'}</Link>
    </article>
  )
};

WidgetTypeSimple.propTypes = {
  widget: PropTypes.object.isRequired,
  editUrl: PropTypes.string.isRequired
};

export default WidgetTypeSimple;
