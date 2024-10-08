import Script from 'next/script';

const HubSpotTracking = () => {
  return (
    <Script
      id="hubspot-tracking"
      strategy="afterInteractive"
      src="//js.hs-scripts.com/22203768.js"
    />
  );
};

export default HubSpotTracking;