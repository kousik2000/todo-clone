import {BrowserRouter, Router, Route} from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import Notes from './components/Notes'
import Remainder from './components/Remainder'
import StopWatch from './components/StopWatch'

const App = () => (
  <BrowserRouter>
    <Header />
    <Router>
      <Route exact path="/" component={TodoList} />
      <Route exact path="/notes" component={Notes} />
      <Route exact path="/remainder" component={Remainder} />
      <Route exact path="/stopwatch" component={StopWatch} />
    </Router>
  </BrowserRouter>
)

export default App
