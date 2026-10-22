import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js';
import { DotScreenShader } from 'three/addons/shaders/DotScreenShader.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { FilmShader } from 'three/addons/shaders/FilmShader.js';
import { HalftoneShader } from 'three/addons/shaders/HalftoneShader.js';

function createComposer( renderer, scene, camera ) {

    const composer = new EffectComposer( renderer );
    composer.addPass( new RenderPass( scene, camera ) );

    const effect1 = new ShaderPass( DotScreenShader );
    effect1.uniforms[ 'scale' ].value = 0.01;
    //composer.addPass( effect1 );

    const effect2 = new ShaderPass( RGBShiftShader );
    effect2.uniforms[ 'amount' ].value = 0.00015;
    //composer.addPass( effect2 );

    const effect3 = new OutputPass();
    //composer.addPass( effect3 );

    const effect4 = new ShaderPass( HalftoneShader );
    //composer.addPass( effect4 );

    return composer;
}

export { createComposer };