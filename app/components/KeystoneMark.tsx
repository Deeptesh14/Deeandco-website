export function KeystoneMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Abstract keystone: an arch with a center stone */}
      <path
        d="M16 2L30 11V29L16 38L2 29V11L16 2Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M16 8L24 13V27L16 32L8 27V13L16 8Z"
        fill="currentColor"
        opacity="0.15"
      />
      {/* Center keystone piece */}
      <path
        d="M16 13L21 16V24L16 27L11 24V16L16 13Z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  )
}
