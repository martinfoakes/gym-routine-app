"use client";

import { InstallMobileOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import "./FooterInstall.scss";
import { useEffect, useState } from "react";

const FooterInstall = () => {
  const [beforeInstallPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const installButton = document.querySelector("#install-pwa");

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      installButton?.removeAttribute("hidden");
    });
  }, []);

  const installButtonOnClick = async () => {
    if (!beforeInstallPrompt) {
      return;
    }
    const result = await beforeInstallPrompt.prompt();
    alert(`Install prompt was: ${result.outcome}`);

    setInstallPrompt(null);
  };

  return (
    <>
      <LoadingButton
        className="install-btn"
        size="large"
        type="button"
        variant="text"
        id="install-pwa"
        onClick={installButtonOnClick}
      >
        <Typography variant="body1" component="p" className="install-btn-text">
          {"Install the app"}
        </Typography>
        <InstallMobileOutlined fontSize="large" sx={{ mr: 1 }} />
      </LoadingButton>
    </>
  );
};

export default FooterInstall;
