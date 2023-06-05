import './style.css'
import * as React from 'react'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { MobileTabs } from '../mobileTabs'

export default function Tabs({ tabList, tabPanel }) {
    const [value, setValue] = React.useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <div className='webTabs'>
                        <TabList onChange={handleChange}>
                            {tabList.map((e, i) => (
                                <Tab key={i} label={e} value={i + 1 + ''} />
                            ))}
                        </TabList>
                    </div>
                    <div className='mobileTabs'>
                        <MobileTabs tabList={tabList} />
                    </div>
                </Box>
                {tabPanel.map((e, i) => (
                    <TabPanel key={i} value={i + 1 + ''}>{e}</TabPanel>
                ))}
            </TabContext>
        </Box>
    )
}