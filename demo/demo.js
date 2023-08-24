const options = {
    environment: 'prod',
    settings: {
        filter: 'clear'
},
    permissionButton: {
      label: 'Permitir',
      color: '#F9F9F9',
      backgroundColor: '#39C560',
      borderRadius: '10px',
      border: '1px solid'
    },
    startButton: {
      label: 'Escanear rosto',
      color: '#F9F9F9',
      backgroundColor: 'blue',
      borderRadius: '0.25rem',
      border: '1px solid #2D994B'
    }
  } 
  
  const token = "";
  const useFaceAuthenticator = false;
  const sdkContainer = 'sdk-container';
  const personId = ''
  async function initSdk() {
    const sdk = window['FacesSDK'];
    const facesSdk = await sdk.initializeSdk(token, sdkContainer, useFaceAuthenticator, personId, options);
    const result = await facesSdk.execute();
    console.log(result)
  }
  
  setTimeout(() => {
    initSdk();
  }, 5000)
