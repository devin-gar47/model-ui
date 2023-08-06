import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "ou", headerName: "O/U", sortable: false, flex: 1 },
  {
    field: "g1_fav_over_two_point_five",
    headerName: "G1 FAV o2.5",
    editable: true,
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  {
    field: "g1_fav_over_one_point_five_and_three_point_five",
    headerName: "G1 FAV o1.5/3.5",
    editable: true,
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  {
    field: "g1_dog_over_two_point_five",
    headerName: "G1 DOG o2.5",
    editable: true,
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  {
    field: "g1_dog_over_one_point_five_and_three_point_five",
    headerName: "G1 DOG o1.5/3.5",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  {
    field: "fav_over_two_point_five",
    headerName: "FAV o2.5",
    editable: true,
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  {
    field: "fav_over_one_point_five_and_three_point_five",
    headerName: "FAV o1.5/3.5",
    editable: true,
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  {
    field: "dog_over_two_point_five",
    headerName: "DOG o2.5",
    editable: true,
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  {
    field: "dog_over_one_point_five_and_three_point_five",
    headerName: "DOG o1.5/3.5",
    editable: true,
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  {
    field: "minus_200_or_higher_over_two_point_five",
    headerName: "(-200) or higher o2.5",
    editable: true,
    sortable: false,
    flex: 1,
    minWidth: 200,
  },
  {
    field: "minus_200_or_higher_over_three_point_five",
    headerName: "(-200) or higher o3.5",
    editable: true,
    sortable: false,
    flex: 1,
    minWidth: 200,
  },
];

const rows = [
  {
    id: 1,
    ou: "6.5",
    g1_fav_over_two_point_five: "0-0 / 0% o1.5",
    g1_fav_over_one_point_five_and_three_point_five: "0-0 / 0% o1.5",
    g1_dog_over_two_point_five: "0-0 / 0% o1.5",
    g1_dog_over_one_point_five_and_three_point_five: "0-0 / 0% o1.5",
    fav_over_two_point_five: "0-0 / 0% o1.5",
    fav_over_one_point_five_and_three_point_five: "0-0 / 0% o1.5",
    dog_over_two_point_five: "0-0 / 0% o1.5",
    dog_over_one_point_five_and_three_point_five: "0-0 / 0% o1.5",
    minus_200_or_higher_over_two_point_five: "0-0 / 0% o1.5",
    minus_200_or_higher_over_three_point_five: "0-0 / 0% o1.5",
  },
];

export default function Table() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        disableColumnMenu
        onCellEditStop={(cell) => console.log(cell)}
        sx={{
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            flexDirection: "row !important",
          },
        }}
      />
    </Box>
  );
}
