import styles from './prayer-tabs.module.css';
import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NakodaBhairavChalisa from '../nakoda-bhairav-chalisa/nakoda-bhairav-chalisa';
import AdityaHridayamStrotam from '../aditya-hridayam-strotam/aditya-hridayam-strotam';

/* eslint-disable-next-line */
export interface PrayerTabsProps {}

/* eslint-disable-next-line */
export interface TabsProps {}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export function PrayerTabs(props: PrayerTabsProps) {
  const [value, setValue] = React.useState(0);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles['tabs']}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Nakoda Bhairav Chalisa" {...a11yProps(0)} />
            <Tab label="Aditya Hridayam Strotam" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <NakodaBhairavChalisa />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AdityaHridayamStrotam />
        </TabPanel>
      </Box>
    </div>
  );
}

export default PrayerTabs;
