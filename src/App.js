import React, { useState } from 'react';
// import { Rating } from 'react-simple-star-rating';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import Button from 'react-bootstrap/Button';
  // Bootstrap icons
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>

const data=[
  {
    id:1,
    title: "Fancy Product",
    price:"$40.00 - $80.00"
  },
  {
    id:2,
    title: "Special Item",
    price:"$20.00 $18.00"
  },
  {
    id:3,
    title: "Sale Item",
    price:"$50.00 $25.00"
  },
  {
    id:4,
    title: "Popular Item",
    price:"$40.00"
  },
  {
    id:5,
    title: "Sale Item",
    price:"$50.00 $25.00"
  },
  {
    id:6,
    title: "Fancy Product",
    price:"$120.00 - $280.00"
  },
  {
    id:7,
    title: "Special Item",
    price:"$20.00 $18.00"
  },
  {
    id:8,
    title: "Popular Item",
    price:"$40.00"
  }
]

function NavBar({ count }) {
  return (
    <Nav variant="pills" activeKey="1" >
      <Nav.Item>
        <Nav.Link eventKey="1" href="Start Bootstrap">
        Start Bootstrap
        </Nav.Link>
      </Nav.Item>
     <Nav.Item>
        <Nav.Link eventKey="2" title="#/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" title="About">
          About
        </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Shop" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">All Produts</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.2">Popular Items</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">New Arrivals</NavDropdown.Item>
      </NavDropdown>
      
      <div className="d-flex push">
                        <button className="cart btn btn-light border border-dark" type="button">
                            {/* FaShoppingCart is cart icon from react, number of count from cart  */}
                            <FaShoppingCart /> Cart <span className="cart-count">{count}</span>  
                        </button>
                    </div>
    </Nav>
  );
}

function App() {
  const [added, setAdded] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);
  const addItem=(itm) => {
    console.log(itm)
    setAdded(added => ({ ...added, [itm]: itm}));
  };
  
  
  const removeItem=(id) => {
    setAdded(added => {
      const nextAdded = { ...added };
      delete nextAdded[id];
      return nextAdded;
    });

  };
  
    const ratingChanged = (newRating) => {
      console.log(newRating)
    }
    
  return (

    <div className="App">
      <NavBar />
      <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
          </div>
      </header>

      <div className="container">
          <div className="row">
            {
             data.map((item, index) => (
                <div key={item.id} className="col-12 col-sm-12 col-md-4 col-lg-4 pb-2 pt-2">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="cartItem" />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text"> {item.price}</p>
                      <p className="ps-5 ms-4">
                        {/* user can give Star Rating according to value   */}
                            <ReactStars
                              count={5}
                              onChange={ratingChanged}
                              size={24}
                              color2={'#ffd700'} 
                            />

                      </p>
                    
                 
                        <Button variant="secondary" size="sm"
                        disabled={added[item.id]}
                        onClick={() => {
                          setActiveIndex(item.id);
                          console.log(item.id)
                          addItem(item.id)
                          console.log(activeIndex)
                        }
                        }
                      >
                        Add to cart
                      </Button>
                      {" "}
                      <Button variant="secondary" size="sm"
                        onClick={() => removeItem(item.id)}>
                          Remove from cart
                      </Button>
                 
                  </div>

                    </div>
                  </div>
                
              ))
            }

          </div>
        </div>

    </div>
  );
}

export default App;
