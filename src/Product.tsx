export interface Product {
    id: number,
    name: string,
    color: string,
    price: number,
    quantity: number,
    size: number
  }

export const mockProducts: Product[] = [
  {
    id: 0,
    name: 'Alize Velluto Yarn',
    color: 'red',
    price: 15,
    quantity: 20,
    size: 2
  },
  {
    id: 1,
    name: 'Alize Bella Yarn',
    color: 'blue',
    price: 16,
    quantity: 15,
    size: 3
  },
  {
    id: 2,
    name: 'Alize Klasik Yarn',
    color: 'green',
    price: 17,
    quantity: 10,
    size: 4
  },
  {
    id: 3,
    name: 'Alize Diva Yarn',
    color: 'yellow',
    price: 18,
    quantity: 5,
    size: 2
  },
  {
    id: 4,
    name: 'Alize Midi Yarn',
    color: 'orange',
    price: 14,
    quantity: 25,
    size: 3
  },
  {
    id: 5,
    name: 'Alize Cotton Gold Yarn',
    color: 'purple',
    price: 13,
    quantity: 30,
    size: 2
  },
  {
    id: 6,
    name: 'Alize Forever Yarn',
    color: 'black',
    price: 12,
    quantity: 35,
    size: 3
  }
]
