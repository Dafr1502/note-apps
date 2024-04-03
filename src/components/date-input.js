class DateInput extends HTMLElement {
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
                font-family: sans-serif;
            }

            label {
                font-weight: bold;
                margin-top: 30px;
                margin-bottom: 3px;
            }

            input[type="date"] {
                width: 52%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 16px;
                box-sizing: border-box;
            }
            </style>
            <label for="date">Date:</label>
            <input type="date" id="date">
        `;
    this.dateInput = this.shadowRoot.getElementById("date");
    this.dateInput.addEventListener("change", () => {
      const event = new Event("input", { bubbles: true });
      this.dispatchEvent(event);
    });
  }

  getValue() {
    return this.dateInput.value;
  }

  setValue(date) {
    this.dateInput.value = date;
  }
}

customElements.define("date-input", DateInput);
