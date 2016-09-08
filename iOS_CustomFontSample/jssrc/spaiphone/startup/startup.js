//startup.js file
var appConfig = {
    appId: "SampleApp",
    appName: "SampleApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.1.1.240",
    serverPort: "80",
    secureServerPort: "443",
    url: "https://globeone-dev.konycloud.com/SampleApp/MWServlet",
    secureurl: "https://globeone-dev.konycloud.com/SampleApp/MWServlet",
    middlewareContext: "SampleApp"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmHomeGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 6000
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};