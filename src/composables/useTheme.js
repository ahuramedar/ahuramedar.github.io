import { ref } from 'vue'

// index.html already applies the 'dark' class before Vue mounts (avoids
// a flash of the wrong theme), so on load we just read that decision.
const isDark = ref(document.documentElement.classList.contains('dark'))

function applyTheme() {
  document.documentElement.classList.toggle('dark', isDark.value)
  try {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  } catch (e) {
    /* localStorage unavailable — theme just won't persist */
  }
}

function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme()
}

export function useTheme() {
  return { isDark, toggleTheme }
}
