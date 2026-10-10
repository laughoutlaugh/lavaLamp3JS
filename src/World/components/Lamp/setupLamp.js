import { glassMaterial } from "./material.js";

function setupLamp( data ) {
    const lamp = data.scene.getObjectByName( 'lavaLamp' );

    const metalPart = lamp.children[0];
    const glassPart = lamp.children[1];

    glassPart.material = glassMaterial();

    metalPart.castShadow = true;
    glassPart.castShadow = true;

    return lamp;
}

function setupPanel( data ) {
    const lampPanel = data.scene.getObjectByName( 'lavaLampPanel' );

    return lampPanel;
}

export { setupLamp, setupPanel };