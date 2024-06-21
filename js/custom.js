class OurCollegeElement extends HTMLElement {
  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback() {
    this.innerHTML = this.getAttribute("name") || "College name here...";
  }

  connectedCallback() {
    this.attributeChangedCallback();
  }
}

customElements.define("our-college", OurCollegeElement);
