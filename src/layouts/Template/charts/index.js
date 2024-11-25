import DashboardNavbar from "components/MDComponents/Navbars/DashboardNavbar";
import DashboardLayout from "components/MDComponents/LayoutContainers/DashboardLayout";
import Grid from "@mui/material/Grid2";
import MDBox from "components/MDBase/MDBox";
import ReportsBarChart from "components/MDComponents/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "components/MDComponents/Charts/LineCharts/ReportsLineChart";
import { useEffect, useState } from "react";
import { getAnalyticsDailySales, getAnalyticsWebsiteViews } from "util/APIHelper";
import ChannelsChart from "./components/ChannelsChart/ChannelsChart";

function ChartsExample() {
  const [websiteData, setWebsiteData] = useState({});
  const [salesData, setSalesData] = useState({});

  useEffect(() => {
    const runAsync = async () => {
      const websiteResponse = await getAnalyticsWebsiteViews();
      setWebsiteData(websiteResponse.data.message);

      const salesResponse = await getAnalyticsDailySales();
      setSalesData(salesResponse.data.message);

    };
    runAsync();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={3}>
        <Grid size={{xs:12, md:6, lg:4}}>
          <MDBox mt={3}>
            <ReportsBarChart
              color="info"
              title="website views"
              description="Last Campaign Performance"
              date="campaign sent 2 days ago"
              chart={websiteData}
            />
          </MDBox>
        </Grid>
        <Grid size={{xs:12, md:6, lg:4}}>
          <MDBox mt={3}>
            <ReportsLineChart
              color="success"
              title="daily sales"
              description={
                <>
                  (<strong>+15%</strong>) increase in today sales.
                </>
              }
              date="updated 4 min ago"
              chart={salesData}
            />
          </MDBox>
        </Grid>
        <Grid size={{xs:12, sm:6, lg:4}}>
          <ChannelsChart />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default ChartsExample;