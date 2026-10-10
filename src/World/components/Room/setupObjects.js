
function setupObjects( object ) {

    // Prevent lava lamp from being loaded twice
    object.scene.getObjectByName( 'lavaLamp' ).removeFromParent();
    object.scene.getObjectByName( 'lavaLampPanel' ).removeFromParent();

    // Correct mesh normal values
    object.scene.children[1].material.normalScale = { x: 0.05, y: -0.05 };
    object.scene.children[6].material.normalScale = { x: 0.1, y: -0.1 };
    object.scene.children[8].material.normalScale = { x: 0.3, y: -0.3 };

    // Assign shadows
    object.scene.children[2].receiveShadow = true;
    object.scene.children[6].receiveShadow = true;
    object.scene.children[8].receiveShadow = true;

    object.scene.children[7].castShadow = true;
    object.scene.children[8].castShadow = true;

    return object.scene;
}

export { setupObjects };

