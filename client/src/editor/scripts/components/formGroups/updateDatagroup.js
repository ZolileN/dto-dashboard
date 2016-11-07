import React, { PropTypes } from 'react';

import UpdateDatagroupItemForm from './../forms/updateDatagroupItem';


const onGroupSubmit = () => {
  console.log('handle group submit');
};

const UpdateDatagroupFormGroup = ({datagroups, onSubmit}) => {
  return (
    <div>
      {datagroups.map((d, idx) => {
        const isLastGroup = idx === datagroups.length;
        return <UpdateDatagroupItemForm key={idx}
                                        datagroup={d}
                                        formModel={d.datapoint}
                                        onGroupSubmit={isLastGroup() && onGroupSubmit}
        />
      })}
    </div>
  )
};

export default UpdateDatagroupFormGroup;
