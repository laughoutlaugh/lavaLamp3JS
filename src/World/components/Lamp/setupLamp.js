import { glassMaterial, lavaMaterial } from "./material.js";

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
    const panel = data.scene.getObjectByName( 'lavaLampPanel' )
    console.log( "Loaded panel :3", panel );
    panel.material = lavaMaterial( video );

    return panel;
}

export { setupLamp, setupPanel };