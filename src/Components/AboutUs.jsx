import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField, Button,Card,CardContent } from "@mui/material";
import { AboutUsitem } from "./AboutUsitem";

export const AboutUs = (item,index) => {
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState("");            //check it if result is blank
  const [oridata, setOridata] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setData(result.data);
    setOridata(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(()=>{
    const filtered=oridata.filter((item)=>item.title.toUpperCase().includes(txt.toUpperCase()))
    setData(filtered)
  },[txt]);

  const handlestatus = (isCompleted) => {
    const filtered = oridata.filter((item) => item.completed == isCompleted);
    setData(filtered);
  };
//   const handlestatus = (isCompleted) => {
//     const filtered = data.filter((item) => item.completed == true);
//     setData(filtered);
//   };

const handleDelete=(index)=>{
    const filtered=oridata.filter((item,ind)=>ind!==index);
    setOridata(filtered)
    // setData(filtered)   ////also deleted from  data and but it can be searched.
}
const handleSave = (index, val) => {
  const newdata = data;
  newdata[index].title = val;
  setData(newdata);
};

  return (
    <React.Fragment>
      <Grid container spacing={2} sx={{ bgcolor: "khaki", padding: 2 }}>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Search....."
            fullWidth
            onChange={(e) => setTxt(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}><Card><CardContent>{oridata.length}</CardContent></Card></Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="warning"
            sx={{ height: 50 }}
            fullWidth
            onClick={()=>handlestatus(false)}
          >
            In progress
          </Button>{" "}
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="success"
            sx={{ height: 50 }}
            fullWidth
            onClick={()=>handlestatus(true)}
          >
            Completed
          </Button>{" "}
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        {data.map((item,index) => (
          
           <AboutUsitem 
           item={item} 
           index={index} 
           handleDelete={handleDelete} 
           handleSave={handleSave}/>
        ))}
      </Grid>
    </React.Fragment>
  );
};
