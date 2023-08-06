import { Container, Grid } from "@mui/material";
import "./App.css";
import BasicTable from "./Table";

function App() {
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item>
          <h2>Model Project</h2>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item sx={{ overflow: "auto" }}>
          <BasicTable />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
