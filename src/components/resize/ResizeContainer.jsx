import React from 'react';
import '../../app.css';
import ResetWidthButton from './ResetWidthButton';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const ResizeContainer = () => {
  return (
    <div className="resize-container">
      <Tooltip
        placement="left"
        title="Click for resize instructions"
        color="black"
      >
        <InfoCircleOutlined
          className="resize-info"
          onClick={() => setShowTooltip(!showTooltip)}
        />
      </Tooltip>
      <ResetWidthButton
        setTableData={setTableData}
        resetTableData={resetTableData}
      />
    </div>
  );
};

export default ResizeContainer;
