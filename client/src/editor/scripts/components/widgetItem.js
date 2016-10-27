import React, { cloneElement } from 'react';
import { Link } from 'react-router';

import {
  humanisedShortDate,
  humanisedVeryShortDate
} from './../utils/humanisedDates';
import LegendDot, { getPaletteColor } from './svgs/legend-dot';


const Preview = ({data}) => {
  return (
    <section className="preview">
      <span className="date-meta">Most recent data: {humanisedVeryShortDate(data.date_period)}</span>
      {data.map((d, idx) => {
        return (
          <div key={idx} className="preview-table">
            <span className="key">
              <LegendDot color={getPaletteColor(idx)} />
            </span>
            <span className="description">{d.label}</span>
            <span className="value">{d.value}</span>
          </div>
        )
      })}
    </section>
  )
};

const TypeDefault = props => {
  let {
    addDataUrl,
    editDataUrl,
    editDescriptionsUrl,
    hasRecentData,
    latestDataSlice
  } = props;
  return (
    <div className="widget--default">
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <Preview data={latestDataSlice} />
        </div>
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
    editDataUrl
  } = props;

  if (widget.type === 'fact') {
    return <TypeFact dashboard={dashboard}
                     widget={widget}
                     editDataUrl={editDataUrl} />
  } else {
    return <TypeDefault {...props} />
  }
};

const WidgetItem = props => {

  let {
    widget,
    className
  } = props;

  return (
    <article className={className}>
      <header className="clearfix">
        <div className="title">
          <h1 className="h5">{widget.name}</h1>
        </div>
        <div className="ancillary">
          <span className="date-meta">Last updated: {humanisedShortDate(widget.last_updated_at)}</span>
        </div>
      </header>
      <ProxyItemType {...props} />
    </article>
  );
};

export default WidgetItem;
