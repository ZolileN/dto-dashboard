import React from 'react';
import classNames from 'classnames';


const TYPES = ['updated', 'created', 'deleted'];

const Icon = ({type}) => {
  switch (type) {
    case 'created':
    case 'updated':
      return <span>{`&#x2713;`}</span>;
    case 'deleted':
      return <span>{`&#x2717;`}</span>;
    default:
      return <span>!</span>;
  }
};

const WidgetAlert = ({description, type}) => {
  if (!type || !TYPES.includes(type)) {
    type = 'info';
  }

  return (
    <div className={classNames('widget-alert', {
      'is-created': type === 'created',
      'is-updated': type === 'updated',
      'is-deleted': type === 'deleted',
      'is-info': type === 'info'
    })}>
      <div className="media">
        <div className="media-left">
          <Icon className="media-object media-middle" type={type} />
        </div>
        <div className="widget-alert__main media-body">
          <h4 className="media-heading">{description}</h4>
        </div>
      </div>
    </div>
  )
};

export default WidgetAlert;
