import {useState} from "react"
function Carrinho(){
    // quantidade = valor atual | setQuantidade = altera o estado | 0 = valor inicial.
    const [quantidade, setQuantidade] = useState(0)

    const preco = 120
    const total = quantidade * preco


    function adicionar(){
        setQuantidade(quantidade + 1)
    }

    function remover(){
        if (quantidade > 0){
            setQuantidade(quantidade - 1)
        }
        
    }

    function limpar(){
        setQuantidade(0)
    }

    return(

        <section>
            <h2>Carrinho</h2>
            <hr />
            <p>Produto: Mouse Gamer</p>
            <p>Quantidade: {quantidade}</p>
            <button onClick={adicionar}>Adicionar</button>
            <button onClick={remover}>Remover</button>
            <button onClick={limpar}>Limpar</button>
            <hr />
            <p>Total: R$ {total}</p>
        </section>
    )

    
}

export default Carrinho