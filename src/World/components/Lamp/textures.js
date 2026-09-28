import { MeshPhysicalMaterial, MeshStandardMaterial, TextureLoader } from 'three';

function lavaMaterial() {
    // create texture loader
    const textureLoader = new TextureLoader();

    // load textures
    const lavaTexture = textureLoader.load(
        '/assets/EDITED-vultured-a lava flow in the lava of a volcano.jpg',
        undefined,
        undefined,
        ( error ) => {
            console.log( 'Failed to load lava texture :(', error );
        }
    );

    return new MeshStandardMaterial({
        map: lavaTexture, // color map
    });
}

function glassMaterial() {

    const glassMaterial = new MeshPhysicalMaterial({
        transmission: 1,
        roughness: 0,
    })

    return glassMaterial;
}

export { lavaMaterial, glassMaterial };