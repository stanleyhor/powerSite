const maxAllowedWidth = 100;
const transformerPerStorage = 4;
const numberOfItemsToSwitchLayout = 100;

const products = [
  {
    type: 'storage',
    name: 'Megapack 2XL',
    width: 40,
    length: 10,
    energy: 4,
    cost: 120_000,
    releaseDate: 2022,
    image: '/images/mega2xl.png',
    color: 'red'
  },
  {
    type: 'storage',
    name: 'Megapack 2',
    width: 30,
    length: 10,
    energy: 3,
    cost: 80_000,
    releaseDate: 2021,
    image: '/images/mega2.png',
    color: 'orange'
  },
  {
    type: 'storage',
    name: 'Megapack',
    width: 30,
    length: 10,
    energy: 2,
    cost: 50_000,
    releaseDate: 2005,
    image: '/images/mega.png',
    color: 'green'
  },
  {
    type: 'storage',
    name: 'Powerpack',
    width: 10,
    length: 10,
    energy: 1,
    cost: 20_000,
    releaseDate: 2000,
    image: '/images/power.png',
    color: 'purple'
  },
  {
    type: 'transformer',
    name: 'Transformer',
    width: 10,
    length: 10,
    energy: -0.25,
    cost: 10_000,
    image: '/images/transformer.jpg',
    color: 'gray'
  }
]

export {
  maxAllowedWidth,
  transformerPerStorage,
  numberOfItemsToSwitchLayout,
  products
}