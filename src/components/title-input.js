class TitleInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
        :host {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 5px;
            justify-items: center;
            align-items: center;
        }
        
        label {
            font-weight: bold;
            margin-top: 30px;
            margin-bottom: 3px;
            font-family: sans-serif;
        }
        
        input {
            font-family: sans-serif;
            width: 52%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            box-sizing: border-box;
        }
        </style>
        <label for="title">Title:</label>
        <input type="text" id="title" placeholder="Enter title">
    `;
  }
}

customElements.define("title-input", TitleInput);
const titleInput = document.querySelector("title-input");
