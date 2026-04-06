import { GLTFLoader } from 'three/addons';

class Lamp {
    constructor() {
        const loader = new GLTFLoader();

        this.lampData = loader.loadAsync( '../../../../models/lavaLamp.glb' );

        console.log( 'loaded ^^', this.lampData );
    }

    setupModel() {
        const model = this.lampData.scene.children[0];
    }
}

export { Lamp };