import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import spells from '../firebase/spells.json'
import { v4 as uuidv4 } from 'uuid';


const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'Level', headerName: 'Level', width: 130 },
  { field: 'School', headerName: 'School', width: 130 },
  { field: 'Access', headerName: 'Access', width: 130 },
];

function getRowId(row) {
    return uuidv4();
  }
export default function TableData() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={spells}
        getRowId={getRowId}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 50 },
          },
        }}
        sx={{
            height: "100vh"
        }}
        pageSizeOptions={[50, 100]}
        // checkboxSelection
      />
    </div>
  );
}