import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 每個頁面
import Home from './pages/Home'
import User from './pages/User'
import About from './pages/About'
import Product from './pages/Product'
import Counter from './pages/Counter'

function App() {
  const [total, setTotal] = useState(1)

  return (
    <Router>
      <>
        <h2>a元素</h2>
        <a href="/product">購物商城</a>
        <br />
        <a href="/user">會員中心</a>
        <br />
        <a href="/about">關於我們</a>
        <br />
        <a href="/counter">計數器</a>
        <br />
        <a href="/">首頁</a>
        <br />
        <hr />
        <h2>Link元件</h2>
        <Link to="/product">購物商城</Link>
        <br />
        <Link to="/user">會員中心</Link>
        <br />
        <Link to="/about">關於我們</Link>
        <br />
        <Link to="/counter">計數器</Link>
        <br />
        <Link to="/">首頁</Link>
        <br />
        <hr />
        <Switch>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/user" exact>
            <User />
          </Route>
          <Route path="/counter" exact>
            <Counter total={total} setTotal={setTotal} />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App