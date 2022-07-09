import {FC} from 'react';
import Main from 'pages/main';

type AppScreenProps = {
  rentalAmount: number,
}

export const App: FC<AppScreenProps> = ({rentalAmount}) => <Main rentalAmount={rentalAmount}/>;

export default App;
