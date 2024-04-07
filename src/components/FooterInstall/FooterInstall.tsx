"use client";

import { useEffect, useState } from "react";
import { InstallMobileOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import "./FooterInstall.scss";

const FooterInstall = () => {
  const [beforeInstallPrompt, setInstallPrompt] = useState<any>(null);
  const installButton = document.querySelector("#install-pwa");

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      setInstallPrompt(event);
      installButton?.removeAttribute("hidden");
      installButton?.classList.add("show");
    });
  }, [installButton]);

  const installButtonOnClick = async () => {
    if (!beforeInstallPrompt) {
      return;
    }
    const { outcome } = await beforeInstallPrompt.prompt();
    setInstallPrompt(null);

    if (outcome === "accepted") {
      installButton?.classList.remove("show");
      installButton?.setAttribute("hidden", "true");
    }
  };

  return (
    <>
      <LoadingButton
        className="install-btn"
        size="large"
        type="button"
        variant="text"
        id="install-pwa"
        hidden
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
