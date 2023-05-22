import { CreateUserData } from '@/types/forms';
import { createUser } from '@/store/user/userAPI';
import { useEffect, useState } from 'react';

type SignUpTextProps = {
  data: CreateUserData;
};

export default function SignUpText({ data }: SignUpTextProps) {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    createUser(data);
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
      //одна минута
    }, 60000);
  };

  return (
    <div className=" text-center text-lg-start">
      <h4 className="h4 mb-4">
        Для завершения регистрации перейдите по ссылке на вашей электронной
        почте
      </h4>
      <p>Если вы не получили письмо, проверьте папку &quot;Спам&quot;</p>
      <button
        className={`text-primary border-0 bg-white text-lg-start p-0 ${
          isDisabled ? 'text-muted' : ''
        }`}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {!isDisabled
          ? 'Выслать ссылку повторно'
          : 'Повторить действие можно будет через 1 минуту'}
      </button>
    </div>
  );
}
