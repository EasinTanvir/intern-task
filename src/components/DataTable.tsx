import { DataGrid } from "@mui/x-data-grid";
import { Stack } from "@mui/material";
import { JsonData } from "../types";
import { columns } from "../utils/dataColumn";
interface DataTableProps {
  dataList: JsonData[];
}
const DataTable = ({ dataList }: DataTableProps) => {
  const rows = dataList.map((item: JsonData) => ({
    id: item.id,
    userId: item.userId,
    title: item.title,
    body: item.body,
  }));

  return (
    <Stack width="740px" marginInline="auto" marginTop={5}>
      <DataGrid
        unstable_ignoreValueFormatterDuringExport
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        rowHeight={35}
        columnHeaderHeight={42}
      />
    </Stack>
  );
};

export default DataTable;
