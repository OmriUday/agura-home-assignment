import React, { useState, useEffect } from 'react';
import ResizeArrowIcon from './ResizeArrowIcon';
import useProcessedPathname from '../../hooks/useProcessedPathname';

const COLUMN_MIN_WIDTH = 80;
const COLUMN_MAX_WIDTH = 500;

function calculateNewWidthValue(newWidth) {
  return newWidth <= COLUMN_MIN_WIDTH
    ? COLUMN_MIN_WIDTH
    : newWidth >= COLUMN_MAX_WIDTH
    ? COLUMN_MAX_WIDTH
    : newWidth;
}

const Resizer = ({
  columnIndex,
  setTableData,
  handleInitialColumnWidth,
  showTooltip,
  setShowTooltip,
}) => {
  const [columnWidth, setColumnWidth] = useState(
    handleInitialColumnWidth(columnIndex),
  );

  useEffect(() => {
    if (showTooltip) {
      const timeout = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showTooltip]);

  const currentPage = useProcessedPathname();

  const handleMouseDown = ev => {
    ev.preventDefault();
    const startX = ev.clientX;

    const handleMouseUp = () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };

    const handleMouseMove = ev => {
      const delta = startX - ev.clientX;
      const newWidth = columnWidth - delta;

      localStorage.setItem(
        `p-${currentPage}_c-${columnIndex}_width`,
        `${calculateNewWidthValue(newWidth)}`,
      );

      setColumnWidth(calculateNewWidthValue(newWidth));

      const updateColumnWidthData = (columnIndex, newWidth) => {
        setTableData(prevData => ({
          ...prevData,
          columns: prevData.columns.map((col, idx) => {
            if (idx === columnIndex) {
              return {
                ...col,
                width: newWidth,
              };
            }
            return col;
          }),
        }));
      };

      updateColumnWidthData(columnIndex, calculateNewWidthValue(newWidth));
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
  };

  return (
    <>
      {columnIndex === 0 && (
        <div className="instruction-container">
          {showTooltip && <ResizeArrowIcon />}
        </div>
      )}

      <span
        className="resizer"
        onDragOver={e => e.preventDefault()}
        onMouseDown={e => handleMouseDown(e)}
      ></span>
    </>
  );
};

export default Resizer;
