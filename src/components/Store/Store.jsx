import { useState } from 'react'
import './store.css'
import IconSwitch from '../IconSwitch/IconSwitch.jsx'
import CardsView from '../CardsView/CardsView.jsx'
// иконки
import view_list from '../../mi/view_list.png'
import view_module from '../../mi/view_module.png'
// Data
import { products } from '../../data/data.js'


export default function Store() {
    const [view, setView] = useState('module')
    const viewSwitch = (view) => {
        setView(view)
    }
    const icons = [view_list, view_module]
    return (
    <div>
        <IconSwitch icons={icons} viewSwitch={viewSwitch} view={view}/>
        <CardsView  view={view} data={products}/>
    </div>
    )
}
