import React,{useState} from 'react'
import { Box,IconButton,Typography,useTheme } from '@mui/material';
import {ProSidebar,Menu,MenuItem} from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css";
import {tokens} from '../../theme';
import {Link} from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';


const Item = ({title,to,icon,selected,setSelected})=>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem 
      icon={icon} 
      active={selected===title} 
      onClick={()=>setSelected(title)}
      style={{color:colors.grey[100]}}
      >
      <Typography>{title}</Typography>
      <Link to={to}/>
    </MenuItem>
  )
}

const SideBar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed,setIsCollapsed] = useState(false);
  const [selected,setSelected] = useState("Dashboard");
  
  return (
    <Box sx={{
      "& .pro-sidebar-inner":{
        background:`${colors.primary[400]} !important`,
      },
      "& .pro-icon-wrapper":{
        backgroundColor:"transparent !important",
      },
      "& .pro-inner-item":{
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover":{
        color:"#868dfb !important",
      },
      "& .pro-menu-item.active":{
        color:"#6870fa !important",
      }
    }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO and MENU ICON */}
          <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)}
            icon={isCollapsed?<MenuOutlinedIcon/>:undefined}
            style={{
              margin:"10px 0px 20px 0px",
              color:colors.grey[100]
            }}
          >
            {
              !isCollapsed && (
                <Box display="flex" alignItems='center' justifyContent='space-between' ml='15px'>
                  <Typography variant='h3' color={colors.grey[100]}>ADMINEX</Typography>
                  <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon/>
                  </IconButton>
                </Box>
              )
            }
          </MenuItem>
          {/* USER */}
          {
            !isCollapsed && (
              <Box mb='20px'>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <img alt='profile-pic' src='https://randomuser.me/api/portraits/women/67.jpg' width='70px' height='70px' style={{
                    cursor:'pointer',
                    borderRadius:'50%'
                  }}></img>
                </Box>
                <Box textAlign='center'>
                  <Typography variant="h4" mt="10px" color={colors.grey[100]} fontWeight="bold">Ray Nath</Typography>
                  <Typography variant='h5' color={colors.greenAccent[500]}>Admin</Typography>
                </Box>
              </Box>
            )
          }

          {/* Menu Items */}
          <Box paddingLeft={isCollapsed?undefined:'10%'}>
            <Item 
              title="Dashboard" 
              to='/'
              selected={selected}
              setSelected={setSelected}
              icon={<HomeOutlinedIcon/>}
             />
            <Typography
              variant='h6'
              color={colors.greenAccent[500]}
              sx={{
                margin:"10px 0px 5px 20px"
              }}
            >
              Data
            </Typography>

             <Item 
              title="Manage Team" 
              to='/team'
              selected={selected}
              setSelected={setSelected}
              icon={<PeopleOutlinedIcon/>}
             />

             <Item 
              title="Contacts" 
              to='/contacts'
              selected={selected}
              setSelected={setSelected}
              icon={<ContactsOutlinedIcon/>}
             />

             <Item 
              title="Invoices Balances" 
              to='/invoices'
              selected={selected}
              setSelected={setSelected}
              icon={<ReceiptOutlinedIcon/>}
             />

            <Typography
              variant='h6'
              color={colors.greenAccent[500]}
              sx={{
                margin:"10px 0px 5px 20px"
              }}
            >
              Pages
            </Typography>

             <Item 
              title="Profile Form" 
              to='/form'
              selected={selected}
              setSelected={setSelected}
              icon={<PersonOutlinedIcon/>}
             />

             <Item 
              title="Calendar" 
              to='/calendar'
              selected={selected}
              setSelected={setSelected}
              icon={<CalendarTodayOutlinedIcon/>}
             />

             <Item 
              title="FAQ Page" 
              to='/faq'
              selected={selected}
              setSelected={setSelected}
              icon={<HelpOutlinedIcon/>}
             />

            <Typography
              variant='h6'
              color={colors.greenAccent[500]}
              sx={{
                margin:"10px 0px 5px 20px"
              }}
            >
              Charts
            </Typography>

             <Item 
              title="Bar Chart" 
              to='/bar'
              selected={selected}
              setSelected={setSelected}
              icon={<BarChartOutlinedIcon/>}
             />

             <Item 
              title="Pie Chart" 
              to='/pie'
              selected={selected}
              setSelected={setSelected}
              icon={<PieChartOutlineOutlinedIcon/>}
             />

            <Item 
              title="Line Chart" 
              to='/line'
              selected={selected}
              setSelected={setSelected}
              icon={<TimelineOutlinedIcon/>}
             />

              <Item 
              title="Geography Chart" 
              to='/geography'
              selected={selected}
              setSelected={setSelected}
              icon={<MapOutlinedIcon/>}
             />

          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default SideBar;