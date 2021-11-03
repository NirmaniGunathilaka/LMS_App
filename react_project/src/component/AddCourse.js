import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button } from "@mui/material";
import { color } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import APIService from "../service/APIService";
import history from "././history";

export default function AddCourse() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [url, setURL] = React.useState("");
  const [videoName, setVideoName] = React.useState("");
  const [videoDuration, setVideoDuration] = React.useState("");
  const [driveLink, setDriveLink] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if(name===""||description===""||url===""||videoName===""||videoDuration===""||driveLink==="")
    {
      alert("Fields are empty!!");
    }
    else{
      // alert(
      //   "Submitted:\n" +
      //     name +
      //     "\n" +
      //     description +
      //     "\n" +
      //     url +
      //     "\n" +
      //     videoName +
      //     "\n" +
      //     videoDuration +
      //     "\n" +
      //     driveLink
      // );
  
      // const course={name,duration,url,videoName,videoDuration,noteFile}
  
      let course = {
        name: name,
        description: description,
        notes: [{ drive_link: driveLink}],
        videos: [
          {
            name: videoName,
            url: url,
            duration: videoDuration,
          },
        ],
      };
  
      APIService.createCourse(course).then((res) => {
        console.log(res);
        if(res.data==="")
        {
          alert("Something went wrong..Try again later!!");
        }
        else{
          window.location.reload();
          history.push("/Admin/");
        }
        
      });
    }
    
  };

  // Reset Input Field handler
  const resetInputField = () => {
    setName("");
    setDescription("");
    setURL("");
    setVideoName("");
    setVideoDuration("");
    setDriveLink("");

  };

  // const clearInput = () => (e.target.value = "");

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 align="center" style={{ color: '#02706B' }}>Add Course</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            required
            label="Course Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            inputProps={{style: {fontSize: 14}}} // font size of input text
            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
          />
          <TextField
            id="outlined-basic"
            label="Course Description"
            required
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            inputProps={{style: {fontSize: 14}}} // font size of input text
            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
          />
          <br />
          <br />
          <h2 align="center" style={{ color: '#02706B' }}>Add Video Links</h2>
          <TextField
            id="outlined-basic"
            label="Video Name"
            required
            variant="outlined"
            fullWidth
            value={videoName}
            onChange={(e) => setVideoName(e.target.value)}
            inputProps={{style: {fontSize: 14}}} // font size of input text
            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
          />
          <TextField
            id="outlined-basic"
            label="Video URL"
            required
            variant="outlined"
            fullWidth
            value={url}
            onChange={(e) => setURL(e.target.value)}
            inputProps={{style: {fontSize: 14}}} // font size of input text
            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
          />
          <TextField
            id="outlined-basic"
            label="Video Duration(min)"
            required
            variant="outlined"
            fullWidth
            value={videoDuration}
            onChange={(e) => setVideoDuration(e.target.value)}
            inputProps={{style: {fontSize: 14}}} // font size of input text
            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
          />
          <br />
          <br />
          <h2 align="center" style={{ color: '#02706B' }}>Add Notes Drive Link</h2>
          <TextField
            id="outlined-basic"
            label="Drive Link"
            required
            variant="outlined"
            fullWidth
            value={driveLink}
            onChange={(e) => setDriveLink(e.target.value)}
            inputProps={{style: {fontSize: 14}}} // font size of input text
            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
          />
          <br />
          <br />
          <div align="center">
            {" "}
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              raised="true"
              size="medium"
            >
              <label style={{fontSize:'15px'}}>Submit</label>
            </Button>{" "}
            {" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={resetInputField}
              raised="true"
              size="medium"
            >
              <label style={{fontSize:'15px'}}>Reset</label>
            </Button>{" "}
          </div>
        </Box>
      </Paper>
    </Container>
  );
}
