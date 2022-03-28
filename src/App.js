import "./App.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "./components/Header";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  return (
    <div className="app">
      <Header />
      <Container style={{ marginTop: "50px" }}>
        <Row className="align-div">
          <Col className="card-align">
            <div className="card" style={{ position: "relative" }}>
              <div className="color-div">
                <div className="input">
                  <input
                    value={toDo}
                    onChange={(e) => setToDo(e.target.value)}
                    type="text"
                    placeholder="🖊️ Add item..."
                  />
                </div>
              </div>
              <div className="content">
                <div style={{ fontSize: "40px" }}>
                  <i
                    onClick={() =>
                      setToDos([
                        ...toDos,
                        { id: Date.now(), text: toDo, status: false },
                      ])
                    }
                    className="fas fa-plus"
                  ></i>
                </div>
              </div>
            </div>
          </Col>
          <Col className="card-align">
            <div className="card" style={{ position: "relative" }}>
              <div className="color-div">
                <div className="active-head">
                    Active Tasks
                </div>
              </div>
              <div className="content">
                <div style={{ fontSize: "40px" }}>
                <ul>
                {toDos.map((obj)=>{
                     if(obj.status){
                       return(
                         <li className="active-task">{obj.text}</li>
                       )
                       return null
                     }
                   })}
                 </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col className="row">
            {toDos.map((obj) => {
              return (
                <div className="column" style={{ margin: "30px" }}>
                  <div className="card">
                    <div className="close-div">
                      <i onClick={()=>{
                        toDos.filter((obj2)=>{
                          if(obj2.id===obj.id){
                            toDos.pop(obj)
                          }
                          return obj2
                        })
                      }} className="fas fa-times"></i>
                    </div>
                    <div className="content">
                      <div className="result-todo" style={{ fontSize: "20px" }}>
                        <div style={{ display: "flex" }}>
                          <input
                            onChange={(e)=> {
                              console.log(e.target.checked);
                              console.log(obj);
                              setToDos(
                                toDos.filter((obj2) => {
                                  if (obj2.id === obj.id) {
                                    obj2.status = e.target.checked;
                                  }
                                  return obj2;
                                })
                              )
                            }}
                            value={obj.status}
                            style={{ margin: "20px 0 0 20px" }}
                            type="checkbox"
                            name=""
                            id=""
                          />
                          <p className="notes">Notes: {obj.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>

      {/* <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>Rect tutorial</p>
          </div>
          <div className="right">
           
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
