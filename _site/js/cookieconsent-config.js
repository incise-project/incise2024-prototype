import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent/dist/cookieconsent.umd.js';

CookieConsent.run({
    cookie: {
      expiresAfterDays: 30
    },
    guiOptions: {
        consentModal: {
            layout: "bar inline",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "bar",
            position: "left",
            equalWeightButtons: true,
            flipButtons: true
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Cookies on this website",
                    description: "We use some essential cookies on this website to ensure it works correctly. We would also like to use some analytics cookies so we can understand how people use this website and help us to make improvements.",
                    acceptAllBtn: "Accept analytics cookies",
                    acceptNecessaryBtn: "Reject analytics cookies",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"/about/privacy.html\">Privacy Policy</a> <a href=\"/about/cookies.html\">Cookie Statement</a> <a href=\"/about/legal.html\">Legal notice</a>"
                },
                preferencesModal: {
                    title: "Manage your cookie settings",
                    acceptAllBtn: "Accept analytics cookies",
                    acceptNecessaryBtn: "Reject analytics cookies",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "We use some essential cookies on this website to ensure it works correctly. We would also like to use some analytics cookies so we can understand how people use this website and help us to make improvements."
                        },
                        {
                            title: "Essential cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "The website cannot function properly without these cookies. If you wish, you can disable cookies completely in your browser preferences.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "With your consent we use analytics cookies to better understand how you interact with our website. This helps us prioritize our work, improve our navigation and search, and demonstrate the reach of our work.<br><br>As an academic organization we take your privacy seriously and do not sell your data to any third parties.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "For more details on how we use cookies on this website and how we protect your personal please read <a class=\"cc__link\" href=\"/about/cookies.html\">our cookie statement</a> and <a class=\"cc__link\" href=\"/about/privacy.html\">our privacy policy</a>."
                        }
                    ]
                }
            }
        }
    }
});
