import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";

const SideNav = () => {
	return (
		<Drawer
			anchor="left"
			open={true}
			variant="persistent"
			sx={{ display: "flex", width: "200px" }}
			PaperProps={{ sx: { width: "200px" } }}
		>
			<List sx={{ paddingTop: "100px" }}>
				<ListItem>
					<ListItemButton component="a" href="/home">
						<HomeIcon color="action" />
						<ListItemText
							primary="HOME"
							sx={{ color: "#b6b6b6", paddingLeft: "15px" }}
						/>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton component="a" href="/">
						<DashboardIcon color="action" />
						<ListItemText
							primary="DASHBOARD"
							sx={{ color: "#b6b6b6", paddingLeft: "15px" }}
						/>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton component="a" href="/history">
						<HistoryIcon color="action" />
						<ListItemText
							primary="HISTORY"
							sx={{ color: "#b6b6b6", paddingLeft: "15px" }}
						/>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton component="a" href="/">
						<AnalyticsIcon color="action" />
						<ListItemText
							primary="ANALYTICS"
							sx={{ color: "#b6b6b6", paddingLeft: "15px" }}
						/>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton component="a" href="/">
						<SettingsIcon color="action" />
						<ListItemText
							primary="SETTINGS"
							sx={{ color: "#b6b6b6", paddingLeft: "15px" }}
						/>
					</ListItemButton>
				</ListItem>
			</List>
		</Drawer>
	);
};

export default SideNav;
