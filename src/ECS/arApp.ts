import { PerspectiveCamera } from 'three';
import { MainCamera } from './Systems/mainCamera';
"use-strict"

/* VARIABLE DECLARATION */
const mainCamera: MainCamera = new MainCamera();
const startArButtonIdName = "start-ar-button";

/* CUSTOM FUNCTIONS */

/**
 * The function `implementArApplication` checks if the AR session is supported and adds an event listener to
 * start AR if supported.
 */
export async function implementArApplication() {

    const isArSessionSupported = navigator.xr && navigator.xr.isSessionSupported && await navigator.xr.isSessionSupported("immersive-ar");

    if (isArSessionSupported) {
        document.getElementById(startArButtonIdName).addEventListener("click", activateXR)
    } else {
        noARDevice();
    }

}

/* Container Class */
class name {
    constructor(parameters: string) {
        /* This is a comment test. */
    }
}


async function activateAR() {
    /* Add the custom scene in A-FRAME HTML */
    document.body.innerHTML = "<a-scene webxr=requiredFeatures: hit-test,local-floor; optionalFeatures: dom-overlay,unbounded; overlayElement:#overlay>\
    \
    <a-assets>\
        <a-asset-item id=\"engine-model\" src=\"./assets/ZZ-S-0001-PreConPorto.glb\"></a-asset-item>\
        <a-asset-item id=\"building-model\" src=\"./assets/ZZ-S-0001-PreConPorto.glb\"></a-asset-item>                    </a-assets>\    <a-entity position=\"-8 -131 13\" gltf-model=\"#building-model\"></a-entity>\
</a-scene>";

};


/* Method that handles no AR compatible devices.
TODO:   Add more functionality than just an alert.
     */
function noARDevice() {
    alert("This device is not compatible with XR.");
};