// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// MD React components
import MDBox from "components/MDBase/MDBox";
import MDTypography from "components/MDBase/MDTypography";

// MD React examples
import SalesTable from "components/MDComponents/Tables/SalesTable";

// Data
import salesTableData from "layouts/MD/dashboards/analytics/components/SalesByCountry/data/salesTableData";

function SalesByCountry() {
  return (
    <Card sx={{ width: "100%" }}>
      <MDBox display="flex">
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          variant="gradient"
          bgColor="success"
          color="white"
          shadow="md"
          borderRadius="xl"
          ml={3}
          mt={-2}
        >
          <Icon fontSize="medium" color="inherit">
            language
          </Icon>
        </MDBox>
        <MDTypography variant="h6" sx={{ mt: 2, mb: 1, ml: 2 }}>
          Sales by Country
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <SalesTable rows={salesTableData} shadow={false} />
      </MDBox>
    </Card>
  );
}

export default SalesByCountry;
