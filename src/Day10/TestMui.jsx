import { Fab, FormControl, FormControlLabel, Radio } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';

function TestMui() {
    return ( 
        <>
            <Fab color="error">
                <AddIcon /> 
            </Fab>
            <Fab variant="extended" color="secondary">
            <NavigationIcon sx={{ mr: 1 }} />
                Navigate
            </Fab>

            <FormControl>
                <FormControlLabel control={<Radio color="warning"/>} label="Select"/>
            </FormControl>

        </>
     );
}

export default TestMui;