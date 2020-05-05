/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createElement } from 'react';
import { routeNode, withRoute } from 'react-router5';
import Kittens from '../Kittens';
import Doggos from '../Doggos';
import Pigeon from '../Pigeon';
import Pork from '../Pork';
import Mice from '../Mice';
import NotFound from '../../../NotFound';

const components = {
  kittens: Kittens,
  doggos: Doggos,
  pigeon: Pigeon,
  pork: Pork,
  mice: Mice,
};

function Main(props) {
  const { route } = props;
  const segment = route.name.split('.')[1];
  return createElement(components[segment] || NotFound);
}

export default withRoute(Main);// routeNode('')(Main)
