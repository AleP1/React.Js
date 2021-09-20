import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemLIst';
import { projectFirestore as dataBase } from '../../firebase/firebase';

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log(`${loading}`);
    const db = dataBase;
    const itemCollection = db.collection('1');
    const collectionToShow = categoryId ? itemCollection.where('categoryId', '==', categoryId) : itemCollection;
    collectionToShow.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('No results!');
      }
      setItems(querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      }));
      console.log(`${loading}`);
    }).catch((error) => {
      console.log('Error searching items', error);
    }).finally(() => {
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <section>
      <ItemList items={items} hasLoaded={loading} />
    </section>

  );
};

export default ItemListContainer;
