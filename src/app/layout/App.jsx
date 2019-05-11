import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDasboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailed from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDasboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import TestComponent from '../../features/event/testarea/TestComponent';

class App extends Component {
  render() {
    return (
      <div>
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
                  <Route path='/test' component={TestComponent} />
                  <Route path='/event/:id' component={EventDetailedPage} />
                  <Route path='/people' component={PeopleDasboard} />
                  <Route path='/profile/:id' component={UserDetailed} />
                  <Route path='/settings' component={SettingsDasboard} />
                  <Route path='/createEvent' component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
