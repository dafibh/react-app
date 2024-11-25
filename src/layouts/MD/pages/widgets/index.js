import { useMemo, useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid2";
import Icon from "@mui/material/Icon";

// MD React components
import MDBox from "components/MDBase/MDBox";
import MDTypography from "components/MDBase/MDTypography";

// MD React examples
import DashboardLayout from "components/MDComponents/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/MDComponents/Navbars/DashboardNavbar";
import Footer from "components/MDComponents/Footer";
import MiniStatisticsCard from "components/MDComponents/Cards/StatisticsCards/MiniStatisticsCard";
import ProgressLineChart from "components/MDComponents/Charts/LineCharts/ProgressLineChart";
import DefaultInfoCard from "components/MDComponents/Cards/InfoCards/DefaultInfoCard";
import MasterCard from "components/MDComponents/Cards/MasterCard";
import MiniInfoCard from "components/MDComponents/Cards/InfoCards/MiniInfoCard";
import ControllerCard from "components/MDComponents/Cards/ControllerCard";
import Calendar from "components/MDComponents/Calendar";
import CategoriesList from "components/MDComponents/Lists/CategoriesList";

// Widgets page components
import Steps from "layouts/Template/cards/components/Steps/Steps";
import FullBody from "layouts/Template/cards/components/FullBody/FullBody";
import MediaPlayer from "layouts/Template/cards/components/MediaPlayer/MediaPlayer";
import OrdersOverview from "layouts/Template/cards/components/OrdersOverview/OrdersOverview";
import UpcomingEvents from "layouts/Template/cards/components/UpcomingEvents/UpcomingEvents";
import Chart from "layouts/MD/pages/widgets/components/Chart";

// Data
// import progressLineChartData from "layouts/pages/widgets/data/progressLineChartData";
// import calendarEventsData from "layouts/pages/widgets/data/calendarEventsData";
// import categoriesListData from "layouts/pages/widgets/data/categoriesListData";
// import caloriesChartData from "layouts/pages/widgets/data/caloriesChartData";

// API
import {
  getWidgetTasks,
  getWidgetsCalories,
  getWidgetCalendar,
  getWidgetsCategories,
} from "util/APIHelper";

function Widgets() {
  const [progressLineChartData, setProgressLineChartData] = useState({});
  const [calendarEventsData, setCalendarEventsData] = useState([]);
  const [caloriesChartData, setCaloriesChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const runAsync = async () => {
      const progressLineChartDataResponse = await getWidgetTasks();
      setProgressLineChartData(progressLineChartDataResponse.data.message);
      const calendarEventsDataResponse = await getWidgetCalendar();
      setCalendarEventsData(calendarEventsDataResponse.data.message);
      const caloriesChartDataResponse = await getWidgetsCalories();
      setCaloriesChartData(caloriesChartDataResponse.data.message);
    };
    runAsync();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid size={{xs:12, sm:6, lg:4}}>
              removed
            </Grid>
            <Grid size={{xs:12, lg:8}}>
              <ProgressLineChart
                icon="date_range"
                title="Tasks"
                count={480}
                progress={60}
                height="13.375rem"
                chart={progressLineChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid size={{xs:12, md:6, lg:3}}>
            </Grid>
            <Grid
              item
              size={{xs:12, sm:3, lg:5}}
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
            >
              removed
            </Grid>
            <Grid size={{xs:12, lg:4}}>
              removed
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid size={{xs:12, md:6, lg:3}}>
              removed
            </Grid>
            <Grid size={{xs:12, md:6, lg:2}}>
              removed
            </Grid>
            <Grid size={{xs:12, lg:3}}>
              <Chart
                title="calories"
                count={97}
                percentage={{ color: "success", label: "+5%" }}
                chart={caloriesChartData}
              />
            </Grid>
            <Grid size={{xs:12, md:6, lg:2}}>
              removed
            </Grid>
            <Grid size={{xs:12, md:6, lg:2}}>
              removed
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          <Grid size={{xs:12, lg:5}}>
            removed
          </Grid>
          <Grid size={{xs:12, lg:3}}>
            <MDBox mb={3}>
              removed
            </MDBox>
            removed
          </Grid>
          <Grid size={{xs:12, lg:4}}>
            removed
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Widgets;
