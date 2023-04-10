import styles from './index.module.scss'
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGoogle,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

type SocialProps = {
  iconSize?: string
}

const Social: React.FC<SocialProps> = ( { iconSize = 'initial' } ) => {
  return (
    <ul
      className={styles.list}
      style={{ "--icon-size": iconSize } as React.CSSProperties}
    >
      <li>
        <a href="https://twitter.com/mocchari2">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="mailto:rinta.barca@gmail.com">
          <FontAwesomeIcon icon={faGoogle} />
          <span className="sr-only">Gmail</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/masurinkun">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Github</span>
        </a>
      </li>
    </ul>
  );
}

export default Social;