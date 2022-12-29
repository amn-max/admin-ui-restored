

// Chakra imports
import { Box, Grid, SimpleGrid } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import General from "views/admin/profile/components/General";
import Notifications from "views/admin/profile/components/Notifications";
import Projects from "views/admin/profile/components/Projects";
import Storage from "views/admin/profile/components/Storage";
import Upload from "views/admin/profile/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import React from "react";
import Card from "components/card/Card";
import DataAdsTable from "./components/DataAdsTable";
import { columnsAdsData } from "../dataTables/variables/columnsData";
import tableDataAds from "views/admin/dataTables/variables/tableDataAds.json";
import CreateNewAds from "./components/CreateNewAds";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Ads = () => {
  return <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
  {/* Main Fields */}
  <Grid
    gap={{ base: "20px", xl: "20px" }}>
    <Card >
      <CreateNewAds />
    </Card>
    <Card>
    <Tabs variant='soft-rounded' isFitted >
  <TabList>
    <Tab>On Going Ads</Tab>
    <Tab>Completed Ads</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    <DataAdsTable columnsData={columnsAdsData}
          tableData={tableDataAds} title="On Going Ads"/>
    </TabPanel>
    <TabPanel>
    <DataAdsTable columnsData={columnsAdsData}
          tableData={tableDataAds.slice(0,2)} title=""/>
    </TabPanel>
    
  </TabPanels>
</Tabs>
    </Card>
    
  </Grid>
</Box>;
};

export default Ads;
