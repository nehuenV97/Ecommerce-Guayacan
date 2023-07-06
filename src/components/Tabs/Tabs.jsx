import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const TabsComponent = () => {
  const [selected, setSelected] = React.useState('cells');
  console.log(selected);
  const handleChange = (_, value) => {
    setSelected(value);
  }

  const selectedSection = (value) => {
    switch (value) {
      case 'pilusos':
        return <ItemListContainer greeting={value}/>;
      case 'bolsos':
        return  <ItemListContainer greeting={value}/>;
      case 'cintos':
        return  <ItemListContainer greeting={value}/>;
      default:
        return <Box></Box>;
    }
  }

  return (
  <Box>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={selected} onChange={handleChange} aria-label="basic tabs example">
      <Tab label="Pilusos" value="pilusos" />
      <Tab label="Bolsos" value="bolsos" />
      <Tab label="Cintos" value="cintos" />
    </Tabs>
    </Box>
    <Box m={2}>
      { selectedSection(selected) }
    </Box>
  </Box>
  )
}

export default TabsComponent;