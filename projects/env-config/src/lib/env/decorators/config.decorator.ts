import { dev } from '../config/dev.config';
import { prod } from '../config/prod.config';

export function Config(setup: string, env: string ) {
  return (target: any, key: string) => {

    const config = null;

    if (env === 'dev') {
      this.config = env;
    }
    if (env === 'prod') {
      this.config = env;
    }

    const descriptor = Object.getOwnPropertyDescriptor(target, key) || {};
    descriptor.value = config[setup];
    Object.defineProperty(target, key, descriptor);
  };
}
