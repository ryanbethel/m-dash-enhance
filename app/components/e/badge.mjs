import CustomElement from '@enhance/custom-element'

export default class Badge extends CustomElement {
    render({ html, state }) {
        return html`<style scope="global">
    /* Base styles */
    e-badge {
      display: none;
      min-width: 1.25rem;
      height: 1.25rem;
      place-content: center;
      color: white;
      background-color: var(--e-color-primary-action);
      border-radius: 0.625rem;
      font-weight: 600;
      line-height: 1.25rem;

      /* Padding for text only */
      &:not([count]) { padding: 0 var(--e-space-xs) }

      /* Count */
      &[count]:before {
        content: attr(count);
        padding: 0 var(--e-space-xs);
      }

      /* Show the badge only when it has a non-zero count or is not empty */
      &:not(:empty),
      &[count]:not([count=""]):not([count="0"]) {
        display: inline-flex;
      }
    }
</style>
<slot></slot>
`
    }
}

if (!customElements.get("e-badge")) { customElements.define("e-badge", Badge) };
