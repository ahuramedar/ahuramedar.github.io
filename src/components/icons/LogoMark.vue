<script setup>
// Placeholder logo mark — a minimal microchip/circuit motif.
// Replace this file's SVG whenever a real logo is ready; every place that
// shows the logo (header, footer, favicon) points here.
defineProps({
  class: { type: String, default: 'h-8 w-8' },
})
</script>

<template>
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="$props.class"
    aria-hidden="true"
  >
    <rect x="11" y="11" width="18" height="18" rx="3" class="fill-emerald-600" />
    <rect x="16" y="16" width="8" height="8" rx="1.5" fill="white" fill-opacity="0.9" />

    <!-- pins -->
    <g class="stroke-emerald-600" stroke-width="2" stroke-linecap="round">
      <path d="M15 11V5" />
      <path d="M20 11V5" />
      <path d="M25 11V5" />
      <path d="M15 35V29" />
      <path d="M20 35V29" />
      <path d="M25 35V29" />
      <path d="M11 15H5" />
      <path d="M11 20H5" />
      <path d="M11 25H5" />
      <path d="M35 15H29" />
      <path d="M35 20H29" />
      <path d="M35 25H29" />
    </g>
  </svg>
</template>
