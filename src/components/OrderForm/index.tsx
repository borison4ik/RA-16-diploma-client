import axios from 'axios';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RoutesPath } from '../../Routes';
import { Preloader } from '../Preloader';
import { cartSlice } from '../../store/reducers/cartSlice';

type Inputs = {
  phone: string;
  address: string;
  agreement: boolean;
};

export const OrderForm: React.FC = () => {
  const { items } = useAppSelector((state) => state.cartReducer);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [success, setSucces] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: 'onChange' });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const orderItems = items.map((item) => ({
      id: item.id,
      price: item.price,
      count: item.quantity,
    }));
    setIsSending(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_ORDER_API}`, {
        owner: data,
        items: orderItems,
      });
      if (response.status === 204) {
        setSucces(true);
        dispatch(cartSlice.actions.cleanCart());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false);
    }

    reset();
  };

  if (success)
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Поздравляем!</h1>
        <p className='lead'>Ваш заказ успешно оформлен</p>
        <hr className='my-4' />
        <Link
          className='btn btn-primary btn-lg'
          to={RoutesPath.CATALOG}
          role='button'>
          Купить еще!
        </Link>
      </div>
    );

  return (
    <section className='order'>
      <h2 className='text-center'>Оформить заказ</h2>
      <div className='card' style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
          <div className='form-group'>
            <label htmlFor='phone'>Телефон</label>
            <input
              defaultValue=''
              {...register('phone', {
                required: true,
                pattern: {
                  value: /^\+[\d\-\(\) ]{9,}\d/g,
                  message:
                    'Номер должен начинаться с "+" и быть минимум 9 цифр',
                },
              })}
              className='form-control'
              id='phone'
              placeholder='Ваш телефон'
            />
            {errors?.phone && (
              <small className='form-text text-danger'>
                {errors?.phone?.message ||
                  'Поле телефон обязательно для заполнения'}
              </small>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='address'>Адрес доставки</label>
            <input
              defaultValue=''
              {...register('address', { required: true })}
              className='form-control'
              id='address'
              placeholder='Адрес доставки'
            />
            {errors?.address && (
              <small className='form-text text-danger'>
                {errors?.address?.message ||
                  'Поле Адрес обязательно для заполнения'}
              </small>
            )}
          </div>
          <div className='form-group form-check'>
            <input
              {...register('agreement', { required: true })}
              defaultChecked={true}
              type='checkbox'
              className='form-check-input'
              id='agreement'
            />
            <label className='form-check-label' htmlFor='agreement'>
              Согласен с правилами доставки
            </label>
            {errors?.agreement && (
              <small className='form-text text-danger'>
                {errors?.agreement?.message ||
                  'Вы должны согласиться с правилами'}
              </small>
            )}
          </div>
          {isSending ? (
            <Preloader />
          ) : (
            <button
              type='submit'
              className='btn btn-outline-secondary'
              disabled={!isValid}>
              Оформить
            </button>
          )}
        </form>
      </div>
    </section>
  );
};
