const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfiguration = {
  rewrites: async () => [
    {
      source: "/wa-sender",
      destination: "/wa-sender.html",
    },
    {
      source: "/join-meeting",
      destination:
        "https://us05web.zoom.us/j/82435259699?pwd=WZlDSowhUM4jcqybTO5a365mEE4aJB.1", // Replace with your Zoom meeting link
      permanent: false, // Use false if the link may change
    },
    {
      source: "/join-group",
      destination: "https://chat.whatsapp.com/HG3RdNxRuqaLnVhdkPeScM", // Replace with your Zoom meeting link
      permanent: false, // Use false if the link may change
    },
  ],
  target: "serverless", //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
