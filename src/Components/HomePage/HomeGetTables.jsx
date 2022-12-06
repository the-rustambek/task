import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell, StyledTableRow } from './home-get.style';
import { Link } from 'react-router-dom';
 

export default function HomeGetTables() {

   // ****************************** api get *******************************
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch('http://20.100.194.232:8083/api/v1/documents', {
      method: "GET",
      headers: {
        "API-KEY": "secret-api-key",
        "Content-type": "application/json;charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => setDocument(json));
  }, []);

/****************************  code *********************** */
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">ID</StyledTableCell>
            <StyledTableCell>Document title</StyledTableCell>
            <StyledTableCell align="center">Created Date</StyledTableCell>
            <StyledTableCell align="right">Document size</StyledTableCell>
            <StyledTableCell align="right" ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {document.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align="left">{row?.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row?.document_name}
              </StyledTableCell>
              <StyledTableCell align="center">{row?.created_at}</StyledTableCell>
              <StyledTableCell align="center">{row?.field_count}</StyledTableCell>
              <StyledTableCell align="right">
                <Link to={`/preview/=${row?.id}`}>Document preview</Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
