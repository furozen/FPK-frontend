import {IEnviroment} from './IEnviroment';

export const environment:IEnviroment = {
  production: true,
  socketIo:{url:'wss://localhost:6760'},
  logLevel:'debug'
};
