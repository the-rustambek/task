import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormControl, InputLabel, Select } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
 export default function NewDocument() {
 
  const [documentName, setDocumentName] = useState("");
  const [fieldName, setFieldName] = useState("");
  const [sequence, setSequence] = useState("");
  const [option, setOption] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://20.100.194.232:8083/api/v1/documents/create', {
      method: 'POST',
      body: JSON.stringify({
        document_name: documentName,
        form_values: [
          {
            field_seq: sequence,
            is_mandatory: true,
            field_type: option,
            field_name: fieldName,
            select_values: [
              {
                value: true,
                label: "Agree"
              }
            ]
          }]
      }),
      headers: {
        "API-KEY": "secret-api-key",
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  };

  return (
    <div className="section">
      <div className="container">
        <Box onSubmit={handleSubmit}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          className="section-box"
          autoComplete="off"
        >
          <form className="section-form">
            <TextField
              id="outlined-basic"
              label="Document Title"
              variant="outlined"
              required
              onChange={(e) => setDocumentName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Field sequence(weigth)"
              variant="outlined"
              required
              onChange={(e) => setSequence(e.target.value)}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" required>
                Field Type
              </InputLabel>
              <Select onChange={(e) => setOption(e.target.value)}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="gender"
                required
              >
                <option
                  style={{
                    color: "#1976D2",
                    fontSize: "18px",
                    padding: "3px 10px",
                  }}
                  value="input"
                >
                  Input
                </option>
                <option
                  style={{
                    color: "#1976D2",
                    fontSize: "18px",
                    padding: "3px 10px",
                  }}
                  value="Select"
                >
                  Select
                </option>
                <option
                  style={{
                    color: "#1976D2",
                    fontSize: "18px",
                    padding: "3px 10px",
                  }}
                  value="NumberInput"
                >
                  NumberInput
                </option>
              </Select>
            </FormControl>

            <TextField
              required
              id="outlined-basic"
              label="Field name"
              variant="outlined"
              onChange={(e) => setFieldName(e.target.value)}
            />
            <Box sx={{ display: 'flex' }}>
              <FormControl
                required

                component="fieldset"
                sx={{ m: 3 }}
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={true} name="Mandatory" />
                    }
                    label="Mandatory"
                  />
                </FormGroup>
              </FormControl>
            </Box>
            <div style={{ width: "400px", display: "flex", justifyContent: "space-between" }}>
              <Button variant="outlined" >
                ADD more
              </Button>
              <Button onClick={handleSubmit} variant="contained">
                Save
              </Button>
            </div>
          </form>
        </Box>
      </div>
    </div>
  );
}
