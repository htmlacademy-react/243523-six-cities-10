import {FC} from 'react';
import Main from 'pages/Main';

type AppScreenProps = {
  rentalAmount: number,
}

export const App: FC<AppScreenProps> = ({rentalAmount}) => <Main rentalAmount={rentalAmount}/>;

export default App;
