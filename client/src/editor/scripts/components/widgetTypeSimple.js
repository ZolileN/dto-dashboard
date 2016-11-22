import { FLAG_UDPATE_DATAGROUP } from './../constants/flags';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { humanisedShortDate } from './../utils/humanisedDates';
import UikitAlert from './uikit/alert';


const WidgetTypeSimple = ({
  widget,
  editUrl,
  alertProps
}) => {

  const disableEdit = FLAG_UDPATE_DATAGROUP === false;
  const isFact = widget.type === 'fact';

  return (
    <article className="widget-list__item">

      {alertProps && <UikitAlert type={alertProps.type === 'created' || alertProps.type === 'updated' ? 'success' : 'error'} text={alertProps.description} />}

      <header>
        <div className="title">
          <h1 className="h5">{widget.name}</h1>
        </div>
        <div className="meta-status">
          <div className="traffic-light">
            <span className="traffic-light__bottom">Edited: <time>{humanisedShortDate(widget.last_updated_at)}</time></span>
          </div>
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
