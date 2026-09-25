import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download, ChevronDown, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { GooglePlayIcon, AppleIcon } from './storeIcons';

/**
 * GetAppDropdown Component
 * 
 * Replaces direct single-store links with an accessible, smooth dropdown
 * allowing users to choose between Google Play (Android) and Apple App Store (iOS).
 * 
 * @param {Object} props
 * @param {string} [props.label='Get App'] - Button trigger text
 * @param {'header' | 'primary' | 'secondary' | 'outline' | 'custom'} [props.variant='header'] - Button styling variant
 * @param {'left' | 'right' | 'center'} [props.align='right'] - Dropdown menu horizontal alignment
 * @param {boolean} [props.showIcon=true] - Whether to show the download icon
 * @param {string} [props.className=''] - Additional class names for the trigger button
 * @param {string} [props.containerClassName=''] - Additional class names for outer container
 */
export default function GetAppDropdown({
  label = 'Get App',
  variant = 'header',
  align = 'right',
  direction = 'auto',
  showIcon = true,
  className = '',
  containerClassName = '',
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState(direction === 'up' ? 'up' : 'down');
  const [popoverPosition, setPopoverPosition] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return undefined;

    const updatePopoverPosition = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const position = { position: 'fixed' };

      if (placement === 'up') {
        position.bottom = `${window.innerHeight - rect.top + 10}px`;
      } else {
        position.top = `${rect.bottom + 10}px`;
      }

      if (align === 'left') {
        position.left = `${rect.left}px`;
      } else if (align === 'center') {
        position.left = `${rect.left + rect.width / 2}px`;
      } else {
        position.right = `${window.innerWidth - rect.right}px`;
      }

      setPopoverPosition(position);
    };

    updatePopoverPosition();
    window.addEventListener('resize', updatePopoverPosition);
    window.addEventListener('scroll', updatePopoverPosition, true);

    return () => {
      window.removeEventListener('resize', updatePopoverPosition);
      window.removeEventListener('scroll', updatePopoverPosition, true);
    };
  }, [align, isOpen, placement]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next && containerRef.current) {
        if (direction === 'up') {
          setPlacement('up');
        } else if (direction === 'down') {
          setPlacement('down');
        } else {
          // Auto detect: check if space below button is tight (< 270px)
          const rect = containerRef.current.getBoundingClientRect();
          const spaceBelow = window.innerHeight - rect.bottom;
          if (spaceBelow < 270) {
            setPlacement('up');
          } else {
            setPlacement('down');
          }
        }
      }
      return next;
    });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onSelect) onSelect();
  };

  // Determine button trigger class based on variant
  let triggerClasses = '';
  if (variant === 'header') {
    triggerClasses = 'header-app-btn';
  } else if (variant === 'primary') {
    triggerClasses = 'btn btn-primary';
  } else if (variant === 'secondary') {
    triggerClasses = 'btn btn-secondary';
  } else if (variant === 'outline') {
    triggerClasses = 'btn btn-outline';
  }

  const combinedButtonClass = `${triggerClasses} get-app-trigger ${isOpen ? 'is-active' : ''} ${className}`.trim();

  return (
    <div 
      ref={containerRef} 
      className={`get-app-dropdown-wrapper align-${align} placement-${placement} ${isOpen ? 'dropdown-open' : ''} ${containerClassName}`.trim()}
    >
      <button
        type="button"
        className={combinedButtonClass}
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`${label} - Select platform (Google Play or Apple App Store)`}
      >
        {showIcon && <Download size={15} className="get-app-dl-icon" />}
        <span className="get-app-btn-text">{label}</span>
        <ChevronDown 
          size={14} 
          className={`get-app-chevron ${isOpen ? 'is-rotated' : ''}`}
          aria-hidden="true" 
        />
      </button>

      {isOpen && createPortal(
        <div
          className={`get-app-popover align-${align} placement-${placement}`}
          style={popoverPosition}
          role="menu"
          aria-orientation="vertical"
          aria-label="DefiMart App download options"
        >
          {/* Popover Header */}
          <div className="get-app-popover-header">
            <span className="popover-kicker">Choose Platform</span>
            <span className="popover-title">Download DefiMart App</span>
          </div>

          {/* Platform options list */}
          <div className="get-app-options-list">
            {/* Google Play (Android) */}
            <a
              href={siteConfig.googlePlayUrl}
              target="_blank"
              rel="noreferrer"
              className="get-app-option-card option-android"
              role="menuitem"
              onClick={handleLinkClick}
            >
              <div className="option-icon-box android-icon-box">
                <GooglePlayIcon size={22} />
              </div>
              <div className="option-meta">
                <div className="option-headline">
                  <span className="option-name">Google Play</span>
                  <span className="option-pill pill-android">Android</span>
                </div>
                <span className="option-desc">For Android phones & tablets (v8.0+)</span>
              </div>
              <ExternalLink size={15} className="option-arrow" aria-hidden="true" />
            </a>

            {/* Apple App Store (iOS) */}
            <a
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="get-app-option-card option-apple"
              role="menuitem"
              onClick={handleLinkClick}
            >
              <div className="option-icon-box apple-icon-box">
                <AppleIcon size={22} />
              </div>
              <div className="option-meta">
                <div className="option-headline">
                  <span className="option-name">App Store</span>
                  <span className="option-pill pill-apple">iOS</span>
                </div>
                <span className="option-desc">For iPhone & iPad (iOS 15.0+)</span>
              </div>
              <ExternalLink size={15} className="option-arrow" aria-hidden="true" />
            </a>
          </div>

          {/* Popover Footer Trust Signal */}
          <div className="get-app-popover-footer">
            <ShieldCheck size={14} className="text-primary" />
            <span>100% Free · Official secure app store releases</span>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
