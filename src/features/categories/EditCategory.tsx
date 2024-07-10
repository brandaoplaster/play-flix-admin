import { Category } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategoryById } from "./categorySlice";

export const EditCategory = () => {
  const id = useParams().id || "";
  const category = useAppSelector((state) => selectCategoryById(state, id));

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>

        <Box p={2}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    required
                    name="name"
                    label="Name"
                    value={category.name}
                    disabled={isdisabled}
                    onChange={handleChange}
                  ></TextField>
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};
