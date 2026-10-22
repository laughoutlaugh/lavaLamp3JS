import { PointLight, SpotLight, FrontSide, DoubleSide } from 'three';

function setupObjects( object ) {

    // Prevent lava lamp from being loaded twice
    object.scene.getObjectByName( 'lavaLamp' ).removeFromParent();
    object.scene.getObjectByName( 'lavaLampPanel' ).removeFromParent();

    // Correct mesh normal values
    object.scene.getObjectByName( 'Ceiling' ).material.normalScale = { x: 0.05, y: -0.05 };
    object.scene.getObjectByName( 'Room' ).material.normalScale = { x: 0.1, y: -0.1 };
    object.scene.getObjectByName( 'Table' ).material.normalScale = { x: 0.3, y: -0.3 };

    // Assign shadows
    object.scene.getObjectByName( 'Floor' ).receiveShadow = true;
    object.scene.getObjectByName( 'Room' ).receiveShadow = true;
    object.scene.getObjectByName( 'Table' ).receiveShadow = true;

    object.scene.getObjectByName( 'standLamp' ).castShadow = true;
    object.scene.getObjectByName( 'Table' ).castShadow = true;

    setupLights( object );

    return object.scene;
}

function setupLights( object ) {
    const standLampPos = object.scene.getObjectByName( 'standLamp' ).position;

    const standPointLight = new PointLight( '#e6b8a3' );
    const standSpotLightUp = new SpotLight( '#e6b8a3', 1 );
    const standSpotLightDown = new SpotLight( '#e6b8a3', 1 );

    standPointLight.position.set( standLampPos.x, standLampPos.y, standLampPos.z );
    standSpotLightUp.position.set( standLampPos.x, standLampPos.y, standLampPos.z );
    standSpotLightDown.position.set( standLampPos.x, standLampPos.y, standLampPos.z );

    standSpotLightUp.target.position.set( standLampPos.x, 6, standLampPos.z );
    standSpotLightDown.target.position.set( standLampPos.x, 1, standLampPos.z );

    const ceilingPos = object.scene.getObjectByName( 'Ceiling' ).position;
    const roomPointLight = new PointLight( '#ffb595', 10 );
    roomPointLight.position.set( ceilingPos.x, 4.55, ceilingPos.z );
    roomPointLight.castShadow = true;
    roomPointLight.shadow.camera.near = 0.1;
    roomPointLight.shadow.camera.far = 10;

    roomPointLight.shadow.bias = -0.0001;
    roomPointLight.shadow.normalBias = 0.02;

    object.scene.children.push( standPointLight, standSpotLightUp, standSpotLightUp.target, standSpotLightDown,
                                standSpotLightDown.target, roomPointLight );
}

export { setupObjects };

// #e6b8a3