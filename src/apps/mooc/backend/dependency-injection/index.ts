import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
import config from '../shared/config'

const container = new ContainerBuilder();
const loader = new YamlFileLoader(container);
const env = config.NODE_ENV;

loader.load(`${__dirname}/application_${env}.yaml`);

export default container;
