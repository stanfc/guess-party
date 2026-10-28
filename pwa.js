let installPrompt = null;
let installed = window.matchMedia('(display-mode: standalone)').matches;
function updateInstallButton() {
  const button = document.querySelector('#install-app');
  if (button) button.hidden = installed || !installPrompt;
}
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installPrompt = event;
  updateInstallButton();
});
window.addEventListener('appinstalled', () => {
  installed = true;
  installPrompt = null;
  updateInstallButton();
});
export function connectInstallButton() {
  const button = document.querySelector('#install-app');
  if (!button) return;
  updateInstallButton();
  button.addEventListener('click', async () => {
    const prompt = installPrompt;
    if (!prompt) return;
    installPrompt = null;
    updateInstallButton();
    try { await prompt.prompt(); await prompt.userChoice; } catch {}
  });
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).catch(error => {
      console.warn('離線功能暫時無法啟用：', error);
    });
  });
}
