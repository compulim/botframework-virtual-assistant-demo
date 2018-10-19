let bingSpeechTokenPromise;
let lastFetchBingSpeechToken = 0;

export default function () {
  console.log('fetching');

  const now = Date.now();

  if (!bingSpeechTokenPromise || now - lastFetchBingSpeechToken > 300000) {
    console.log('fetching Bing Speech token');

    bingSpeechTokenPromise = fetch('https://hawo-webchat-virtual-assistant-demo.azurewebsites.net/bingspeech/token', { method: 'POST' })
      .then(res => res.ok ? res.json() : Promise.reject('failed to fetch Bing Speech token'))
      .then(({ token }) => token);
  }

  return bingSpeechTokenPromise;
};
