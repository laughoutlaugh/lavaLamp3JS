import { glassMaterial, lavaMaterial } from "./material.js";
import { PointLight } from 'three';

/**
 * Separates lava lamp mesh from the rest of the Blender scene; textures glass
 * part; enables shadow-casting.
 *
 * @param {Object3D}    data    loaded .glb containing Blender scene
 * @returns {Object3D}          textured lava lamp mesh
 */
function setupLamp( data ) {
    const lamp = data.scene.getObjectByName( 'lavaLamp' );

    const metalPart = lamp.children[0];
    const glassPart = lamp.children[1];

    glassPart.material = glassMaterial();

    metalPart.castShadow = true;
    glassPart.castShadow = true;



    return lamp;
}

/**
 * Separates lava lamp panel from the rest of the Blender scene; applies video texture.
 *
 * @param {Object3D}    data    loaded .glb file containing Blender scene
 * @param {HTMLElement} video   .mp4 of lava within lava lamp
 * @returns {Object3D}          textured lamp panel
 */
function setupPanel( data, video ) {
    const panel = data.scene.getObjectByName( 'lavaLampPanel' )

    panel.material = lavaMaterial( video ); // assign animated lava texture

    const pLight = new PointLight( '#bd4626' );
    pLight.position.set( panel.position.x, 2.7, panel.position.z );

    panel.children.push( pLight );

    return panel;
}

export { setupLamp, setupPanel };