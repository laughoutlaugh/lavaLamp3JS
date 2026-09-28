import { TextureLoader, MeshStandardMaterial } from 'three';

function woodMaterial() {
    const textureLoader = new TextureLoader();

    const woodTexture = textureLoader.load(
        '/src/World/components/Room/assets/the-cleveland-museum-of-art-ZX5NLSmivDI-unsplash.jpg',
        undefined,undefined,
        ( error ) => {
            console.log( 'Failed to load wood texture :(', error );
        }
    );

    const woodMaterial = new MeshStandardMaterial({
        map: woodTexture,
    })

    return woodMaterial;
}

function wallMaterial() {}

export { woodMaterial, wallMaterial };