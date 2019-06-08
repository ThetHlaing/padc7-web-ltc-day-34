//https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API

console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
    const data = e.data.json();
    self.registration.showNotification(data.title, {
      body: data.body
    });
  });
