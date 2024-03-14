"use client";

import { useState } from "react";
import {
  Box,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import Image, { StaticImageData } from "next/image";
import { pushDayMeta } from "../metadata";
import "../styles.scss";

const PushDayPage = () => {
  const [viewImg, setViewImg] = useState<boolean>(false);
  const [imgUrlState, setImgUrlState] = useState<string | StaticImageData>("");

  const handleImgIconClick = (imgUrl?: string | StaticImageData) => {
    setImgUrlState(imgUrl ?? "");
    setViewImg(!viewImg);
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
    <>
      <Typography variant="h2" component="h2">
        {"Routine"}
      </Typography>

      <List dense={false}>
        {pushDayMeta.map(
          ({ primaryText, setAmount, repAmount, imgUrl }, idx) => {
            const listKey = `${primaryText
              .toLocaleLowerCase()
              .replaceAll(" ", "-")}-${idx}`;

            return (
              <ListItem
                key={listKey}
                secondaryAction={
                  <IconButton
                    size="medium"
                    edge="end"
                    onClick={() => (imgUrl ? handleImgIconClick(imgUrl) : null)}
                  >
                    <ImageSearchIcon
                      fontSize="medium"
                      color="primary"
                      className="view-image-icon"
                    />
                  </IconButton>
                }
                style={{ paddingLeft: 0 }}
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
            );
          }
        )}
      </List>

      <Modal open={viewImg} onClose={() => handleImgIconClick("")}>
        <Box sx={modalStyle} display="inline-flex" justifyContent="center">
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
    </>
  );
};

export default PushDayPage;
