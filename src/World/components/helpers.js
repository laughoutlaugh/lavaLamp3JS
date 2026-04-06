import { GridHelper,
         AxesHelper,
         DirectionalLightHelper,
         HemispherLightHelper,
         PointLightHelper } from 'three';

function createGridHelper( size=10, div=10 ) {
    const axes = new AxesHelper( size );
    const grid = new GridHelper( size, div );

    axes.position.set( (size/-2), 0, (size/-2) );

    return { axes, grid };
}

function createDirLightHelper( light ) {
    const helper = new DirectionalLightHelper()
}

function createHemLightHelper( light ) {

}

function createPoiLightHelper( light ) {

}

export { createGridHelper };