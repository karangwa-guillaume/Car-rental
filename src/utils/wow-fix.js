// src/utils/wow-fix.js

// Save original getComputedStyle
const originalGetComputedStyle = window.getComputedStyle;

// Patch it so WOW.js doesn't crash
window.getComputedStyle = function (el) {
  try {
    return el ? originalGetComputedStyle(el) : {
      getPropertyValue: () => ''
    };
  } catch (e) {
    return {
      getPropertyValue: () => ''
    };
  }
};