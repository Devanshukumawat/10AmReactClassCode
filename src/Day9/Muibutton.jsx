import { Box, ButtonGroup, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import Button from "@mui/material/Button"
import AbcIcon from '@mui/icons-material/Abc';

function Muibutton() {
    return ( 
        <>
            <Button variant="contained">Submit</Button>
            <Typography variant="h2">My Webpage</Typography>
            <Box>Hello class</Box>
            <ButtonGroup variant="text" orientation="vertical">
                <Button> <AbcIcon></AbcIcon> One</Button>
                <Button>Two</Button>
                <Button><AbcIcon></AbcIcon> Three</Button>
            </ButtonGroup>

            <FormGroup>
                <FormControlLabel control={<Checkbox
                    color="warning"
                />} label="React"
                sx={{
                    color:"red"
                    
                }}
                ></FormControlLabel>
            </FormGroup>

        </>
     );
}

export default Muibutton;