import { MeshPhysicalMaterial, MeshPhongMaterial, VideoTexture, SRGBColorSpace } from 'three';

function glassMaterial() {
    return new MeshPhysicalMaterial({
            roughness: 0,
            transmission: 1,
            thickness: 0.01
        }
    );
}

function lavaMaterial( video ) {
    // import video texture
    const texture = new VideoTexture( video );
    texture.colorSpace = SRGBColorSpace;

    return new MeshPhongMaterial({
        map: texture,
        color: "#fc5a03",
        toneMapped: false,

    });
}

export { glassMaterial, lavaMaterial };