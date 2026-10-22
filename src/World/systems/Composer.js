import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js';
import { DotScreenShader } from 'three/addons/shaders/DotScreenShader.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { FilmShader } from 'three/addons/shaders/FilmShader.js';
import { HalftoneShader } from 'three/addons/shaders/HalftoneShader.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { HalftonePass } from 'three/addons/postprocessing/HalftonePass.js';

class Composer {
    constructor( scene, camera, renderer ) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;

        this.composer = new EffectComposer( this.renderer );
        this.composer.addPass( new RenderPass( this.scene, this.camera ) );

        this.bParams = {
            focus: 1.0,
            aperture: 0.025,
            maxblur: 0.2
        }
        this.bPass = new BokehPass( this.scene, this.camera, this.bParams );
        //this.composer.addPass( this.bPass );

        this.hTParams = {
            shape: 1,
            radius: 4,
            rotateR: Math.PI / 12,
            rotateB: Math.PI / 12 * 2,
            rotateG: Math.PI / 12 * 3,
            scatter: 0,
            blending: 1,
            blendingMode: 1,
            greyscale: false,
            disable: false
        };

        this.halftonePass = new HalftonePass( this.hTParams );
        this.composer.addPass( this.halftonePass );
    }

    tick( delta ) {
        this.composer.render();
    }
}

export { Composer };