import { Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import HomeTable from "../../components/hometable";
import ExportDataButton from "../../components/ui/ExportDataButton";
import ResetButton from "../../components/ui/ResetButton";
import SaveButton from "../../components/ui/SaveButton";
import UploadButton from "../../components/ui/UploadButton";
import UploadFileButton from "../../components/ui/UploadFileButton";

const HomePage = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const uploadOnClickHandler = () => setModalOpen(true);

	return (
		<div style={{ width: "100%" }}>
			<Grid container pt={5}>
				<Grid item xs={8}></Grid>
				<Grid item xs={4}>
					<ExportDataButton />
					<UploadButton uploadOnClickHandler={uploadOnClickHandler} />
				</Grid>
			</Grid>

			<Grid container pt={5}>
				<HomeTable />
			</Grid>
			<Modal open={modalOpen} onClose={() => setModalOpen(false)}>
				<Box
					sx={{
						backgroundColor: "white",
						border: "2px solid white",
						borderRadius: "10px",
						left: "50%",
						p: 4,
						position: "absolute" as "absolute",
						top: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
					}}
				>
					<Grid container>
						<Grid item sx={{ textAlign: "center" }} xs={12}>
							<h3>Upload new Record</h3>
						</Grid>
					</Grid>
					<Grid container pt={5}>
						<Grid item sx={{ textAlign: "center" }} xs={12}>
							<UploadFileButton />
						</Grid>
					</Grid>
					<Grid container pt={8}>
						<Grid item xs={6}></Grid>
						<Grid item sx={{ textAlign: "center" }} xs={1}>
							<ResetButton />
						</Grid>
						<Grid item xs={2}></Grid>
						<Grid item sx={{ textAlign: "center" }} xs={1}>
							<SaveButton />
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</div>
	);
};

export default HomePage;
