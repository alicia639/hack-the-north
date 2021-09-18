import logo from './logo.svg';
import './App.css';
import Blockly from 'blockly';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Algoraid (title?)</h1>
        <div id="blocklyDiv" class="blockly">
        </div>
        <div id="editor" class="edit">
          text goes here
        </div>
        <script src="src/ace.js" type="text/javascript" charset="utf-8"></script>
        <script>
          var editor = ace.edit("editor");
        </script>
        <xml id="toolbox" style="display: none">
          <block type="controls_if"></block>
          <block type="controls_repeat_ext"></block>
          <block type="logic_compare"></block>
          <block type="math_number"></block>
          <block type="math_arithmetic"></block>
          <block type="text"></block>
          <block type="text_print"></block>
        </xml>
        <script>  
          var toolbox = document.getElementById(“toolbox”);

          var options = {toolbox : toolbox};

          Blockly.inject('blocklyDiv', options);
        </script>
      </header>
    </div>
  );
}

export default App;
