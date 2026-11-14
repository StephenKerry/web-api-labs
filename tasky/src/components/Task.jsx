import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import Checkbox from '@mui/material/Checkbox';



const Task = (props) => {
    
    const priorityClass =
    props.priority === "high"
      ? "priority-high"
      : props.priority === "medium"
      ? "priority-medium"
      : "priority-low";
    return (<Grid
        key={props.id}
        size={{ xs: 12, md: 4, sm:6}}
      >
        <Card
          sx={{
            backgroundColor: props.done ? 'lightgreen':'lightblue' ,
            padding: '20px'
          }}
        >

          <CardHeader
            title={props.title}
            sx={{
              backgroundColor: 'white',
              borderRadius: '3px',
              padding: '20px',
              textAlign: 'center'
            }}
          />
          <div className="card">
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <Checkbox
      checked={props.completed}
      onChange={props.toggleComplete}
    />
    <p className="title">{props.title}</p>
  </div>

  <p>Due: {props.deadline}</p>
  <p>Description: {props.description}</p>
  <p>Priority: {props.priority}</p>

 
</div>

      
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                mb: 2,
                padding: '20px'
              }}
            >
              <Typography
                component="p"
                variant="subtitle2"
                color="text.primary"
              >
                Due: {props.deadline}
              </Typography>
            </Box>
      
            <Typography
              component="p"
              variant="subtitle1"
              align="center"
              sx={{ fontStyle: 'italic' }}
            >
              {props.description}
            </Typography>
          </CardContent>
      
          <CardActions
            sx={{
              justifyContent: 'space-between',
              padding: '20px'
            }}
          >
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={props.markDone}

            >
              Done
              <CheckIcon/>

            </Button>
      
            <Button
              variant="contained"
              size="medium"
              color="error"
              onClick={props.deleteTask}
              
            >
              Delete
              <DeleteIcon />

            </Button>
          </CardActions>
        </Card>
      </Grid>
      
    
    )



}


export default Task;
