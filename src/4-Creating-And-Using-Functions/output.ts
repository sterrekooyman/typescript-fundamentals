import { productsURL } from "../lib";

const prefix = '🐉 ';

type ProductType = {
  id: number,
  name: string,
  icon?: string;
}

export default async function updateOutput(id: string = 'output') {
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);


if (output && html) {
  output.innerHTML = html;
  }
}

function layoutProducts(products: ProductType[]) {
const items = products.map(({ id, name, icon }) => {
  const productHtml = `
  <span class="card-id">#${id}</span>
    <i class="card-icon ${icon} fa-lg"></i>
  <span class="card-name">${name}</span>
  `;
  const cardHtml = `
  <li>
      <div class="card">
          <div class="card-content">
              <div class="content">
              ${productHtml}
              </div>
          </div>
      </div>
  </li>
  `;
  return cardHtml;
});
let productsHtml = `<ul>${items.join('')}</ul>`;
return productsHtml;
}

async function getProducts(): Promise<ProductType[]> {
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}

runTheLearningSamples();
function runTheLearningSamples() {
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`);
  }

  displayProductInfo(10, 'Pizza');

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(2,3));

  function addNumbersDeclaration(x: number, y:number): number {
    const sum: number = x + y;
    return sum;
  }

  const addNumbersExpression = function(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(5,3));

  const sampleProducts = [
    {
      id: 10, 
      name: 'Pizza slice',
      icon: 'fas fa-pizza-slice'
    },
    {
      id: 20, 
      name: 'Ice cream',
      icon: 'fas fa-ice-cream'
    },
    {
      id: 30, 
      name: 'Cheese',
      icon: 'fas fa-cheese'
    },
  ];

  function getProductNames(): string[] {
    return sampleProducts.map((p) => p.name);
  }

  console.log(`${prefix} return array`);
  console.log(getProductNames());

  function getProductById(id: number): ProductType | undefined {
    return sampleProducts.find(p => id === p.id)
  }

  console.log(`${prefix} return ProductType`);
  console.log(getProductById(10));

  function displayProducts(products: ProductType[]): void {
    const productNames = products.map((p) => {
      const name = p.name.toLowerCase();
      return name;
    });
    const msg = `Sample products include: ${productNames.join(', ')}`;
    console.log(`${prefix} return void`);
    console.log(msg);
  }

  displayProducts(sampleProducts);

  const { floor, random } = Math;

  const getRandomInt = (max: number = 1000) => floor(random() * max);

  function createProduct(name: string, icon?: string):ProductType {
    const id = getRandomInt();
    return {
      id, name, icon
    }
  }

  console.log(`${prefix} Optional parameters`);
  let pineapple = createProduct('pineapple', 'pine-apple.jpg');
  let mango = createProduct('mango');
  console.log(pineapple, mango);

  function buildAddress(street: string, city:string, ...restOfAddress: string[]) {
    const address = `${street} ${city} ${restOfAddress.join(', ')}`;
    return address;
  }

  const someAddress = buildAddress(' 1 lois lane', 'smallville', 'apt 101', 'area 51', 'mystery country');
  console.log(`${prefix} Rest parameters`);
  console.log(someAddress);

  function displayProduct({id, name}: ProductType): void {
    console.log(`$prefix Destructuring parameters`);
    console.log(`Product id=${id} and name=${name}`);

    const prod = getProductById(10);
    if(prod) {
      displayProduct(prod);
    }
    
    
  }
}