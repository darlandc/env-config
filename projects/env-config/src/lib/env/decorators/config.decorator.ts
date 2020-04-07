import { config } from '../config/config';

export function Config(atributo: string ) {
  return (target: any, key: string) => {
    const descriptor = Object.getOwnPropertyDescriptor(target, key) || {};
    descriptor.value = config[atributo];
    Object.defineProperty(target, key, descriptor);
  };
}
