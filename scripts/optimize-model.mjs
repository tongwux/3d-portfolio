import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, resample, textureCompress } from '@gltf-transform/functions';
import sharp from 'sharp';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read('public/models/your-model.glb');
await doc.transform(dedup(), prune(), resample(), textureCompress({encoder:sharp,targetFormat:'webp',resize:[1024,1024]}));
await io.write('public/models/hero-optimized.glb',doc);
