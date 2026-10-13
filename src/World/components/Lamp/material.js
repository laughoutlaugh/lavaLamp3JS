import { MeshPhysicalMaterial, VideoTexture } from 'three';

function glassMaterial() {
    return new MeshPhysicalMaterial({
            roughness: 0,
            transmission: 1,
            thickness: 0.01
        }
    );
}

function lavaMaterial( video ) {
    const texture = new VideoTexture( video );

    const material = new MeshPhysicalMaterial({
        map: texture,
    });

    return material;
}

export { glassMaterial, lavaMaterial };