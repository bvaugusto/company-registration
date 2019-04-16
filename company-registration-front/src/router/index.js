import Organizacao from '../components/Organizacao';
import Home from "../components/Home";

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/organizacao',
    name: 'Organizacao',
    component: Organizacao
  }
]
