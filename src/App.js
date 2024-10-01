
import './App.css';
import icon from './folder.ico';
function App() {
let folders = [
  {name: "Home"}, 
   {name: "About", folders:[{ name: "Company"}, { name: "Team"}], 
   },
   { name: "Contact", folders:[{name: "Email", 
    folders: [{ name: "a@b.com"}, {name: "b@c.com"},]}, {name: "Phone"}, { name: "Address"}], 
   }, 
   {name: "Blog", folders: [{name: "Posts"}, {name: "Comments", folders: [{name: "a"}, {name: "b"}]}]}, 
   {name: "Help", folders: [{name: "FAQ"}, {name: "Support"}]},
   ]
  
    return (
    <div className="App">
    <ul>
      {folders.map((folder) => 
      <li key={folder.name}>
     <span> <img src={icon}/>{folder.name}</span>
      <ul>
        {folder.folders?.map((folder) => 
        <Folder folder={folder} key={folder.name} />)}
      </ul>
      </li>)}
        </ul>
    </div>
  );
}
export default App;

function Folder ({folder}) {
  return (
    <li key={folder.name}>
      <span> <img src={icon}/>{folder.name}</span>
 {folder.folders?.map((folder) =>
 <Folder folder={folder} />)}
    </li>
  )
}