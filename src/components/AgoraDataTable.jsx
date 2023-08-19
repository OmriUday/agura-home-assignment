import React, { useRef, useState, useEffect } from 'react';
import '.././app.css';
import { Space, Table, Tag, Tooltip, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Resizer from './resize/Resizer';
import useProcessedPathname from '../hooks/useProcessedPathname';
import ResetWidthButton from './resize/ResetWidthButton';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useTableData } from '../hooks/useTableData';
import { formatCurrency } from '../utils/index';

const AgoraDataTable = () => {
  const { handleInitialColumnWidth, getInitialTableData } = useTableData();
  const [showTooltip, setShowTooltip] = useState(false);
  const [tableData, setTableData] = useState(getInitialTableData());
  const [loading, setLoading] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const currentPage = useProcessedPathname();
  const searchInput = useRef(null);
  function getColumnData(columnIndex, property) {
    if (!tableData || !tableData.columns) return null;
    return tableData.columns[columnIndex][property];
  }

  function getRawsData() {
    return tableData.raws;
  }

  function resetTableData() {
    setTableData(getInitialTableData());
  }

  const handleWithLoading = callback => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
      if (callback) {
        callback();
      }
    }, 350);
    return timeoutId;
  };

  useEffect(() => {
    const timeoutId = handleWithLoading();
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    handleWithLoading(() => {
      setPagination({
        ...pagination,
        current: pagination.current,
        pageSize: pagination.pageSize,
      });
    });
  };

  const handleSearch = (e, selectedKeys, confirm, dataIndex) => {
    e.stopPropagation();
    confirm();
  };

  const handleReset = clearFilters => {
    clearFilters();
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={e => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={e => handleSearch(e, selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={e => handleSearch(e, selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .startsWith(value.toLowerCase()),
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: text => text,
  });

  const columns = [
    {
      title: (
        <>
          {getColumnData(0, 'title')}
          <Resizer
            columnIndex={0}
            setTableData={setTableData}
            handleInitialColumnWidth={handleInitialColumnWidth}
            setShowTooltip={setShowTooltip}
            showTooltip={showTooltip}
          />
        </>
      ),
      dataIndex: getColumnData(0, 'key'),
      key: getColumnData(0, 'key'),
      width: `${getColumnData(0, 'width')}px`,
      ...getColumnSearchProps(getColumnData(0, 'key')),
      filteredValue: filteredInfo[getColumnData(0, 'key')] || null,

      onFilter: (value, record) =>
        record[getColumnData(0, 'key')]
          .toLowerCase()
          .startsWith(value.toLowerCase()),
      ellipsis: true,
      render: text => <a>{text}</a>,
    },
    {
      title: (
        <>
          {getColumnData(1, 'title')}
          <Resizer
            columnIndex={1}
            setTableData={setTableData}
            handleInitialColumnWidth={handleInitialColumnWidth}
          />
        </>
      ),
      dataIndex: getColumnData(1, 'key'),
      key: getColumnData(1, 'key'),
      width: `${getColumnData(1, 'width')}px`,
      sorter: (a, b) => a[getColumnData(1, 'key')] - b[getColumnData(1, 'key')],
    },
    {
      title: (
        <>
          {getColumnData(2, 'title')}
          <Resizer
            columnIndex={2}
            setTableData={setTableData}
            handleInitialColumnWidth={handleInitialColumnWidth}
            setShowTooltip={setShowTooltip}
            showTooltip={showTooltip}
          />
        </>
      ),
      dataIndex: getColumnData(2, 'key'),
      key: getColumnData(2, 'key'),
      width: `${getColumnData(2, 'width')}px`,
      ...getColumnSearchProps(getColumnData(2, 'key')),
      filteredValue: filteredInfo[getColumnData(2, 'key')] || null,

      onFilter: (value, record) =>
        record[getColumnData(2, 'key')]
          .toLowerCase()
          .startsWith(value.toLowerCase()),
      ellipsis: true,
      render: text => text,
    },
    {
      title: (
        <>
          {getColumnData(3, 'title')}
          <Resizer
            columnIndex={3}
            setTableData={setTableData}
            handleInitialColumnWidth={handleInitialColumnWidth}
          />
        </>
      ),
      dataIndex: getColumnData(3, 'key'),
      key: getColumnData(3, 'key'),
      width: `${getColumnData(3, 'width')}px`,
      render:
        currentPage === 'users' || currentPage === 'books'
          ? currentPage === 'users'
            ? (_, { tags }) => (
                <>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              )
            : (_, { genres }) => (
                <>
                  {genres.map(genre => {
                    let color = genre.length < 10 ? 'geekblue' : 'green';

                    if (genre === 'Dystopian') {
                      color = 'yellow';
                    }
                    return (
                      <Tag color={color} key={genre}>
                        {genre.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              )
          : text => text,
      ellipsis: true,
    },
    {
      title: (
        <>
          {getColumnData(4, 'title')}
          <Resizer
            columnIndex={4}
            setTableData={setTableData}
            handleInitialColumnWidth={handleInitialColumnWidth}
          />
        </>
      ),
      dataIndex: getColumnData(4, 'key'),
      key: getColumnData(4, 'key'),
      width: `${getColumnData(4, 'width')}px`,
      sorter: (a, b) => a[getColumnData(4, 'key')] - b[getColumnData(4, 'key')],
      render: total => formatCurrency(total),
    },
  ];

  const tableProps = {
    size: 'middle',
    expandable: 'defaultExpandable',
  };

  return (
    <main>
      <div className="resize-container">
        <Tooltip
          placement="left"
          title="Click for resize instructions"
          color="black"
        >
          <InfoCircleOutlined
            className="resize-info"
            onClick={e => {
              e.stopPropagation();
              setShowTooltip(!showTooltip);
            }}
          />
        </Tooltip>

        <ResetWidthButton
          setTableData={setTableData}
          resetTableData={resetTableData}
        />
      </div>
      <div className="ant-table">
        <Table
          className="custom-table custom-spinner"
          columns={columns || {}}
          dataSource={getRawsData() || []}
          scroll={{ y: 500, x: 500 }}
          onChange={handleChange}
          pagination={pagination}
          loading={loading}
          {...tableProps}
        />
      </div>
    </main>
  );
};

export default AgoraDataTable;
