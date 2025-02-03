import { ICategoria, CriarCategoriaProps } from "./categoria.types";

class Categoria implements ICategoria {
    private _id: string;
    private _nome: string;

    public get id(): string{
        return this._id;
    }

    private set id(value: string){
        this._id = value;
    }

    public get nome(): string{
        return this._nome;
    }

    private set nome(value: string){
        if(value === null || value === undefined){
            throw Error ('Nome da categoria é nuleo ou indefinido')
        }
        if(value.trim().length < 3){
            console.log(value);
           throw Error('Nome da categoria dever ter mais de tres caracteres.')
        }
        if(value.trim().length > 50){
            throw Error(' Nome da Categoria ultrapassa o tamanho máximo.')
        }
        
        this._nome = value;
    }

    private constructor(categoria:ICategoria){
        this.id = categoria.id;
        this.nome = categoria.nome;
    }
    
    /////////////////////////
    //Static Factory Method//
    /////////////////////////

    public static criar(props:CriarCategoriaProps): Categoria{
        let id = "1234"; //refatorar para gerar com UUID
        let {nome} = props;
        return new Categoria({id, nome});
    }
}

export { Categoria }