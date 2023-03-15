
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

import { GlobalProvider } from "./context/GlobalContext";

function App() {


  return (

    <GlobalProvider>
      <>

        <Navbar />

        <div className="container">

          <Form />

          <ListGroup/>

        </div>

      </>
    </GlobalProvider>

  );
}

export default App;
