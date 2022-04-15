import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
  TableColumnResizing,
  Toolbar,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-bootstrap4';
import {
  PagingState,
  IntegratedPaging,
  SortingState,
  IntegratedSorting,
  EditingState,
  ChangeSet,
} from '@devexpress/dx-react-grid';
import { useState } from 'react';
import { Post, postsAction } from '../redux/slices/posts';
import ResizingPanel from '../elements/ResizingPanel';
import { TableColumnWidthInfo } from '@devexpress/dx-react-grid';
import { useDispatch } from 'react-redux';
import { modalActions } from '../redux/slices/modal';

const TableGrid: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const dispatch = useDispatch();

  const [columns] = useState([
    { name: 'id', title: 'Title ID' },
    { name: 'userId', title: 'User ID' },
    { name: 'title', title: 'Title' },
    { name: 'body', title: 'Body' },
  ]);

  const [defaultColumnWidths] = useState<TableColumnWidthInfo[]>([
    { columnName: 'id', width: 150 },
    { columnName: 'userId', width: 150 },
    { columnName: 'title', width: 500 },
    { columnName: 'body', width: 500 },
  ]);

  const [pageSizes] = useState([5, 10, 15, 0]);

  const [columnWidths, setColumnWidths] = useState(defaultColumnWidths);
  const [resizingMode, setResizingMode] = useState('widget');

  const resetWidths = () => {
    setColumnWidths(defaultColumnWidths);
  };

  const onColumnWidthsChange = (data: TableColumnWidthInfo[]) => {
    setColumnWidths(data);
  };

  const onRowChange = (changes: ChangeSet) => {
    if (changes.deleted) {
      dispatch(
        postsAction.changeIdToDelete({ indexToDelete: changes.deleted[0] })
      );
      dispatch(modalActions.toggleSubmitDeletingModal());
      dispatch(modalActions.toggleBackground());
    }
  };

  return (
    <>
      {posts ? (
        //@ts-ignore
        <Grid rows={posts} columns={columns}>
          <EditingState onCommitChanges={onRowChange} />
          <Toolbar />
          <SortingState />
          <IntegratedSorting />
          <PagingState defaultPageSize={10} defaultCurrentPage={0} />
          <IntegratedPaging />
          <Table />
          <TableColumnResizing
            columnWidths={columnWidths}
            onColumnWidthsChange={onColumnWidthsChange}
            resizingMode={resizingMode}
          />
          <TableHeaderRow showSortingControls />
          <PagingPanel pageSizes={pageSizes} />
          <TableEditRow />
          <TableEditColumn showDeleteCommand />
          <ResizingPanel
            defaultValue={resizingMode}
            changeMode={setResizingMode}
            resetWidths={resetWidths}
          />
        </Grid>
      ) : (
        <div>No data</div>
      )}
    </>
  );
};

export default TableGrid;
