// This will called when the site is loaded
window.onload = (event) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  // First check on color scheme based on user session storage
  if(localStorage.getItem('theme') === 'dark' || 'light')
    changeTheme(localStorage.getItem('theme'))
  else {
    if(mediaQuery.matches)
      changeTheme('dark')
    else 
      changeTheme('light')
  }
  
  // Add listener for real time user colour scheme preference change
  mediaQuery.addListener(e => {
      if(e.matches)
        changeTheme('dark')
      else 
        changeTheme('light')
  })
}

// Function to toggle the theme
function toggleTheme() {
  if (document.documentElement.getAttribute('data-theme') === 'dark') 
    changeTheme('light')
  else 
    changeTheme('dark')
}

// Function to change the theme
function changeTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme) // Set user theme on session storage
}