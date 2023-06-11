import {useState} from "react";
export default function List() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const changeData = e => {
    setInput(e.target.value);
  };
  // console.log(id);
  function AddTask(event) {
    if (input !== "") {
      setData([...data, input]);
      console.log(data);
    } else {
      alert("Can't add empty task ");
    }
    event.preventDefault();
    setInput("");
  }

  return (
    <div className="list">
      <form className="form-group">
        {data.map((data, index) => (
          <div className="list-card" key={index} id={index}>
            <li id={index} contentEditable={false} className="list-item">
              {data}
            </li>
            <div className="icons-div" id="icon-id">
              <button
                type="button"
                data-user={index}
                className="icon-btn"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById(index).classList.add("checked");
                  document
                    .getElementById("icon-id")
                    .classList.remove("checked");
                }}
              >
                {" "}
                <i className="fi fi-br-check"></i>
              </button>{" "}
              <button
                type="button"
                data-user={index}
                className="icon-btn"
                onClick={e => {
                  e.preventDefault();

                  document
                    .getElementById(index)
                    .setAttribute("contentEditable", true);
                }}
              >
                {" "}
                <i className="fi fi-rr-edit"></i>
              </button>{" "}
              <button
                data-user={index}
                type="button"
                className="icon-btn"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById(index).classList.add("deleted");
                }}
              >
                <i className="fi fi-bs-cross"></i>
              </button>{" "}
            </div>
          </div>
        ))}

        <div className="input-div">
          <input
            value={input}
            name="input"
            placeholder="WRITE TASK ..."
            className="form-control"
            onChange={e => {
              changeData(e);
            }}
          ></input>
          <button type="submit" onClick={AddTask} className="btn">
            ADD TASK
          </button>
        </div>
      </form>
    </div>
  );
}
