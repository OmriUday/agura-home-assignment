import React from 'react';
import '../app.css';
import AgoraDataTable from '../components/AgoraDataTable';

const Books = () => {
  return (
    <div>
      <h1 className="page-title">
        Books <span className="sec-string-color">Page</span>
      </h1>
      <AgoraDataTable />
    </div>
  );
};

export default Books;
