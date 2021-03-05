chrome.webRequest.onBeforeRequest.addListener(
  (info) => {
    return { redirectUrl: info.url.replace(/\/j\//, "/wc/join/") };
  },
  {
    urls: ["https://*.zoom.us/*"],
  },
  ["blocking"]
);
