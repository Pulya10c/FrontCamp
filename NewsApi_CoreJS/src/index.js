import Controller from './app/Controller';
import Model from './app/Model';
import View from './app/View';

import './asserts/styles.scss';

const app = new Controller(new Model(), new View());
