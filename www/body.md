Cordova Plugins

_Cross Platform_ mobile "apps"

from HTML, CSS and _JavaScript_

Deployed as native app

_iOS_, _Android_, <span class="size2">Blackberry,</span> <span class="size3">Windows Phone, FirefoxOS,</span> <span class="size4">Amazon-FireOS, Palm WebOS, Tizen, Bada, and Symbian</span>


Plugins = how to do things webapps can't do

(shouldn't do?)

Most used plugins: device, _console_, whitelist


os feature plugins: _file_, _file-transfer_

contacts, _statusbar_, dialogs, _splashscreen_, globalization


device plugins:
<a id="take-picture"><em>camera</em></a>,
device-motion,
*device-orientation*,
battery-status,
*vibration*,
inappbrowser

<img id="picture">


W3C-ish plugins:
*geolocation*,
media,
*media-capture*,
network-information

Other:
*bluetooth*, bluetooth-ble - <span class="size3">Don Coleman @ Chariot</span>

social sharing <span id="social-sharing-demo"><em><i class="fa fa-twitter-square"></i> Tweet</em></span>



security: whitelist, in-app-browser

content security policy - stricter in 5.x


Not a panacea

Still need to know some native app dev

Write once, debug everywhere

(*Crash* everywhere)


What's in a plugin?


*plugin.xml* = config

js-modules. *clobbers* globals

platform specifics 

platform *sources* (& headers <span class="size3">Yuck!</span>)

*native* libs

permissions needed by plugins

icons, images, other resources

calls: _JS_ -> cordova.js -> (JSON) -> _Native_ (Java, ObjC)

```
<?xml version="1.0" encoding="UTF-8"?>
<plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        xmlns:android="http://schemas.android.com/apk/res/android"
    id="com.stratisems.cordova.lockuplink.plugin"
    version="0.1.0">

  <name>TwoPronged LockUplink</name>

  <description>TwoPronged LockUplink Driver Plugin for Schlage locks</description>

  <license>Proprietary</license>

  <asset src="www/lockuplink.js" target="js/lockuplink.js" />

  <js-module src="www/lockuplink.js" name="lockuplink">
    <clobbers target="lockuplink" />
  </js-module>

  <js-module src="node_modules/es6-promise/dist/es6-promise.js" name="es6-promise"/>

  <platform name="android">
    <config-file target="AndroidManifest.xml" parent="/*">
      <uses-feature android:name="android.hardware.usb.host" />
    </config-file>
    
    <config-file target="res/xml/config.xml" parent="/*">
      <feature name="LockUplink">
        <param name="android-package" value="com.stratisems.lockuplink.android.LockUplinkPlugin"/>
      </feature>
    </config-file>

    <framework src="submodules/twopronged_driver/AndroidLib" custom="true" />
    <source-file src="Android/src/LockUplinkPlugin.java" target-dir="src" />
  </platform>
</plugin>
```
```
cordova.exec(function(returnParams) {},
             function(error) {},
             "service", // roughly native class
             "action",  //         native method
             ["firstArgument", "secondArgument", 42, false]);
```

Cordova: http://cordova.apache.org/

This presentation: http://github.com/kellycampbell/cordova_talk


<div>
</div>


