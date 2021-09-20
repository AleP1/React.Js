import React from 'react';
import './ItemList.css';
import { Spinner } from 'reactstrap';
import Item from '../item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = ({ items, loading }) => {

  const des = loading ?
    <Spinner color='primary' /> :
    items.map((item) => <Item key={item.id} className='itemList__item' item={item} />);

  return (
    <div className='itemList'>
      {des}
    </div>
  );

};

export default ItemList;
