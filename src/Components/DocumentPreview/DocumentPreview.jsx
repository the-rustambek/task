import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./DocumentPreview.css";
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { get } from "lodash";
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export default function DocumentPreview() {
     const [loading, setLoading] = useState(false);

  


    /*************************** api get form************************* */

    const [preview, setPreview] = useState([]);
    let { id } = useParams()

    useEffect(() => {
        setLoading(true);

        fetch(`http://20.100.194.232:8083/api/v1/document/${id}/`, {
            method: "GET",
            headers: {
                "API-KEY": "secret-api-key",
                "Content-type": "application/json;charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => setPreview([json]));
            setLoading(false);

    }, [id]);
    // console.log(preview[0].fields[0].select_values[0].value, "previewewew")
    return (
     
     <div className="section">
            <div className="container">
    
    <Box
    component="form"
    sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    className="section-box"
    autoComplete="off">
    <h1 className="section-title">
        {preview?.document_name}                    </h1>

    {preview.length>0 ? (get(preview, "[0]"))?.fields.map((row, i) => (
        <form className="section-form">
            <TextField id="outlined-basic" label="name" variant="outlined" required value={row?.field_name} />

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" required>Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="gender"
                     required
                >
                    {row?.select_values?.length > 0 && row?.select_values.map((select, i) => (
                        <option style={{ color: "#1976D2", fontSize: "18px", padding: "3px 10px" }}
                            value={select.value}
                        >{select?.label}</option>
                    ))
                    }
                </Select>

            </FormControl>


            <TextField required id="outlined-basic" label="age" variant="outlined" value={row?.field_seq} />

        </form>
    )) : <div style={{ color: "red", fontSize: "20px", textAlign: "center" }}>There is no field.</div>}
    <Button variant="contained" href="/">Back</Button>

</Box>       

            </div>
        </div>
    )
}
