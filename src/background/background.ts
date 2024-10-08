// export {};
// /** Fired when the extension is first installed,
//  *  when the extension is updated to a new version,
//  *  and when Chrome is updated to a new version. */
//
// chrome.runtime.onInstalled.addListener(async (details) => {
//   if (details.reason === "install") {
//     await chrome.windows.create({
//       type: "popup",
//       url: "index.html",
//       width: 400,
//       height: 400,
//     });
//   }
// });
//
// chrome.runtime.onConnect.addListener((port) => {
//   console.log("[background.js] onConnect", port);
// });
//
// chrome.runtime.onStartup.addListener(() => {
//   console.log("[background.js] onStartup");
// });
//
// /**
//  *  Sent to the event page just before it is unloaded.
//  *  This gives the extension opportunity to do some clean up.
//  *  Note that since the page is unloading,
//  *  any asynchronous operations started while handling this event
//  *  are not guaranteed to complete.
//  *  If more activity for the event page occurs before it gets
//  *  unloaded the onSuspendCanceled event will
//  *  be sent and the page won't be unloaded. */
// chrome.runtime.onSuspend.addListener(() => {
//   console.log("[background.js] onSuspend");
// });

chrome.runtime.onMessage.addListener((request, sender) => {
  if (request.message === "reload") {
    console.log("Reloading tab " + sender.tab?.id," with delay ", request.delay);
    setTimeout(() => {
      if (sender.tab?.id) chrome.tabs.update(sender.tab.id, { url: "https://www.afternic.com/domains/add", active: true });
    }, request.delay);
  }
});
