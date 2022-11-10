import img from "../assets/logo-loop.gif";
import { Grid, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";

const Home = () => {
  return (
    <Grid item container justifyContent={"center"} direction={"column"}>
      <Grid item sx={{ textAlign: "center" }}>
        <img
          src={img}
          alt="offplanet"
          style={{
            width: isMobile ? "75vw" : "50vw",
            marginLeft: "auto",
            alignSelf: "center",
          }}
        />
      </Grid>
      <Grid item>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{ textAlign: "center" }}
        >
          launch systems loading…
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
