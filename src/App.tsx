import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/themes/GlobalStyle';
import { themes } from '@/themes/.';
import { useAppSelector } from '@/store/hooks';

function App() {
  const name = useAppSelector((store) => store.desktop.theme.name);
  const mode = useAppSelector((store) => store.desktop.theme.mode);

  return (
    <ThemeProvider theme={themes[name][mode]}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
