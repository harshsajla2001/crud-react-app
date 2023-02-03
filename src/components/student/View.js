import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from "@mui/material"
import { makeStyles } from 'tss-react/mui';
import { orange } from "@mui/material/colors"
const useStyles = makeStyles()((theme) => {
  return {
    stuListColor: {
      backgroundColor: orange[400],
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    
  };
});

const View = () => {
  const { classes } = useStyles();
  return (
    <>
      <Box textAlign='center' p={2} className={classes.stuListColor}>
        <Typography variant="h4">student Detail</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#616161' }}>
              <TableCell align="center" style={{fontSize: 16,fontWeight: 'bold',color: 'white'}} >
                ID
              </TableCell>
              <TableCell align="center" style={{fontSize: 16,fontWeight: 'bold',color: 'white'}} >
                Name
              </TableCell>
              <TableCell align="center" style={{fontSize: 16,fontWeight: 'bold',color: 'white'}} >
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">Sonam</TableCell>
              <TableCell align="center">Sonam@gmail.com</TableCell>
            </TableRow>
          </TableBody>


        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button variant="contained" color="primary">Back to Home</Button>
      </Box>
    </>
  )
}

export default View