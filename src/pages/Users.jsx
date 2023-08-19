import React from 'react';
import '../app.css';
import AgoraDataTable from '../components/AgoraDataTable';

const Users = () => {
  return (
    <div>
      <h1 className="page-title">
        Users <span className="sec-string-color">Page</span>
      </h1>
      <AgoraDataTable />
    </div>
  );
};

export default Users;
