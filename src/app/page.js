'use client'
// import { Router } from 'next/navigation'

// import Produto from './CadastroProduto/page'
import Link from 'next/link'
import style from './page.module.css'
export default function Home() {
  return (
   /*<div className={style.div}>*/

       <ul className={style.div}>
          <li className={style.div}>
           <Link href="/Cadastro"> <button  className={style.button} type="submit">VENDAS</button></Link>
          </li>
          <li>
            <Link href="/Edicao"><button className={style.button} type="submit">edicao</button></Link>
          </li>
          <li>
            <Link href="/CadastroProduto"><button className={style.button} type="submit">CadastroDe Vendas</button></Link>
          </li>
        </ul>
       
   /*</div>*/
  )
}
