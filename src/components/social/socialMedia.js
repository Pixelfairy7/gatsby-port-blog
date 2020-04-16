import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SocialMediaStyles from "./socialMedia.module.css"

const SocialMedia = () => {
  return (
    <div className={SocialMediaStyles.social}>
      <FontAwesomeIcon
        icon={["fab", "twitter"]}
        className={SocialMediaStyles.icons}
      />

      <FontAwesomeIcon
        icon={["fab", "github"]}
        className={SocialMediaStyles.icons}
      />
      <FontAwesomeIcon
        icon={["fab", "codepen"]}
        className={SocialMediaStyles.icons}
      />
      <FontAwesomeIcon
        icon={["fab", "instagram"]}
        className={SocialMediaStyles.icons}
      />
      <FontAwesomeIcon
        icon={["fab", "youtube"]}
        className={SocialMediaStyles.icons}
      />
      <FontAwesomeIcon
        icon={["fab", "twitch"]}
        className={SocialMediaStyles.icons}
      />
      <FontAwesomeIcon
        icon={["fab", "linkedin"]}
        className={SocialMediaStyles.icons}
      />
    </div>
  )
}

export default SocialMedia
