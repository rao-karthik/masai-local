import logo from './logo.svg';
import './App.css';
import { Button } from './Components/Button';
import { Sidebar } from './Components/Sidebar';
import { SidebarItem } from './Components/SidebarItem';
import { StyledComponents } from './Components/styledComponents';

function App() {
  return (
    <div className="App">
      {/* <Button>
        Click Me
      </Button> */}
      {/* <Sidebar>
        <SidebarItem 
          icon = {
            <img width = "30px"
              src = {"http://simpleicon.com/wp-content/uploads/mail-inbox.png"}
            />
          }
          label = "Inbox" />
      </Sidebar>
      <Sidebar>
        <SidebarItem 
          icon = {
            <img width = "30px"
              src = {"https://thumbs.dreamstime.com/z/starred-message-mail-icon-vector-email-symbol-design-designs-153069481.jpg"}
            />
          }
          label = "Starred" />
      </Sidebar>
      <Sidebar>
        <SidebarItem 
          icon = {
            <img width = "30px"
              src = {"https://icon-library.net/images/email-sent-icon/email-sent-icon-10.jpg"}inbox
            />
          }
          label = "Sent" />
      </Sidebar> */}

      <StyledComponents />
    </div>
  );
}

export default App;
