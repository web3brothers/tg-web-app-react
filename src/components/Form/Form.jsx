import './Form.css';
import { useCallback, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import { useEffect } from 'react';



const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [type, setType] = useState('');
    const { tg } = useTelegram();

    const onSendData = useCallback(() => {
        tg.sendData(JSON.stringify({ country, city, address, type }));
    }, [country, city, address, type]);

    useEffect(() => {
       tg.WebApp.onEvent('mainButtonClicked', onSendData);
       return () => {
        tg.WebApp.offEvent('mainButtonClicked', onSendData);
       }
    }, [onSendData]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить заявку'
        });
    }, []);


    // Показываем кнопку, когда заполнены все поля
    useEffect(() => {
        if (!country || !city) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeCity = (e) => {
        setCity(e.target.value);
    }

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    const onChangeType = (e) => {
        setType(e.target.value);
    }

    return <div className={'form'}>
        <h3>Введите ваши данные</h3>
        <input className={'input'} type="text" placeholder="Country" value={country} onChange={onChangeCountry} />
        <input className={'input'} type="text" placeholder="City" value={city} onChange={onChangeCity} />
        <input className={'input'} type="text" placeholder="Address" value={address} onChange={onChangeAddress} />
        <select className={'select'} value={type} onChange={onChangeType}>
            <option value="legal">Юридическое лицо</option>
            <option value="individual">Физическое лицо</option>
        </select>
    </div>;
}

export default Form;