import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 8080,
  },

  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
};

export default (): Config => config;
