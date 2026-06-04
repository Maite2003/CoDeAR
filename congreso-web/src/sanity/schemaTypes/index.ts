import { type SchemaTypeDefinition } from 'sanity';
import { speaker } from './speaker';
import { sponsor } from './sponsor';
import { expo } from './expo';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [speaker, sponsor, expo],
};
