import type { Node, Edge } from '@xyflow/svelte';

export const initialNodes: Node[] = [
  {
    id: '2',
    position: { x: 50, y: 0 },
    data: { icon: 'function', title: 'Bob', subline: 'Designer' },
    type: 'turbob'
  },
  {
    id: '4',
    position: { x: 250, y: 250 },
    data: { icon: 'function', title: 'Lisa', subline: 'Supervisor' },
    type: 'turboa'
  },
  {
    id: '5',
    position: { x: 500, y: 125 },
    data: { icon: 'function', title: 'Client', subline: '' },
    type: 'turboc'
  }
];

export const initialEdges: Edge[] = [
  {
    id: 'e3-4',
    source: '2',
    target: '4'
  },
  {
    id: 'e4-3',
    source: '4',
    target: '2'
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5'
  },
  {
    id: 'e5-2',
    source: '5',
    target: '2'
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5'
  },
  {
    id: 'e5-4',
    source: '5',
    target: '4'
  },
  {
    id: 'e5-1',
    source: '5',
    target: '1'
  },
  {
    id: 'e1-5',
    source: '1',
    target: '5'
  }
];
