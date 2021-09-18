import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Block extends React.component
{
  render() {

    return (
      <div>
        <xml id="toolbox" style="display: none">
          <block type="controls_if"></block>
          <block type="controls_repeat_ext"></block>
          <block type="logic_compare"></block>
          <block type="math_number"></block>
          <block type="math_arithmetic"></block>
          <block type="text"></block>
          <block type="text_print"></block>
        </xml>
        <div class="blockly" id="blocklyDiv">
        </div>
        <script>
            var editor = ace.edit("editor");
            var toolbox = '<xml>';
            toolbox += '  <block type="controls_if"></block>';
            toolbox += '  <block type="controls_whileUntil"></block>';
            toolbox += '</xml>';
            var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});
        </script>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
