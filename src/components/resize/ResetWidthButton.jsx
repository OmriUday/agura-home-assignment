import React, { useState } from 'react';
import '../../app.css';
import { ClearOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import useProcessedPathname from '../../hooks/useProcessedPathname';

const ResetWidthButton = ({ resetTableData }) => {
  const [loadings, setLoadings] = useState([]);
  const currentPage = useProcessedPathname();

  const enterLoading = index => {
    setLoadings(prevLoadings => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings(prevLoadings => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 700);
  };

  function resetColumnWidthsByPageNameHandler(currentPage) {
    enterLoading(1);

    const regexPattern = new RegExp(`^p-${currentPage}_c-\\d+_width$`);

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (regexPattern.test(key)) {
        localStorage.removeItem(key);
        i--;
      }
    }

    setTimeout(() => {
      resetTableData();
    }, 500);
  }

  return (
    <Button
      className="reset-button"
      icon={<ClearOutlined />}
      loading={loadings[1]}
      onClick={() => resetColumnWidthsByPageNameHandler(currentPage)}
    >
      Reset columns width per page
    </Button>
  );
};
export default ResetWidthButton;
