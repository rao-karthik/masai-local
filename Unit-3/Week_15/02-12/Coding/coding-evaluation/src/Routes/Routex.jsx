import { Route, Switch } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"
import { PrivateRoute } from "./PrivateRoute"

export const Routes = ()=>{
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute path='/' exact>
          <HomePage />
        </PrivateRoute>
        <Route path='/login' exact>
          <LoginPage />
        </Route>
        <Route>
            Error 404: Page Not Found
        </Route>
      </Switch>
    </>
  )
}