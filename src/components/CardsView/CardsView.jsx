import React from 'react'
import ShopCard from '../ShopCard/ShopCard.jsx'
import './CardsView.css'

export default function CardsView({view,data}) {
    return (
        <div className={`product-list ${view}`}>{data.map((product)=>{
            return <ShopCard product={product} className={view}/>
        })}</div>
    )
}
