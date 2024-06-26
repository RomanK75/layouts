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
    const viewStorage = {
        key: 'view',
        get () {
            return localStorage.getItem(this.key) || 'module'
        },
        set (value) {
            localStorage.setItem(this.key, value)
        }
    }
    const [view, setView] = useState(viewStorage.get())
    const viewSwitch = (view) => {
        setView(view)
        viewStorage.set(view)
    }
    const icons = [view_list, view_module]
    return (
    <div>
        <IconSwitch icons={icons} viewSwitch={viewSwitch} view={view}/>
        <CardsView  view={view} data={products}/>
    </div>
    )
}
