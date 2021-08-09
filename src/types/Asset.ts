import { GraphCms_Asset } from 'graphql-types';

export type Asset = Pick<GraphCms_Asset, 'handle' | 'height' | 'url' | 'width'>;
