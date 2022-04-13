import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

const HomeTable = () => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell sx={{ color: "#747474", width: "150px" }}>
							Record ID
						</TableCell>
						<TableCell sx={{ color: "#747474", width: "150px" }}>
							Type
						</TableCell>
						<TableCell sx={{ color: "#747474", width: "150px" }}>
							Client ID
						</TableCell>
						<TableCell sx={{ color: "#747474", width: "150px" }}>
							Status
						</TableCell>
						<TableCell sx={{ color: "#747474", width: "150px" }}>
							Updated date
						</TableCell>
						<TableCell sx={{ color: "#747474", width: "150px" }}>
							Submitted date
						</TableCell>
						<TableCell
							sx={{ color: "#747474", fontWeight: "bold" }}
						>
							Summary
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow
						sx={{ backgroundColor: "rgba(0, 116, 189, 0.05)" }}
					>
						<TableCell
							sx={{ color: "#4A49CB", fontWeight: "bold" }}
						>
							10180540
						</TableCell>
						<TableCell>Sales call</TableCell>
						<TableCell>10180540</TableCell>
						<TableCell>Pending</TableCell>
						<TableCell>Today at 4:30pm</TableCell>
						<TableCell>Today at 4:30pm</TableCell>
						<TableCell>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Phasellus feugiat iaculis mi vitae mollis.
							Aliquam rhoncus quam nunc, ac tincidunt dolor
							iaculis in. Donec luctus quam at ipsum tincidunt
							feugiat eget a massa. Morbi auctor, risus ac
							venenatis blandit, sem sapien finibus turpis, vel
							scelerisque mauris neque in lacus. Sed dignissim
							fringilla dolor. Nulla ante est, dignissim nec
							cursus quis, convallis et est. Morbi tempus velit
							dolor, et lobortis ex ultrices ut.{" "}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default HomeTable;
