class DescriptionTextarea extends HTMLElement {
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
        
        textarea {
            width: 52%;
            height: 100px;
            font-family: sans-serif;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            box-sizing: border-box; 
            resize: none;
        }
        </style>
        <label for="description">Description:</label>
        <textarea id="description" placeholder="Enter description"></textarea>
    `;
  }
}

customElements.define("description-textarea", DescriptionTextarea);

const descriptionTextarea = document.querySelector("description-textarea");
