# Cordova Talk from LibertyJS 2015

This presentation is in the form of a Cordova App.

To load in a browser, use www/index.html

To build and run the app, install Cordova:

    npm install -g cordova

(You'll also need dev tools for whatever platform you're using, e.g. [Android SDK](https://developer.android.com/sdk/index.html))

Then install plugins and create a platform for your device:

    ./install_plugins.sh
    cordova platform add android (or ios)

Then attach your device and run:

    cordova run android

