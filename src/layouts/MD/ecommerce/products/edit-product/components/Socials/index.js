// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";

// MD React components
import MDBox from "components/MDBase/MDBox";
import MDTypography from "components/MDBase/MDTypography";

// EditProduct page components
import FormField from "layouts/MD/ecommerce/products/edit-product/components/FormField";

function Socials() {
  return (
    <Card>
      <MDBox p={3}>
        <MDTypography variant="h5" fontWeight="bold">
          Socials
        </MDTypography>
        <MDBox mt={1}>
          <Grid container spacing={2}>
            <Grid size={{xs:12}}>
              <FormField type="text" label="Shoppify Handle" defaultValue="@soft" />
            </Grid>
            <Grid size={{xs:12}}>
              <FormField type="text" label="Facebook Account" defaultValue="https://..." />
            </Grid>
            <Grid size={{xs:12}}>
              <FormField type="text" label="Instagram Account" defaultValue="https://..." />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Socials;
