import cuid from "cuid"
import { IconFacebook } from "./icon-facebook"
import { IconInstagram } from "./icon-instagram"
import { IconTwitter } from "./icon-twitter"

export const socialSites = [
  {
    id: cuid(),
    title: "Facebook",
    link: "https://www.facebook.com/vednemesicnik",
    icon: <IconFacebook />,
  },
  {
    id: cuid(),
    title: "Instagram",
    link: "https://www.instagram.com/vednemesicnik/",
    icon: <IconInstagram />,
  },
  {
    id: cuid(),
    title: "Twitter",
    link: "https://twitter.com/vednemesicnik",
    icon: <IconTwitter />,
  },
]
