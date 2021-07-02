import logo from './logo.svg';
import './App.css';
import { Sidebar } from './Components/Sidebar';
import { SidebarItem } from './Components/SidebarItem';

function App() {
  return (
    <div className="App">
      <Sidebar>
        <SidebarItem icon = {
          <img height = "30px" src = {"https://cdn.iconscout.com/icon/free/png-512/inbox-348-722710.png"} />
        } title = "Inbox" />
        <SidebarItem icon = {
          <img height = "30px" src = {"https://assets.dryicons.com/uploads/icon/svg/6093/36c268f7-03ff-4115-af77-bc5c1bd73992.svg"} />
        } title = "Starred" />
        <SidebarItem icon = {
          <img height = "30px" src = {"https://cdn3.iconfinder.com/data/icons/mixed-vol-1-3/74/1_7-512.png"} />
        } title = "Send Email" />
        <SidebarItem icon = {
          <img height = "30px" src = {"https://i1.wp.com/runsignup.blog/wp-content/uploads/2015/01/email-image.jpg?ssl=1"} />
        } title = "Drafts" />
      <hr/>
        <SidebarItem icon = {
          <img height = "30px" src = {"https://st2.depositphotos.com/1031359/11942/v/950/depositphotos_119424038-stock-illustration-a-mail-logo.jpg"} />
        } title = "All Mail" />
        <SidebarItem icon = {
          <img height = "30px" src = {"https://st4.depositphotos.com/18657574/22404/v/1600/depositphotos_224043704-stock-illustration-trash-icon-trendy-design-style.jpg"} />
        } title = "Trash" />
      </Sidebar>
    </div>
  );
}

export default App;
