import { type SchemaTypeDefinition } from 'sanity';
import { speaker } from './speaker';
import { sponsor } from './sponsor';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [speaker, sponsor],
};
