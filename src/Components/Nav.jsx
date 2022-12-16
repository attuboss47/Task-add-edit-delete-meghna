import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [data, setData] = useState(["AboutUs"]);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={2}>
            <Link to={`/${item.toLowerCase()} `}>
              <Button variant="contained" fullWidth>
                {item}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
