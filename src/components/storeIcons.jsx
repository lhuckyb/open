export function GooglePlayIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ width: size, height: size, maxWidth: size, maxHeight: size, flexShrink: 0 }}
    >
      <path
        fill="currentColor"
        d="M3.6 1.9a1.4 1.4 0 0 0-.7 1.24v17.72a1.4 1.4 0 0 0 .7 1.24l9.36-9.36v-.48L3.6 1.9Z"
      />
      <path
        fill="currentColor"
        opacity="0.75"
        d="m16.42 15.1-3.76-3.76v-.48l3.76-3.76 4.3 2.44c1.24.7 1.24 2.42 0 3.12l-4.3 2.44Z"
      />
      <path
        fill="currentColor"
        opacity="0.55"
        d="M12.66 11.34 3.6 1.9c.34-.34.9-.38 1.28-.16l11.54 6.56-3.76 3.04Z"
      />
      <path
        fill="currentColor"
        opacity="0.4"
        d="m12.66 12.66 3.76 3.04-11.5 6.55c-.4.22-.94.18-1.28-.16l9.02-9.43Z"
      />
    </svg>
  );
}

export function AppleIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ width: size, height: size, maxWidth: size, maxHeight: size, flexShrink: 0 }}
    >
      <path
        fill="currentColor"
        d="M16.36 12.72c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.83-.81-3-.79-1.55.02-2.97.9-3.77 2.29-1.6 2.78-.41 6.9 1.15 9.16.76 1.11 1.67 2.35 2.87 2.31 1.15-.05 1.59-.74 2.98-.74 1.39 0 1.78.74 2.99.72 1.24-.02 2.02-1.12 2.78-2.24.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.64ZM14.14 5.3c.63-.77 1.06-1.83.94-2.9-.91.04-2.01.61-2.66 1.37-.58.68-1.09 1.76-.95 2.8 1.01.08 2.04-.51 2.67-1.27Z"
      />
    </svg>
  );
}
