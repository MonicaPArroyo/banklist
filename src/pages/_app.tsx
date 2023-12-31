import '@/styles/globals.css'
import type { AppProps } from 'next/app'

//for redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, {persistor} from '@/store/store'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</PersistGate>
		</Provider>
  );
}
