"use client";

import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { Fragment, useState } from "react";
import Image from "next/image";
import "./styles.scss";

const metadata: Array<{
  primaryText: string;
  setAmount: string;
  repAmount: string;
  imgUrl?: string;
}> = [
  {
    primaryText: "Flat Dumbbell Bench Press",
    setAmount: "3",
    repAmount: "6",
    imgUrl:
      "https://i.shgcdn.com/0c1706b0-37a5-48a4-b1b6-9c732b5d02d2/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    primaryText: "Incline Dumbbell Bench Press",
    setAmount: "3",
    repAmount: "10",
    imgUrl:
      "https://i.shgcdn.com/fb804e90-1738-4f87-a46c-d01040b3a76e/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    primaryText: "Dips",
    setAmount: "3",
    repAmount: "Until failure",
    imgUrl:
      "https://i.shgcdn.com/7f0fb43c-f324-4a00-b46b-5f631e853509/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    primaryText: "Seated Overhead Shoulder Press",
    setAmount: "3",
    repAmount: "8",
    imgUrl:
      "https://i.shgcdn.com/8cdd4abd-0c5a-46f0-aad3-462c9cf9a49f/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    primaryText: "Dumbbell Lateral Raise",
    setAmount: "3",
    repAmount: "12",
    imgUrl:
      "https://i.shgcdn.com/3e7857c6-291e-4121-a9e6-af10f39affc9/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    primaryText: "Dumbbell Chest Flyes",
    setAmount: "2",
    repAmount: "8",
    imgUrl:
      "https://qph.cf2.quoracdn.net/main-qimg-73c83eb3770aeba6a5d65aba4125f073",
  },
  {
    primaryText: "Skullcrushers",
    setAmount: "3",
    repAmount: "15",
    imgUrl:
      "https://i.shgcdn.com/065ff229-5149-45e8-a157-4dd80ac5df85/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    primaryText: "Tricep Pushdowns",
    setAmount: "3",
    repAmount: "10",
    imgUrl:
      "https://i.shgcdn.com/9717db44-3098-49f1-8ad5-2def26d58c7e/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
];

const PushDayPage = () => {
  const [viewImg, setViewImg] = useState<boolean>(false);
  const [imgUrlState, setImgUrlState] = useState<string>("");

  const handleImgIconClick = (imgUrl?: string) => {
    setViewImg(!viewImg);

    setImgUrlState(imgUrl ?? "");
  };

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };

  return (
    <Container>
      <Typography variant="h2" component="h2">
        {"Push Day Workout Routine"}
      </Typography>

      <List dense={false}>
        {metadata.map(({ primaryText, setAmount, repAmount, imgUrl }, idx) => {
          const listKey = `${primaryText
            .toLocaleLowerCase()
            .replaceAll(" ", "-")}-${idx}`;

          return (
            <Fragment key={listKey}>
              <ListItem
                secondaryAction={
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="image"
                    onClick={() => (imgUrl ? handleImgIconClick(imgUrl) : null)}
                  >
                    <ImageSearchIcon fontSize="large" color="primary" />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={<Typography variant="h6">{primaryText}</Typography>}
                  secondary={
                    <>
                      <span>{`Sets: ${setAmount}`}</span>
                      <br />
                      <span>{`Reps: ${repAmount}`}</span>
                    </>
                  }
                  secondaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: 300,
                  }}
                />
              </ListItem>
            </Fragment>
          );
        })}
      </List>

      <Modal open={viewImg} onClose={() => handleImgIconClick("")}>
        <Box sx={modalStyle}>
          <Image
            src={imgUrlState ?? ""}
            width={300}
            alt=""
            height={300}
            layout="responsive"
            objectFit="contain"
            quality={100}
            priority={true}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default PushDayPage;
