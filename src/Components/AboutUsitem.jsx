import React,{useState} from "react";
import { Grid, Button, Card, CardContent, TextField } from "@mui/material";
export const AboutUsitem = ({ item, index,handleDelete,handleSave }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [val, setVal] = useState(item.title);
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                {" "}
                <Card
                  sx={{
                    bgcolor: item.completed ? "green" : "yellow",
                    height: 30,
                  
                  }}
                ><CardContent></CardContent>
                </Card>
              </Grid>
              <Grid item xs={5}>
                {isUpdate?(<TextField value={val} fullWidth variant="outlined" label="Title" onChange={(e)=>setVal(e.target.value)}/>):( <Card> <CardContent>{item.title}</CardContent> </Card> )}
              </Grid>
              
              <Grid item xs={1}>
                <Card sx={{ bgcolor: "palegoldenrod" }}>{item.id}</Card>
              </Grid>
              <Grid item xs={1}>
                <Card> {item.completed ? "true" : "flase"}</Card>{" "}
              </Grid>
              <Grid item xs={1}>
                <Card>
                  {" "}
                  {item.completed ? "Completed" : "not Completed/in progress"}
                </Card>{" "}
              </Grid>
              <Grid item xs={2}>{isUpdate?(
                 <Button variant="contained" onClick={()=>{
                  handleSave(index,val);
                setIsUpdate(false);
                }}
                >
                  Save
                  </Button>
                  ) : ( 
                  <Button
                   variant="contained" 
                   onClick={()=>setIsUpdate(true)}
                   >
                    Update
                    </Button> ) }</Grid>
              <Grid item xs={2}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button fullWidth variant="contained">
                  Update
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
