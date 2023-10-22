import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { getData, getDocuments } from '../../services/firebaseService';
import { query , where} from 'firebase/firestore';

export const ItemListConteiner = ({q, categoria}) => {
    const [items,setItems] = useState([]);

    console.log(categoria)
    if(q){useEffect( () => {
      const itemCollection = getDocuments("items")
      getData(query(itemCollection,where("categoria","==",`${categoria}`))).then(data => setItems(data))
  }, [categoria])
    }else{
      useEffect( () => {
        const itemCollection = getDocuments("items")
        getData(itemCollection).then(data => setItems(data))
    }, [])
    }
  return (
    <div className='contenedor-item-list'>
        {        items !== null &&
                    <ItemList items={items} />
                }
    </div>
  )
}
