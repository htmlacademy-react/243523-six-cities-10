import {FC} from 'react';

const NotFound: FC = () => (
  <section style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
    <h1 style={{
      display: 'flex',
      justifyContent: 'center',
      fontSize: '8em',
      fontWeight: 500,
      color: 'red',
      textTransform: 'uppercase',
    }}
    >
      404 Error
    </h1>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '5% 0',
      fontSize: '3em',
      fontWeight: 400,
      color: 'red'
    }}
    >
      Страница не найдена :(
    </div>
    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
      <button style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 15px',
        fontSize: '2em',
        fontWeight: 400,
        border: 'slateblue',
        borderRadius: '30px',
        color: 'white',
        backgroundColor: 'slateblue',
      }}
      >
        <a href='/'>Вернуться на главную страницу
        </a>
      </button>
    </div>
  </section>
);

export default NotFound;
