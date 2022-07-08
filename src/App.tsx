import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/theme/GlobalStyle';
import { themes } from '@/theme';
import { useAppSelector } from '@/store/hooks';

function App() {
  const name = useAppSelector((store) => store.desktop.theme.name);
  const mode = useAppSelector((store) => store.desktop.theme.mode);

  return (
    <ThemeProvider theme={themes[name][mode]}>
      <GlobalStyle />
      <div></div>
    </ThemeProvider>
  );
}

export default App;
