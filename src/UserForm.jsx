import { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './redux/actions.js';

function UserForm({ setUserInfo }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  // валидация формы
  const validate = () => {
    const newErrors = {};
    if (name.trim().length < 2) {
      newErrors.name = 'Имя должно быть не короче 2 символов';
    }
    if (status.trim().length === 0) {
      newErrors.status = 'Введите статус';
    } else if (status.trim().length > 60) {
      newErrors.status = 'Статус не длиннее 60 символов';
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setUserInfo(name.trim(), status.trim());
    setName('');
    setStatus('');
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h3 className="form__title">Изменить профиль</h3>

      <label className="form__label">
        Имя
        <input
          className={errors.name ? 'form__input form__input--error' : 'form__input'}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Новое имя"
        />
      </label>
      {errors.name && <p className="form__error">{errors.name}</p>}

      <label className="form__label">
        Статус
        <input
          className={errors.status ? 'form__input form__input--error' : 'form__input'}
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Новый статус"
        />
      </label>
      {errors.status && <p className="form__error">{errors.status}</p>}

      <button className="form__button" type="submit">
        Сохранить
      </button>
    </form>
  );
}

const mapDispatchToProps = {
  setUserInfo,
};

export default connect(null, mapDispatchToProps)(UserForm);
