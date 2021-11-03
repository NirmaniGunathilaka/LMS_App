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
    alert(
      "Submitted:\n" +
        name +
        "\n" +
        description +
        "\n" +
        url +
        "\n" +
        videoName +
        "\n" +
        videoDuration +
        "\n" +
        driveLink
    );

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
      history.push("/Dashboard");
    });
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
        <h1 style={{ color: "red" }}>Add Course</h1>
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
          />
          <TextField
            id="outlined-basic"
            label="Course Description"
            required
            variant="filled"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <br />
          <b>Video Upload</b>
          <TextField
            id="outlined-basic"
            label="Video Name"
            required
            focused
            fullWidth
            value={videoName}
            onChange={(e) => setVideoName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Video URL"
            required
            color="secondary"
            focused
            fullWidth
            value={url}
            onChange={(e) => setURL(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Video Duration(min)"
            required
            variant="filled"
            fullWidth
            value={videoDuration}
            onChange={(e) => setVideoDuration(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Drive Link"
            required
            variant="filled"
            fullWidth
            value={driveLink}
            onChange={(e) => setDriveLink(e.target.value)}
          />
          <br />
          <br />
          <Button variant="contained" fullWidth>
            Add Quiz
          </Button>
          <br />
          <br />
          <Button
            type="submit"
            color="success"
            variant="contained"
            onClick={handleClick}
          >
            Submit
          </Button>
          <Button variant="contained" color="error" onClick={resetInputField}>
            Reset
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
