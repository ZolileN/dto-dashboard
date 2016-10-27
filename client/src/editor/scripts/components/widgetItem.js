import React, { cloneElement } from 'react';
import { Link } from 'react-router';


const Preview = () => {
  return (
    <section>
      <h1>Preview</h1>
      <dl>
        <dt>todo</dt><dd>value</dd>
      </dl>
    </section>
  )
};

const TypeDefault = props => {
  let {
    addDataUrl,
    editDataUrl,
    editDescriptionsUrl
  } = props;
  return (
    <div className="widget--default">
      <div className="row">
        {/*<div className="col-xs-12 col-lg-6">*/}
          {/*<Preview />*/}
        {/*</div>*/}
        <div className="col-xs-12 col-lg-6">
          <Link to={addDataUrl} className="btn primary">Add data</Link><br/>
          <Link to={editDataUrl}>Edit data</Link><br/>
          <Link to={editDescriptionsUrl}>Edit KPI descriptions</Link><br/>
        </div>
      </div>
    </div>
  );
};

const TypeFact = props => {
  let { widget, editDataUrl} = props;
  return (
    <div className="widget--fact">
      <div className="row">
        <div className="col-xs-12">
          <h2 className="h6">Preview</h2>
          <p>{widget.description}</p>
        </div>
        <Link to={editDataUrl} className="btn primary">Edit Fact</Link>
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
    editDescriptionsUrl
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
                        editDescriptionsUrl={editDescriptionsUrl} />
  }
};

const WidgetItem = props => {

  let {
    widget,
    children,
    className
  } = props;

  return (
    <article className={className}>
      <span>Last updated: {widget.last_updated_at}</span>
      <h1 className="h5">{widget.name}</h1>
      <ProxyItemType {...props} />
    </article>
  );
};

export default WidgetItem;
