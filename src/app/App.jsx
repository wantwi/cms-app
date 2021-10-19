import '../fake-db'
import React from 'react'
import {QueryClientProvider, QueryClient} from "react-query"
import { Provider } from 'react-redux'
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import AppContext from './contexts/AppContext'
import history from 'history.js'
import routes from './RootRoutes'
import { Store } from './redux/Store'
import { GlobalCss, MatxSuspense, MatxTheme, MatxLayout } from 'app/components'
import sessionRoutes from './views/sessions/SessionRoutes'
import AuthGuard from './auth/AuthGuard'
import { AuthProvider } from 'app/contexts/JWTAuthContext'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import appReducers from '../stateManager/AppReducers'
import { initialState } from '../stateManager/initialState'
import { AppStateProvider } from '../stateManager/AppStateProvider'
import './App.css'


const queryClient = new QueryClient()
const App = () => {
    console.log({ initialState })
    return (
       
        <QueryClientProvider client ={queryClient} >
            <AppContext.Provider value={{ routes }}>
                <Provider store={Store}>
                    <SettingsProvider>
                        <MatxTheme>
                            <GlobalCss />
                            <BrowserRouter basename={process.env.PUBLIC_URL}>
                                <Router history={history}>
                                    <AuthProvider>
                                        <MatxSuspense>
                                            <Switch>
                                                {/* AUTHENTICATION PAGES (SIGNIN, SIGNUP ETC.) */}
                                                {sessionRoutes.map(
                                                    (item, i) => (
                                                        <Route
                                                            key={i}
                                                            path={item.path}
                                                            component={
                                                                item.component
                                                            }
                                                        />
                                                    )
                                                )}
                                                {/* AUTH PROTECTED DASHBOARD PAGES */}
                                                <AuthGuard>
                                                    <MatxLayout />{' '}
                                                    {/* RETURNS <Layout1/> component */}
                                                </AuthGuard>
                                            </Switch>
                                        </MatxSuspense>
                                    </AuthProvider>
                                </Router>
                            </BrowserRouter>
                        </MatxTheme>
                    </SettingsProvider>
                </Provider>
            </AppContext.Provider>
            </QueryClientProvider>

    )
}

export default App
