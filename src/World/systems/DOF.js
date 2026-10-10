import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';

class DOF {
    constructor( scene, camera, renderer ) {
        this.composer = new EffectComposer( renderer );
        this.rPass = new RenderPass( camera, renderer );

        this.bParams = {
            focus: 10.0,
            aperture: 0.025,
            maxblur: 0.01
        }

        this.bPass = new BokehPass( camera, renderer, this.bParams );

        this.composer.addPass( this.rPass );
        this.composer.addPass( this.bPass );

    }

    tick( delta ) {
        this.composer.render( delta );
    }
}

export { DOF };