import type { Node, Edge } from '@xyflow/svelte';

export const initialNodes: Node[] = [
  {
    id: '2',
    position: { x: 250, y: 0 },
    data: { icon: 'function', title: 'Bob', subline: 'apiContents' },
    type: 'turbo'
  },
  {
    id: '4',
    position: { x: 250, y: 250 },
    data: { icon: 'function', title: 'Lisa', subline: 'sdkContents' },
    type: 'turbo'
  },
  {
    id: '5',
    position: { x: 500, y: 125 },
    data: { icon: 'function', title: 'Client', subline: 'api, sdk' },
    type: 'turbo'
  }
];

export const initialEdges: Edge[] = [
  {
    id: 'e3-4',
    source: '2',
    target: '4'
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5'
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5'
  },
  {
    id: 'e5-1',
    source: '5',
    target: '1'
  }
];
