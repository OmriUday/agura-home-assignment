import React from 'react';
import '../app.css';
import AgoraDataTable from '../components/AgoraDataTable';

const Devices = () => {
  return (
    <div>
      <h1 className="page-title">
        Devices <span className="sec-string-color">Page</span>
      </h1>
      <AgoraDataTable />
    </div>
  );
};

export default Devices;
