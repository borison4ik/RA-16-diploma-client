import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';

import { cartSlice } from '../../store/reducers/cartSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProduct } from '../../store/reducers/ThunkActionCreators';
import { RoutesPath } from '../../Routes';
import { ICartItem } from '../../@types';
import { Preloader } from '../Preloader';

export const ProductItem: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const { product, isLoading, error } = useAppSelector(
    (state) => state.productReducer,
  );

  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const tProp = product
    ? [
        { title: 'Артикул', prop: product.sku },
        { title: 'Производитель', prop: product.manufacturer },
        { title: 'Цвет', prop: product.color },
        { title: 'Материалы', prop: product.material },
        { title: 'Сезон', prop: product.season },
        { title: 'Повод', prop: product.reason },
      ]
    : [];

  useEffect(() => {
    if (params.id) {
      dispatch(fetchProduct(Number.parseInt(params.id)));
    }
  }, [dispatch, params]);

  const selectSizeHandler = (selectedSize: string) => {
    setSelectedSize((oldSelectedSize) =>
      oldSelectedSize === selectedSize ? null : selectedSize,
    );
  };

  const decrementHandler = () => {
    setQuantity((old) => (old = old <= 1 ? 1 : old - 1));
  };

  const incrementHandler = () => {
    setQuantity((old) => (old += 1));
  };

  const toCartHandler = () => {
    navigate(RoutesPath.CART);
  };

  const AddToCardHandler = () => {
    if (product && params.id && selectedSize) {
      const obj: ICartItem = {
        id: Number.parseInt(params.id),
        title: product.title,
        size: selectedSize,
        price: product.price,
        quantity: quantity,
      };
      dispatch(cartSlice.actions.addToCart(obj));
    }
  };

  if (isLoading)
    return (
      <section className='catalog-item'>
        <Preloader />
      </section>
    );

  if (error)
    return (
      <div className='alert alert-info' role='alert'>
        Ошибка получения данных с сервера, попробуйте обновить страницу!{' '}
        <button
          className='btn btn-primary float-right'
          onClick={() => window.location.reload()}>
          Обновить
        </button>
        <div className='clearfix'></div>
      </div>
    );

  return (
    <>
      {product && (
        <section className='catalog-item'>
          <h2 className='text-center'>{product.title}</h2>
          <div className='row'>
            <div className='col-5'>
              <img
                src={product.images[0]}
                className='img-fluid'
                alt={product.title}
              />
            </div>
            <div className='col-7'>
              <table className='table table-bordered'>
                <tbody>
                  {tProp.map((item, i) => (
                    <tr key={i}>
                      <td>{item.title}</td>
                      <td>{item.prop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='text-center'>
                <p>
                  Размеры в наличии:{' '}
                  {product.sizes.length > 0 &&
                    product.sizes
                      .filter((size) => size.avalible)
                      .map((size, i) => (
                        <span
                          key={i}
                          className={cn('catalog-item-size', {
                            selected: selectedSize === size.size,
                          })}
                          onClick={() => selectSizeHandler(size.size)}>
                          {size.size}
                        </span>
                      ))}
                </p>
                <p>
                  Количество:{' '}
                  <span className='btn-group btn-group-sm pl-2'>
                    <button
                      className='btn btn-secondary'
                      onClick={decrementHandler}>
                      -
                    </button>
                    <span className='btn btn-outline-primary'>{quantity}</span>
                    <button
                      className='btn btn-secondary'
                      onClick={incrementHandler}>
                      +
                    </button>
                  </span>
                </p>
              </div>
              <div className='product-btns'>
                <button
                  onClick={AddToCardHandler}
                  className='btn-purchase btn btn-success btn-block btn-lg mb-3'
                  disabled={selectedSize === null}>
                  Купить
                </button>
                <button
                  onClick={toCartHandler}
                  className='btn-to-cart btn btn-danger btn-block btn-lg'>
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
