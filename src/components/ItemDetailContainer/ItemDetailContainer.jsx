import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import ItemDetail from '../itemDetail/ItemDetail';
import { projectFirestore as dataBase } from '../../firebase/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetailContainer = () => {

  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = dataBase;
    const itemCollection = db.collection('1');
    const collectionToShow = itemCollection.doc(id);

    collectionToShow.get().then((doc) => {
      if (!doc.exists) {
        console.log('Item does not exist! :(');
        return;
      }
      console.log('Item found!');
      setItem({ id: doc.id, ...doc.data() });
      console.log(`item ${item.id}`);
    }).catch((error) => {
      console.log('Error searching items', error);
    }).finally(() => {
      setLoading(false);
    });
  }, [id]);

  return (
    loading ?
      <Spinner color='primary' /> : (
        <div>
          <ItemDetail key={id} item={item} />
        </div>
      )
  );
};

export default ItemDetailContainer;
