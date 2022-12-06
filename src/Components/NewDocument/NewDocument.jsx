import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select } from "@mui/material";

export default function NewDocument() {
  return (
    <div className="section">
      <div className="container">
        <Box
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
              label="name"
              variant="outlined"
              required
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" required>
                Gender
              </InputLabel>
              <Select
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
                  value="alo"
                >
                  alo
                </option>
              </Select>
            </FormControl>

            <TextField
              required
              id="outlined-basic"
              label="age"
              variant="outlined"
              value="age"
            />
          </form>
        </Box>
      </div>
    </div>
  );
}
