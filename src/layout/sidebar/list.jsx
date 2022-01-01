import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import './list.css'
const SideList = () => {
  
  return (
    <List sx={{marginTop: '2rem', opacity:'0.6'}}>
      {["Blog Dashboard", "Blog Post", "Add New Post", "Forms & Component","Tables"].map((text, index) => (
        <ListItem button key={text} className="sidebar-lst-itm">
          <ListItemIcon className="sidebar-lst-itm">
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default SideList;
