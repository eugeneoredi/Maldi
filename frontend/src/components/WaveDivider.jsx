function WaveDivider({ color = '#faf7f0', flip = false }) {
  return (
    <svg
      className={`wave-divider ${flip ? 'rotate-180' : ''}`}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0,32 C240,80 480,0 720,24 C960,48 1200,72 1440,32 L1440,80 L0,80 Z"
        fill={color}
      />
    </svg>
  )
}

export default WaveDivider
