import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// <<----- Icons ----->>
import HomeIcon from "@mui/icons-material/Home";
import LayersIcon from "@mui/icons-material/Layers";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { category, height, sidebar, width } from "../../redux/reducers/layout";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Sidebar() {
  const state = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (state.width >= 1024) {
      dispatch(sidebar(false));
      dispatch(category(true))
    }
  }, [state.width, dispatch]);

  const updateDimensions = () => {
    dispatch(width(window.innerWidth));
    dispatch(height(window.innerHeight));
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(sidebar(open));
  };

  const menus = [
    {
      name: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      name: "Pages",
      icon: <LayersIcon />,
      link: "/pages",
    },
    {
      name: "User Account",
      icon: <AccountCircleIcon />,
      link: "/account",
    },
    {
      name: "Vendor Account",
      icon: <ContactPageIcon />,
      link: "/vendor",
    },
    {
      name: "Track My Order",
      icon: <MoveToInboxIcon />,
      link: "/order",
    },
    {
      name: "Contact",
      icon: <ContactsRoundedIcon />,
      link: "/contact",
    },
  ];

  return (
    <>
      <Drawer
        className="lg:hidden"
        anchor={"left"}
        open={state.sidebar}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="flex justify-end pt-3 pr-3">
            <span
              onClick={() => dispatch(sidebar(false))}
              className="cursor-pointer text-gray-700 hover:text-gray-500"
            >
              <CloseIcon />
            </span>
          </div>
          {menus.map((data, idx) => (
            <List key={idx}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon className="hover:text-primary">
                    {data?.icon}
                  </ListItemIcon>
                  <Link to={data?.link} className="hover:text-gray-600">
                    <ListItemText primary={data?.name} />
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          ))}
          <Divider />
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar;
