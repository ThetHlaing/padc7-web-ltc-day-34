const publicVapidKey =
  "BJw6ywdT_-tC5Z2uJali3t0o0Xj3udvdOjWpOQH3OufMS1GV4xnypCYPouqcSv3BxfCjsc2p1yws_sUQiNoAlfs";
let swRegistration = null;

// Check for service worker
if ("serviceWorker" in navigator) {
  register();
}


function register() {
  // Register Service Worker
 
}


function subscribe() {
  // Subscribe the user
  
}


document.getElementById('subscribe').addEventListener('click', (e) => {
  subscribe();
});

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
