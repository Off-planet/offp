import { React, useState, useEffect } from "react";
import {
  FormControl,
  TextField,
  Grid,
  Paper,
  Typography,
  InputLabel,
  Input,
  Button,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormGroup,
  Checkbox,
} from "@mui/material";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import Filter7Icon from "@mui/icons-material/Filter7";
import db from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

import first from "./assets/1.svg";
import second from "./assets/2.svg";
import third from "./assets/3.svg";
import fourth from "./assets/4.svg";
import fifth from "./assets/5.svg";
import sixth from "./assets/6.svg";
import seventh from "./assets/8.svg";

import { isMobile } from "react-device-detect";

const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [q1, setQ1] = useState("Farting Confetti");
  const [q2, setQ2] = useState([]);
  const [q3, setQ3] = useState("Agree");
  const [q4, setQ4] = useState("Yes");
  const [q5, setQ5] = useState("");
  const [q6, setQ6] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [cb1, setCb1] = useState(false);
  const [cb2, setCb2] = useState(false);
  const [cb3, setCb3] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const images = [first, second, third, fourth, fifth, sixth, seventh];

  const answerSecondQuestionA = () => {
    if (cb1) {
      setCb1(false);
    } else {
      setCb1(true);
    }
    const answer = "Kendrick Lamar";
    //If this answer is already checked
    if (q2.includes(answer)) {
      let newArray = [];
      console.log(q2);
      for (let i = 0; i < q2.length; i++) {
        if (q2[i] !== answer) {
          newArray.push(q2[i]);
        }
      }
      console.log(newArray);
      setQ2(newArray);
    } else {
      //If the answer is not already checked
      let newArray = q2;
      newArray.push(answer);
      setQ2(newArray);
    }
  };

  const answerSecondQuestionB = () => {
    if (cb2) {
      setCb2(false);
    } else {
      setCb2(true);
    }
    const answer = "Tyler Creator";
    //If this answer is already checked
    if (q2.includes(answer)) {
      let newArray = [];
      for (let i = 0; i < q2.length; i++) {
        if (q2[i] !== answer) {
          newArray.push(q2[i]);
        }
      }
      setQ2(newArray);
    } else {
      //If the answer is not already checked
      let newArray = q2;
      newArray.push(answer);
      setQ2(newArray);
    }
  };

  const answerSecondQuestionC = () => {
    if (cb3) {
      setCb3(false);
    } else {
      setCb3(true);
    }
    const answer = "Andre 3000";
    //If this answer is already checked
    if (q2.includes(answer)) {
      let newArray = [];
      for (let i = 0; i < q2.length; i++) {
        if (q2[i] !== answer) {
          newArray.push(q2[i]);
        }
      }
      setQ2(newArray);
    } else {
      //If the answer is not already checkedey
      let newArray = q2;
      newArray.push(answer);
      setQ2(newArray);
    }
  };

  const handleTextFieldChangeQ5 = (e) => {
    if (q5.length < 280) {
      setQ5(e.target.value);
    }
  };

  const handleTextFieldChangeQ6 = (e) => {
    if (q6.length < 280) {
      setQ6(e.target.value);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const generateReport = async () => {
    const res = {
      q1: q1,
      q2: q2,
      q3: q3,
      q4: q4,
      q5: q5,
      q6: q6,
    };
    const database = db;
    await setDoc(doc(database, "Applications", name + " " + surname), {
      name: name,
      surname: surname,
      email: email,
      question1: q1,
      question2: q2,
      question3: q3,
      question4: q4,
      question5: q5,
      question6: q6,
    });
  };

  if (isMobile) {
    return (
      <div
        style={{
          backgroundImage: `url(${images[pageNumber - 1]})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        {!isSubmitted && (
          <>
            <Grid container justifyContent={"center"}>
              {/* First Page */}
              {pageNumber === 1 && (
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ minHeight: "70vh" }}
                >
                  <Grid
                    item
                    sx={{
                      width: "50%",
                      height: "50vw",
                      marginTop: "25%",
                    }}
                  >
                    <FormControl sx={{ marginLeft: "11%" }}>
                      <InputLabel htmlFor="name" sx={{ color: "#FFCC01" }}>
                        Name
                      </InputLabel>
                      <Input
                        id="name-input"
                        aria-describedby="name"
                        onChange={handleName}
                        value={name}
                      />
                    </FormControl>
                    <FormControl sx={{ marginLeft: "11%", marginTop: "20%" }}>
                      <InputLabel htmlFor="name" sx={{ color: "#FFCC01" }}>
                        Surname
                      </InputLabel>
                      <Input
                        id="surname-input"
                        aria-describedby="surname"
                        onChange={handleSurname}
                        value={surname}
                      />
                    </FormControl>
                    <Grid>
                      <FormControl
                        sx={{
                          marginLeft: "11%",
                          paddingBottom: "5%",
                          marginTop: "20%",
                        }}
                      >
                        <InputLabel htmlFor="name" sx={{ color: "#FFCC01" }}>
                          Email
                        </InputLabel>
                        <Input
                          sx={{ width: "150%" }}
                          id="email-input"
                          aria-describedby="email"
                          onChange={handleEmail}
                          value={email}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              )}
              {/* Second Page */}
              {pageNumber === 2 && (
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ minHeight: "70vh" }}
                >
                  <Grid
                    item
                    sx={{
                      width: "50%",
                      height: "50vw",
                      marginTop: "25%",
                    }}
                  >
                    <Typography
                      item
                      variant={"h5"}
                      gutterBottom
                      sx={{
                        paddingLeft: "11%",
                        paddingTop: "5%",
                        paddingBottom: "5%",
                        color: "#FFCC01",
                      }}
                    >
                      Either or...
                    </Typography>
                    <FormControl
                      sx={{
                        marginLeft: "11%",
                        paddingBottom: "5%",
                        marginTop: "5%",
                      }}
                    >
                      <FormLabel id="q1" sx={{ color: "#FFCC01" }}>
                        Which one would you choose
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="q1-label"
                        defaultValue={q1 === "" ? "Farting Confetti" : q1}
                        name="q1-raio"
                        sx={{ color: "#FFCC01" }}
                      >
                        <FormControlLabel
                          value="Farting Confetti"
                          control={<Radio />}
                          label="Farting Confetti"
                          onClick={() => {
                            setQ1("Farting Confetti");
                          }}
                        />
                        <FormControlLabel
                          value={"Farting burp glitter"}
                          control={<Radio />}
                          label="Farting burp glitter"
                          onClick={() => {
                            setQ1("Farting burp glitter");
                          }}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              )}
              {/* Third Page */}
              {pageNumber === 3 && (
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ minHeight: "70vh" }}
                >
                  <Grid
                    item
                    sx={{
                      width: "50%",
                      height: "50vw",
                      marginTop: "25%",
                    }}
                  >
                    <Typography
                      item
                      variant={"h5"}
                      gutterBottom
                      sx={{
                        paddingLeft: "11%",
                        paddingTop: "5%",
                        paddingBottom: "5%",
                        color: "#FFCC01",
                      }}
                    >
                      Either or... (can select both, no more than 2)
                    </Typography>
                    <FormGroup
                      sx={{
                        marginLeft: "11%",
                        paddingBottom: "5%",
                        marginTop: "5%",
                        color: "#FFCC01",
                      }}
                    >
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Kendrick Lamar"
                        onClick={answerSecondQuestionA}
                        checked={cb1}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Tyler Creator"
                        onClick={answerSecondQuestionB}
                        checked={cb2}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Andre 3000"
                        onClick={answerSecondQuestionC}
                        checked={cb3}
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
              )}
              {/* Fourth Page */}
              {pageNumber === 4 && (
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ minHeight: "70vh" }}
                >
                  <Grid
                    item
                    sx={{
                      width: "50%",
                      height: "50vw",
                      marginTop: "25%",
                    }}
                  >
                    <Typography
                      item
                      variant={"h5"}
                      gutterBottom
                      sx={{
                        paddingLeft: "11%",
                        paddingTop: "5%",
                        paddingBottom: "5%",
                        color: "#FFCC01",
                      }}
                    >
                      Agree or Disagree...
                    </Typography>
                    <FormControl
                      sx={{
                        marginLeft: "11%",
                        paddingBottom: "5%",
                        marginTop: "5%",
                      }}
                    >
                      <FormLabel id="q3" sx={{ color: "#FFCC01" }}>
                        Chris Rick deserved to be slapped
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="q3-label"
                        defaultValue={q3 === "" ? "Agree" : q3}
                        name="q3-raio"
                        sx={{ color: "#FFCC01" }}
                      >
                        <FormControlLabel
                          value="Agree"
                          control={<Radio />}
                          label="Agree"
                          onClick={() => {
                            setQ3("Agree");
                          }}
                        />
                        <FormControlLabel
                          value={"Disagree"}
                          control={<Radio />}
                          label="Disagree"
                          onClick={() => {
                            setQ3("Disagree");
                          }}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              )}
              {/* Fifth Page */}
              {pageNumber === 5 && (
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ minHeight: "70vh" }}
                >
                  <Grid
                    item
                    sx={{
                      width: "50%",
                      height: "50vw",
                      marginTop: "25%",
                    }}
                  >
                    <Typography
                      item
                      variant={"h5"}
                      gutterBottom
                      sx={{
                        paddingLeft: "11%",
                        paddingTop: "5%",
                        paddingBottom: "5%",
                        color: "#FFCC01",
                      }}
                    >
                      Agree or Disagree...
                    </Typography>
                    <FormControl
                      sx={{
                        marginLeft: "11%",
                        paddingBottom: "5%",
                        marginTop: "5%",
                      }}
                    >
                      <FormLabel id="q4" sx={{ color: "#FFCC01" }}>
                        A taco is a sandwich
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="q4-label"
                        defaultValue={q4 === "" ? "Yes" : q4}
                        name="q4-raio"
                        sx={{ color: "#FFCC01" }}
                      >
                        <FormControlLabel
                          value="Yes"
                          control={<Radio />}
                          label="Yes"
                          onClick={() => {
                            setQ4("Yes");
                          }}
                        />
                        <FormControlLabel
                          value={"No"}
                          control={<Radio />}
                          label="No"
                          onClick={() => {
                            setQ4("No");
                          }}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              )}
              {/* Sixth Page */}
              {pageNumber === 6 && (
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ minHeight: "70vh" }}
                >
                  <Grid
                    item
                    sx={{
                      width: "50%",
                      height: "50vw",
                      marginTop: "10%",
                    }}
                  >
                    <Typography
                      item
                      variant={"body"}
                      gutterBottom
                      sx={{
                        paddingLeft: "11%",
                        paddingTop: "5%",
                        color: "#FFCC01",
                      }}
                    >
                      What's a production or artist that inspires you & why?
                    </Typography>
                    <TextField
                      id="standard-multiline-static"
                      label="Max 280 characters"
                      multiline
                      rows={4}
                      variant="standard"
                      sx={{
                        marginLeft: "11%",
                        width: "100%",
                        paddingBottom: "10%",
                      }}
                      onChange={handleTextFieldChangeQ5}
                      value={q5}
                      InputLabelProps={{
                        style: { color: "#FFCC01" },
                      }}
                    />
                  </Grid>
                </Grid>
              )}
              {/* Seventh Page */}
              {pageNumber === 7 && (
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ minHeight: "70vh" }}
                >
                  <Grid
                    item
                    sx={{
                      width: "50%",
                      height: "50vw",
                      marginTop: "10%",
                    }}
                  >
                    <Typography
                      item
                      variant={"body"}
                      gutterBottom
                      sx={{
                        paddingLeft: "11%",
                        paddingTop: "5%",
                        color: "#FFCC01",
                      }}
                    >
                      What was the first album you ever bought, or first concert
                      you ever went to?
                    </Typography>
                    <TextField
                      id="standard-multiline-static"
                      label="Max 280 characters"
                      multiline
                      rows={4}
                      variant="standard"
                      sx={{
                        paddingBottom: "5%",
                        width: "100%",
                      }}
                      onChange={handleTextFieldChangeQ6}
                      value={q6}
                      InputLabelProps={{
                        style: { color: "#FFCC01" },
                      }}
                    />
                  </Grid>
                </Grid>
              )}
              {/* Page Numbers */}
              <Grid
                container
                direction={"row"}
                spacing={1}
                justifyContent={"space-evenly"}
                width={"75%"}
              >
                <Grid
                  onClick={() => {
                    setPageNumber(1);
                  }}
                  color={pageNumber === 1 && "#16DF98"}
                >
                  <Filter1Icon />
                </Grid>
                <Grid
                  onClick={() => {
                    setPageNumber(2);
                  }}
                  color={pageNumber === 2 && "#16DF98"}
                >
                  <Filter2Icon />
                </Grid>
                <Grid
                  onClick={() => {
                    setPageNumber(3);
                  }}
                  color={pageNumber === 3 && "#16DF98"}
                >
                  <Filter3Icon />
                </Grid>
                <Grid
                  onClick={() => {
                    setPageNumber(4);
                  }}
                  color={pageNumber === 4 && "#16DF98"}
                >
                  <Filter4Icon />
                </Grid>
                <Grid
                  onClick={() => {
                    setPageNumber(5);
                  }}
                  color={pageNumber === 5 && "#16DF98"}
                >
                  <Filter5Icon />
                </Grid>
                <Grid
                  onClick={() => {
                    setPageNumber(6);
                  }}
                  color={pageNumber === 6 && "#16DF98"}
                >
                  <Filter6Icon />
                </Grid>
                <Grid
                  onClick={() => {
                    setPageNumber(7);
                  }}
                  color={pageNumber === 7 && "#16DF98"}
                >
                  <Filter7Icon />
                </Grid>
              </Grid>
            </Grid>
            {/* Submit Button */}
            <Grid
              container
              direction={"row"}
              justifyContent={"center"}
              sx={{ marginTop: "30px" }}
            >
              <Grid item>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => {
                    // generateReport();
                    setIsSubmitted(true);
                  }}
                  sx={{ backgroundColor: "#16DF98", color: "black" }}
                >
                  Submit Form
                </Button>
              </Grid>
            </Grid>
          </>
        )}
        {isSubmitted && (
          <Grid container justifyContent={"center"}>
            <Paper
              item
              elevation={24}
              sx={{
                width: "50%",
                height: "20vw",
                marginTop: "20%",
                backgroundColor: "#16DF98",
                borderColor: "black",
                borderStyle: "solid",
              }}
            >
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                  <Typography
                    item
                    variant={"h3"}
                    gutterBottom
                    sx={{ paddingLeft: "11%", paddingTop: "5%" }}
                  >
                    Your application has submitted!
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        )}
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundImage: `url(${images[pageNumber - 1]})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        {!isSubmitted && (
          <>
            <Grid container justifyContent={"center"}>
              {/* First Page */}
              {pageNumber === 1 && (
                <Paper
                  item
                  elevation={24}
                  sx={{
                    width: "50%",
                    height: "20vw",
                    marginTop: "20%",
                    backgroundColor: "#16DF98",
                    borderColor: "black",
                    borderStyle: "solid",
                  }}
                >
                  <Typography
                    item
                    variant={"h5"}
                    gutterBottom
                    sx={{
                      paddingLeft: "11%",
                      paddingTop: "5%",
                      paddingBottom: "5%",
                    }}
                  >
                    Personal Information
                  </Typography>
                  <FormControl sx={{ marginLeft: "11%" }}>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input
                      id="name-input"
                      aria-describedby="name"
                      onChange={handleName}
                      value={name}
                    />
                  </FormControl>
                  <FormControl sx={{ marginLeft: "11%" }}>
                    <InputLabel htmlFor="name">Surname</InputLabel>
                    <Input
                      id="surname-input"
                      aria-describedby="surname"
                      onChange={handleSurname}
                      value={surname}
                    />
                  </FormControl>
                  <Grid>
                    <FormControl
                      sx={{
                        marginLeft: "11%",
                        paddingBottom: "5%",
                        marginTop: "5%",
                      }}
                    >
                      <InputLabel htmlFor="name">Email</InputLabel>
                      <Input
                        sx={{ width: "250%" }}
                        id="email-input"
                        aria-describedby="email"
                        onChange={handleEmail}
                        value={email}
                      />
                    </FormControl>
                  </Grid>
                </Paper>
              )}
              {/* Second Page */}
              {pageNumber === 2 && (
                <Paper
                  item
                  elevation={24}
                  sx={{
                    width: "50%",
                    height: "20vw",
                    marginTop: "20%",
                    backgroundColor: "#16DF98",
                    borderColor: "black",
                    borderStyle: "solid",
                  }}
                >
                  <Typography
                    item
                    variant={"h5"}
                    gutterBottom
                    sx={{
                      paddingLeft: "11%",
                      paddingTop: "5%",
                      paddingBottom: "5%",
                    }}
                  >
                    Either or...
                  </Typography>
                  <FormControl
                    sx={{
                      marginLeft: "11%",
                      paddingBottom: "5%",
                      marginTop: "5%",
                    }}
                  >
                    <FormLabel id="q1">Which one would you choose</FormLabel>
                    <RadioGroup
                      aria-labelledby="q1-label"
                      defaultValue={q1 === "" ? "Farting Confetti" : q1}
                      name="q1-raio"
                    >
                      <FormControlLabel
                        value="Farting Confetti"
                        control={<Radio />}
                        label="Farting Confetti"
                        onClick={() => {
                          setQ1("Farting Confetti");
                        }}
                      />
                      <FormControlLabel
                        value={"Farting burp glitter"}
                        control={<Radio />}
                        label="Farting burp glitter"
                        onClick={() => {
                          setQ1("Farting burp glitter");
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              )}
              {/* Third Page */}
              {pageNumber === 3 && (
                <Paper
                  item
                  elevation={24}
                  sx={{
                    width: "50%",
                    height: "20vw",
                    marginTop: "20%",
                    backgroundColor: "#16DF98",
                    borderColor: "black",
                    borderStyle: "solid",
                  }}
                >
                  <Typography
                    item
                    variant={"h5"}
                    gutterBottom
                    sx={{
                      paddingLeft: "11%",
                      paddingTop: "5%",
                      paddingBottom: "5%",
                    }}
                  >
                    Either or... (can select both, no more than 2)
                  </Typography>
                  <FormGroup
                    sx={{
                      marginLeft: "11%",
                      paddingBottom: "5%",
                      marginTop: "5%",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Kendrick Lamar"
                      onClick={answerSecondQuestionA}
                      checked={cb1}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Tyler Creator"
                      onClick={answerSecondQuestionB}
                      checked={cb2}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Andre 3000"
                      onClick={answerSecondQuestionC}
                      checked={cb3}
                    />
                  </FormGroup>
                </Paper>
              )}
              {/* Fourth Page */}
              {pageNumber === 4 && (
                <Paper
                  item
                  elevation={24}
                  sx={{
                    width: "50%",
                    height: "20vw",
                    marginTop: "20%",
                    backgroundColor: "#16DF98",
                    borderColor: "black",
                    borderStyle: "solid",
                  }}
                >
                  <Typography
                    item
                    variant={"h5"}
                    gutterBottom
                    sx={{
                      paddingLeft: "11%",
                      paddingTop: "5%",
                      paddingBottom: "5%",
                    }}
                  >
                    Agree or Disagree...
                  </Typography>
                  <FormControl
                    sx={{
                      marginLeft: "11%",
                      paddingBottom: "5%",
                      marginTop: "5%",
                    }}
                  >
                    <FormLabel id="q3">
                      Chris Rick deserved to be slapped
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="q3-label"
                      defaultValue={q3 === "" ? "Agree" : q3}
                      name="q3-raio"
                    >
                      <FormControlLabel
                        value="Agree"
                        control={<Radio />}
                        label="Agree"
                        onClick={() => {
                          setQ3("Agree");
                        }}
                      />
                      <FormControlLabel
                        value={"Disagree"}
                        control={<Radio />}
                        label="Disagree"
                        onClick={() => {
                          setQ3("Disagree");
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              )}
              {/* Fifth Page */}
              {pageNumber === 5 && (
                <Paper
                  item
                  elevation={24}
                  sx={{
                    width: "50%",
                    height: "20vw",
                    marginTop: "20%",
                    backgroundColor: "#16DF98",
                    borderColor: "black",
                    borderStyle: "solid",
                  }}
                >
                  <Typography
                    item
                    variant={"h5"}
                    gutterBottom
                    sx={{
                      paddingLeft: "11%",
                      paddingTop: "5%",
                      paddingBottom: "5%",
                    }}
                  >
                    Agree or Disagree...
                  </Typography>
                  <FormControl
                    sx={{
                      marginLeft: "11%",
                      paddingBottom: "5%",
                      marginTop: "5%",
                    }}
                  >
                    <FormLabel id="q4">A taco is a sandwich</FormLabel>
                    <RadioGroup
                      aria-labelledby="q4-label"
                      defaultValue={q4 === "" ? "Yes" : q4}
                      name="q4-raio"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                        onClick={() => {
                          setQ4("Yes");
                        }}
                      />
                      <FormControlLabel
                        value={"No"}
                        control={<Radio />}
                        label="No"
                        onClick={() => {
                          setQ4("No");
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              )}
              {/* Sixth Page */}
              {pageNumber === 6 && (
                <Paper
                  item
                  elevation={24}
                  sx={{
                    width: "50%",
                    height: "20vw",
                    marginTop: "20%",
                    backgroundColor: "#16DF98",
                    borderColor: "black",
                    borderStyle: "solid",
                  }}
                >
                  <Typography
                    item
                    variant={"h5"}
                    gutterBottom
                    sx={{ paddingLeft: "11%", paddingTop: "5%" }}
                  >
                    Q & A... (Respond with 280 characters or less)
                  </Typography>
                  <TextField
                    id="standard-multiline-static"
                    label="What's a series/film/artist/musician that inspires you & why?"
                    multiline
                    rows={4}
                    variant="standard"
                    sx={{
                      marginLeft: "11%",
                      paddingBottom: "5%",
                      width: "75%",
                    }}
                    onChange={handleTextFieldChangeQ5}
                    value={q5}
                  />
                </Paper>
              )}
              {/* Seventh Page */}
              {pageNumber === 7 && (
                <Paper
                  item
                  elevation={24}
                  sx={{
                    width: "50%",
                    height: "20vw",
                    marginTop: "20%",
                    backgroundColor: "#16DF98",
                    borderColor: "black",
                    borderStyle: "solid",
                  }}
                >
                  <Typography
                    item
                    variant={"h5"}
                    gutterBottom
                    sx={{ paddingLeft: "11%", paddingTop: "5%" }}
                  >
                    Q & A... (Respond with 280 characters or less)
                  </Typography>
                  <TextField
                    id="standard-multiline-static"
                    label="What was the first album you ever bought, or first concert you ever went to?"
                    multiline
                    rows={4}
                    variant="standard"
                    sx={{
                      marginLeft: "11%",
                      paddingBottom: "5%",
                      width: "75%",
                    }}
                    onChange={handleTextFieldChangeQ6}
                    value={q6}
                  />
                </Paper>
              )}
              {/* Page Numbers */}
              <Grid
                container
                direction={"row"}
                spacing={1}
                justifyContent={"space-evenly"}
                width={"75%"}
                marginTop={"5%"}
              >
                <Grid
                  onClick={() => {
                    setPageNumber(1);
                  }}
                  color={pageNumber === 1 && "#16DF98"}
                >
                  <Filter1Icon />
                </Grid>
                <Grid
                  onClick={() => {
                    setPageNumber(2);
                  }}
                  color={pageNumber === 2 && "#16DF98"}
                >
                  <Filter2Icon />
                </Grid>
                <Grid
                  onClick={() => {
                    setPageNumber(3);
                  }}
                  color={pageNumber === 3 && "#16DF98"}
                >
                  <Filter3Icon />
                </Grid>
                <Grid
                  onClick={() => {
                    setPageNumber(4);
                  }}
                  color={pageNumber === 4 && "#16DF98"}
                >
                  <Filter4Icon />
                </Grid>
                <Grid
                  onClick={() => {
                    setPageNumber(5);
                  }}
                  color={pageNumber === 5 && "#16DF98"}
                >
                  <Filter5Icon />
                </Grid>
                <Grid
                  onClick={() => {
                    setPageNumber(6);
                  }}
                  color={pageNumber === 6 && "#16DF98"}
                >
                  <Filter6Icon />
                </Grid>
                <Grid
                  onClick={() => {
                    setPageNumber(7);
                  }}
                  color={pageNumber === 7 && "#16DF98"}
                >
                  <Filter7Icon />
                </Grid>
              </Grid>
            </Grid>
            {/* Submit Button */}
            <Grid
              container
              direction={"row"}
              justifyContent={"center"}
              sx={{ marginTop: "30px" }}
            >
              <Grid item>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => {
                    generateReport();
                    setIsSubmitted(true);
                  }}
                  sx={{ backgroundColor: "#16DF98", color: "black" }}
                >
                  Submit Form
                </Button>
              </Grid>
            </Grid>
          </>
        )}
        {isSubmitted && (
          <Grid container justifyContent={"center"}>
            <Paper
              item
              elevation={24}
              sx={{
                width: "50%",
                height: "20vw",
                marginTop: "20%",
                backgroundColor: "#16DF98",
                borderColor: "black",
                borderStyle: "solid",
              }}
            >
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                  <Typography
                    item
                    variant={"h3"}
                    gutterBottom
                    sx={{ paddingLeft: "11%", paddingTop: "5%" }}
                  >
                    Your application has submitted!
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        )}
      </div>
    );
  }
};

export default App;
