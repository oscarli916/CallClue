import { Button } from "@mui/material";

type IUploadButton = {
	uploadOnClickHandler: () => void;
};

const UploadButton = ({ uploadOnClickHandler }: IUploadButton) => {
	return (
		<Button
			style={{
				backgroundColor: "#4b48ca",
				color: "#c5d5fe",
				marginLeft: "10px",
			}}
			onClick={uploadOnClickHandler}
			variant="contained"
		>
			Upload
		</Button>
	);
};

export default UploadButton;
