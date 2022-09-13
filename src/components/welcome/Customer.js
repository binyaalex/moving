import React from 'react';

function Customer({customer}) {
    return (
      <div>
        <button className="btn btn-primary customer">{customer}</button>
      </div>
    );
}

export default Customer;