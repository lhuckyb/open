import { siteConfig } from '../siteConfig';
import { GooglePlayIcon, AppleIcon } from './storeIcons';

export default function StoreButtons({ variant = 'hero', className = '' }) {
  return (
    <div className={`store-button-group ${variant === 'footer' ? 'footer-mode' : ''} ${className}`.trim()}>
      <a
        href={siteConfig.googlePlayUrl}
        className="store-action-btn"
        target="_blank"
        rel="noreferrer"
        aria-label="Download on Google Play"
      >
        <div className="store-action-icon">
          <GooglePlayIcon size={19} />
        </div>
        <div className="store-action-text">
          <span className="store-action-pre">GET IT ON</span>
          <span className="store-action-name">Google Play</span>
        </div>
      </a>

      <a
        href={siteConfig.appStoreUrl}
        className="store-action-btn"
        target="_blank"
        rel="noreferrer"
        aria-label="Download on App Store"
      >
        <div className="store-action-icon">
          <AppleIcon size={19} />
        </div>
        <div className="store-action-text">
          <span className="store-action-pre">DOWNLOAD ON THE</span>
          <span className="store-action-name">App Store</span>
        </div>
      </a>
    </div>
  );
}
