import './App.css';
import MyClassComponent from './components/classComponent';
import MyFunctionComponent from './components/functionComponent';
import IdentifyIssueAndFix from './components/identifyIssueAndFix';
import DisplayHelloWorld from './components/displayHelloWorld';
import SimpleComponent from './components/simpleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
      {/* How to set up a React project and render a simple component. */}
      <SimpleComponent></SimpleComponent>

      {/* Create a simple React app that displays "Hello, World!" on the screen.*/}
      <DisplayHelloWorld></DisplayHelloWorld>

      {/* Write a functional component that displays the text "Functional Component" and a class component that displays the text "Class Component". Then render both components in the App component. */}
      <MyClassComponent></MyClassComponent>
      <MyFunctionComponent></MyFunctionComponent>

      {/* Given the following code, identify the issue and fix it: const element = <h1>Hello, World!;</h1>; */}
      <IdentifyIssueAndFix></IdentifyIssueAndFix>
      </header>
     
    </div>

  );
}

export default App;
