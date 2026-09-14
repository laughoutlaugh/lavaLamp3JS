import { DirectionalLight, AmbientLight, HemisphereLight, PointLight, SpotLight,
         DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from 'three';

/**
 * -- Reusable light object functions --
 * Each function creates a light and a
 * connected helper ( if available ).
 */


// Uniform illumination, no shadows
function cAmbLight( color=0xffffff, intensity=1 ) {
    return ( new AmbientLight( color, intensity ) )
}

// "Sun", Distant light source
function cDirLight( color=0xffffff, intensity=1, help='T' ) {
    const light = new DirectionalLight( color, intensity );

    if ( help === 'T' ) {
        const helper = new DirectionalLightHelper( light );

        return { light, helper };
    }

    return { light };
}

// Lamp
function cPointLight( color=0xffffff, intensity=1, help='T', distance=0, decay=2 ) {
    const light = new PointLight( color, intensity, distance, decay );

    if ( help === 'T' ) {
        const helper = new PointLightHelper( light );

        return { light, helper };
    }

    return { light };
}

// Cone light
function cSpotLight( color=0xffffff, intensity=1, help='T', distance=0, decay=2 ) {
    const light = new SpotLight( color, intensity, distance, Math.PI/3, 0, decay );

    if ( help === 'T' ) {
        const helper = new SpotLightHelper( light );

        return { light, helper };
    }

    return { light }
}

// Gradient, sky=directional, ground=ambient
function cHemiLight( sky=0xffffff, ground=0xffffff, intensity=1, help='T' ) {
    const light = new HemisphereLight( sky, ground, intensity );

    if ( help === 'T' ) {
        const helper = new HemisphereLightHelper( light );

        return { light, helper };
    }

    return { light };
}

export { cAmbLight, cDirLight, cPointLight, cSpotLight, cHemiLight };