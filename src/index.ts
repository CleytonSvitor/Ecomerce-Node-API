import { Categoria } from "./modules/catalogo/domain/categoria.entity";

let categoria = Categoria.criar({nome:"Banho"});
console.log(categoria);