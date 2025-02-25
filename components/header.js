const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #0a0a23;
      z-index: 1000
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
    <nav>
      <ul>
        <li><a href="/index.html">About Me</a></li>
        <li><a href="/news.html">News</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
