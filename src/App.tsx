import React from 'react';
import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./App.css";
import { Box, Button, Grid, Paper } from "@mui/material";

function App() {
  const[inputText, setInputText] = useState("");
  const[translatedText, setTranslatedText] = useState<undefined | any>(undefined);
  const FUN_TRANSLATIONS_DOGE_API_URL = "https://api.funtranslations.com/translate/doge.json";
  return (
    <div>
      <div id="header" style={{display:"flex", justifyContent:"center"}}>
      <h1>English to Dog translator</h1> 
      </div>
      <div style={{ paddingLeft:500 }}><p>Finally talk to your dog with this ultimate English to Dog translator !</p></div>
      <div>
      <div style={{ display: "flex", justifyContent: "center", width:500, paddingLeft:500, paddingTop:50 }}>
      <TextField
          id="search-box"
          label="Enter your text"
          placeholder="Enter.."
          multiline
          fullWidth
          size="medium"
          value={inputText}
          onChange={(word) =>{
            setInputText(word.target.value);
          }
          }
          
        />
       <Button variant="contained"
       onClick={()=>{
        translate();
       }}
       >Translate</Button>
          </div>
      </div>

     
        <div
          id="pokemon-result"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "100px 10px 0px 10px",
          }}
        >
          <div><h3>Translated Text:</h3></div>
            <Grid
              container
              direction="row"
              spacing={5}
              sx={{
                justifyContent: "center",
                backgroundColor: "#E8F1DD"
              }}
              borderRadius ={5}
            >
              <Grid item>
                <Box>
                  {translatedText == undefined || translatedText === null ? (
                    <div> </div>
                  ) : (
                    <div>
                      <p>
                        {translatedText.contents.translated}
                      </p>
                    </div>
                  )}
                </Box>
              </Grid>
              <Grid item>
                <Box>
                  <img 
                  height="200px"
                  width="200px"
                  src="https://images.unsplash.com/photo-1472698938026-79bed881e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
                </Box>
              </Grid>
            </Grid>
        </div>
    </div>
  );

  function translate(){
    if(inputText==undefined || inputText==""){return;}
    axios.get(FUN_TRANSLATIONS_DOGE_API_URL+"?text="+inputText)
    .then((res) =>{
      setTranslatedText(res.data);
    })
    .catch(() => {
      //console.log("Pokemon not found");
      setTranslatedText(null);
    });
  }
}

export default App;
