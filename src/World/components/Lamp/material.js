import { MeshPhysicalMaterial, MeshPhongMaterial, MeshStandardMaterial, MeshBasicMaterial, VideoTexture } from 'three';

/**
 * Initializes and returns basic glass texture.
 *
 * @returns {MeshPhysicalMaterial}
 */
function glassMaterial() {
    return new MeshPhysicalMaterial({
            roughness: 0,
            transmission: 1,
            thickness: 0.01
        }
    );
}

/**
 * Initializes and returns animated, emissive video texture with provided video element.
 *
 * @param {HTMLElement} video   .mp4 video
 * @returns {MeshPhongMaterial} animated video material
 */
function lavaMaterial( video ) {
    const texture = new VideoTexture( video );

    return new MeshBasicMaterial({
        map: texture,
        //color: "#fc5a03",
        //emissive: '#FFFFFF',
        //emissiveIntensity: 0.15,
        //toneMapped: false,

    });
}

export { glassMaterial, lavaMaterial };