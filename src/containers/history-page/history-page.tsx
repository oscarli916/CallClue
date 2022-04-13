import { Grid } from "@mui/material";
import HistoryTable from "../../components/historytable";

const HistoryPage = () => {
	return (
		<Grid container pt={10}>
			<HistoryTable />
		</Grid>
	);
};

export default HistoryPage;
