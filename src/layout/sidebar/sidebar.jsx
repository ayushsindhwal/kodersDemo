import { Divider, Drawer, Fab, Typography } from "@mui/material";
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import EditIcon from '@mui/icons-material/Edit';
import List from "./list";
import './list.css'
const drawerWidth = 250;

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   }));
const Sidebar = () => {
  return (
    <Drawer
    className="sidebar"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',//to learn
        padding: "20px"
      },
    }}
    variant="permanent"
    anchor="left"
    open={false}
  >

  <Fab variant="extended">
  <AdbOutlinedIcon sx={{  color:"#007bff" }} />
  NOTION
</Fab>

<Divider  sx={{marginTop:'3px'}}/>

<List />


</Drawer>

  );
};

export default Sidebar;
