import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const metadata = [
  {
    primaryText: "Flat Dumbbell Bench Press",
    setAmount: "3",
    repAmount: "6",
  },
  {
    primaryText: "Incline Dumbbell Bench Press",
    setAmount: "3",
    repAmount: "10",
  },
  {
    primaryText: "Seated Overhead Shoulder Press",
    setAmount: "3",
    repAmount: "8",
  },
  {
    primaryText: "Dumbbell Lateral Raise",
    setAmount: "3",
    repAmount: "12",
  },
  {
    primaryText: "Dumbbell Chest Flyes",
    setAmount: "2",
    repAmount: "8",
  },
  {
    primaryText: "Skullcrushers",
    setAmount: "3",
    repAmount: "15",
  },
  {
    primaryText: "Tricep Pushdowns",
    setAmount: "3",
    repAmount: "10",
  },
];

const PushDayPage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h2">
        {"Push Day Workout Routine"}
      </Typography>

      <List dense={false}>
        {metadata.map(({ primaryText, setAmount, repAmount }, idx) => {
          const listKey = primaryText.toLocaleLowerCase().replaceAll(" ", "-");

          return (
            <ListItem key={listKey}>
              <ListItemText
                primary={<Typography variant="h6">{primaryText}</Typography>}
                secondary={
                  <>
                    <span>{`${setAmount} sets`}</span>
                    <br />
                    <span>{`${repAmount} reps`}</span>
                  </>
                }
                secondaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: 300,
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default PushDayPage;
