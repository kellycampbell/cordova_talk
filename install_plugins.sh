#!/bin/sh

# install plugins for talk:
# Requires cordova > 5.x

cordova plugin add cordova-plugin-camera
cordova plugin add cordova-plugin-statusbar
cordova plugin add cordova-plugin-whitelist
cordova plugin add nl.x-services.plugins.socialsharing

cordova prepare

