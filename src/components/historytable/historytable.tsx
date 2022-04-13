import {
	Checkbox,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

interface RecordCell {
	recordID: string;
	type: string;
	clientID: string;
	status: string;
	updatedDate: string;
	submittedDate: string;
}

const recordCells: RecordCell[] = [
	{
		recordID: "10000001",
		type: "Sales call",
		clientID: "10000001",
		status: "Pending",
		updatedDate: "Today at 4:30 pm",
		submittedDate: "Today at 4:30 pm",
	},
	{
		recordID: "10000002",
		type: "Transasction call",
		clientID: "10000002",
		status: "View report",
		updatedDate: "Today at 8:11 am",
		submittedDate: "Today at 8:10 am",
	},
	{
		recordID: "10000003",
		type: "Enquiry",
		clientID: "10000003",
		status: "View report",
		updatedDate: "Today at 6:30 am",
		submittedDate: "Today at 6:29 am",
	},
	{
		recordID: "10000004",
		type: "Sales call",
		clientID: "10000004",
		status: "View report",
		updatedDate: "Yesterday at 8:45 pm",
		submittedDate: "Yesterday at 8:14 pm",
	},
	{
		recordID: "10000005",
		type: "Application issues",
		clientID: "10000005",
		status: "Failed",
		updatedDate: "Yesterday at 3:18 pm",
		submittedDate: "Yesterday at 10:20 am",
	},
];

const HistoryTable = () => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell padding="checkbox">
							<Checkbox color="secondary" />
						</TableCell>
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
					</TableRow>
				</TableHead>
				<TableBody>
					{recordCells.map((row) => (
						<TableRow key={row.recordID}>
							<TableCell padding="checkbox">
								<Checkbox color="secondary" />
							</TableCell>
							<TableCell
								sx={{ color: "#4A49CB", fontWeight: "bold" }}
							>
								{row.recordID}
							</TableCell>
							<TableCell>{row.type}</TableCell>
							<TableCell>{row.clientID}</TableCell>
							{row.status === "View report" ? (
								<TableCell
									sx={{
										color: "#4A49CB",
										fontWeight: "bold",
									}}
								>
									{row.status}
								</TableCell>
							) : (
								<TableCell>{row.status}</TableCell>
							)}

							<TableCell>{row.updatedDate}</TableCell>
							<TableCell>{row.submittedDate}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default HistoryTable;
