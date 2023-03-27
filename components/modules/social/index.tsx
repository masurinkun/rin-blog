import styles from './index.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
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
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://facebook.com/">
          <FontAwesomeIcon icon={faFacebook} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
    </ul>
  );
}

export default Social;