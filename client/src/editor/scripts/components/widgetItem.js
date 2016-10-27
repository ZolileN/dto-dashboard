import React, { cloneElement } from 'react';
import { Link } from 'react-router';
import { humanisedShortDate } from './../utils/humanisedDates';


const Preview = ({latestDataSlice}) => {
  return (
    <section>
      <h1>Preview</h1>
      <dl>
        {latestDataSlice.map(d => <span><dt>{d.name}</dt><dd>{d.value}</dd></span>)}
      </dl>
    </section>
  )
};

const TypeDefault = props => {
  let {
    addDataUrl,
    editDataUrl,
    editDescriptionsUrl,
    hasRecentData
  } = props;
  return (
    <div className="widget--default">
      <div className="row">
        {/*<div className="col-xs-12 col-lg-6">*/}
          {/*<Preview />*/}
        {/*</div>*/}
        <div className="col-xs-12 col-lg-6">
          <Link to={addDataUrl} className="btn primary" disabled={hasRecentData}>Add data</Link><br/>
          <Link to={editDataUrl}>Edit data</Link><br/>
          <Link to={editDescriptionsUrl}>Edit KPI descriptions</Link><br/>
        </div>
      </div>
    </div>
  );
};

const TypeFact = props => {
  let { widget, editDataUrl } = props;
  return (
    <div className="widget--fact">
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <span className="desc-title strong">Preview:</span>
          <p>{widget.description}</p>
          <Link to={editDataUrl} className="btn primary">Edit Fact</Link>
        </div>
      </div>
    </div>
  );
};

const ProxyItemType = props => {
  let {
    dashboard,
    widget,
    addDataUrl,
    editDataUrl,
    editDescriptionsUrl,
    latestDataSlice
  } = props;

  if (widget.type === 'fact') {
    return <TypeFact dashboard={dashboard}
                     widget={widget}
                     editDataUrl={editDataUrl} />
  } else {
    return <TypeDefault dashboard={dashboard}
                        widget={widget}
                        addDataUrl={addDataUrl}
                        editDataUrl={editDataUrl}
                        editDescriptionsUrl={editDescriptionsUrl}
                        latestDataSlice={latestDataSlice} />
  }
};

const WidgetItem = props => {

  let {
    widget,
    className
  } = props;

  return (
    <article className={className}>
      <div className="widget-list__item__title">
        <h1 className="h5">{widget.name}</h1>
      </div>
      <div className="widget-list__item__ancillary">
        <span className="last-updated">Last updated: {humanisedShortDate(widget.last_updated_at)}</span>
      </div>
      <ProxyItemType {...props} />
    </article>
  );
};

export default WidgetItem;
