import { glassMaterial, lavaMaterial } from "./material.js";
import { Vector3 } from "three";

function setupLamp( data ) {
    const lamp = data.scene.getObjectByName( 'lavaLamp' );

    const metalPart = lamp.children[0];
    const glassPart = lamp.children[1];

    glassPart.material = glassMaterial();

    metalPart.castShadow = true;
    glassPart.castShadow = true;

    return lamp;
}

function setupPanel( data, video ) {
    const panel = data.scene.getObjectByName( 'lavaLampPanel' );
    panel.material = lavaMaterial( video );
    //let measure = new Vector3();
    //let box = panel.getSize( measure );
    //console.log( measure );

    return panel;
}

export { setupLamp, setupPanel };