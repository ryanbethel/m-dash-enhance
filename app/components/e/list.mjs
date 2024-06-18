import CustomElement from '@enhance/custom-element'

export default class List extends CustomElement {
    render({ html, state }) {
        return html`<style scope=global>
  
e-list {
  /* Ordered and unordered base styles */
  ul, ol, dl { margin: 0 }
  ul, ol { padding-left: var(--e-space-md) }

  /* None type (no bullets) */
  &[type=none] ul{
    list-style: none;
    padding-left: 0;
  }

  /* Definition list base styles */
  dd { margin-inline-start: 0 }
  dl {
    & > dt {
      margin-top: var(--e-space-sm);
      text-transform: uppercase;
      font-size: var(--e-font-size-min);
      font-weight: bold;

      &:first-of-type { margin-top: 0 }
    }
  }

  /* Content list base styles */
  &[type=content] :is(ul, ol){
    list-style: none;
    padding-left: 0;

    & > li:not(:last-of-type) {
      border-bottom: 1px solid var(--e-color-border)
    }
  }
}
</style>
<slot></slot>
`
    }
}

if (!customElements.get("e-list")) { customElements.define("e-list", List) };
