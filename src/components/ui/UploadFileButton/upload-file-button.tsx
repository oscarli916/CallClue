import { Button } from "@mui/material";

const UploadFileButton = () => {
	return (
		<>
			<input hidden id="raised-button-file" multiple type="file" />
			<label htmlFor="raised-button-file">
				<Button
					component="span"
					style={{
						backgroundColor: "#4b48ca",
						color: "white",
					}}
					variant="contained"
				>
					Browse
				</Button>
			</label>
		</>
	);
};

export default UploadFileButton;
