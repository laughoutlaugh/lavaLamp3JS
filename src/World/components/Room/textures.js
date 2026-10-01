import { TextureLoader, MeshPhysicalMaterial, BackSide } from 'three';

/**
function woodMaterial() {
    const textureLoader = new TextureLoader();

    const woodColorTexture = textureLoader.load(
        '/assets/table/table.jpg',
        undefined,undefined,
        ( error ) => {
            console.log( 'Failed to load wood texture :(', error );
        }
    );

    const woodNormTexture = textureLoader.load(
        '/assets/table/NORMwood.jpg',
        undefined,undefined,
        ( error ) => {
            console.log( 'Failed to load wood texture :(', error );
        }
    );

    const woodMaterial = new MeshPhysicalMaterial({
        map: woodColorTexture,
        normalMap: woodNormTexture,
        // normalScale: 0.15,
        side: BackSide,
    })

    return woodMaterial;
}

function wallMaterial() {
    const textureLoader = new TextureLoader();

    const wallMaterial = new MeshPhysicalMaterial({

    });

    return wallMaterial;
}

export { woodMaterial, wallMaterial };

 **/