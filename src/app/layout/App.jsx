import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventForm from '../../features/event/EventForm/EventForm';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import HomePage from '../../features/home/HomePage';
import ModalManager from '../../features/modals/ModalManager';
import NotFound from '../../app/layout/NotFound';
import { UserIsAuthenticated } from '../../features/auth/authWrapper';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>

        <Route
          path='/(.+)'
          render={() => (
            <div>
              <NavBar />
              <Container className='main'>
                <Switch>
                  <Route path='/events' component={EventDashboard} />
                  <Route path='/event/:id' component={EventDetailedPage} />
                  <Route
                    path='/manage/:id'
                    component={UserIsAuthenticated(EventForm)}
                  />
                  <Route
                    path='/people'
                    component={UserIsAuthenticated(PeopleDashboard)}
                  />
                  <Route
                    path='/profile/:id'
                    component={UserIsAuthenticated(UserDetailedPage)}
                  />
                  <Route
                    path='/settings'
                    component={UserIsAuthenticated(SettingsDashboard)}
                  />
                  <Route
                    path='/createEvent'
                    component={UserIsAuthenticated(EventForm)}
                  />
                  <Route path='/error' component={NotFound} />
                  <Route component={NotFound} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
