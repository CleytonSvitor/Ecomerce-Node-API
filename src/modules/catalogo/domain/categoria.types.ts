interface ICategoria {
    id:string;
    nome:string;
}

type CriarCategoriaProps = Omit<ICategoria, "id">

export {ICategoria, CriarCategoriaProps}