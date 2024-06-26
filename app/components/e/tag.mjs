import CustomElement from '@enhance/custom-element'

export default class Tag extends CustomElement {
    render({ html, state }) {
        return html`<style scope="global">
    /* Base tag styles */
    e-tag {
        display: inline-flex;
        align-items: center;
        color: var(--color, currentColor);
        border: 1px solid var(--color, currentColor);
        background-color: var(--color, lightgrey);
        padding: 3px var(--e-space-xs);
        font-size: var(--e-font-size-min);

        & + & {
            margin-left: 3px;
        }

        /* Removable tag */
      & :is(e-button:has(button[type="remove"]), button[type=remove]) {
            padding-left: var(--e-space-xs);
            font-size: var(--e-font-size-default);
            width: auto;
        }
    }
</style>

<slot></slot>

<script type="module">
  import { CustomElement, MorphDomMixin } from "/_public/browser/client.mjs"

  class ETag extends MorphDomMixin(CustomElement) {
    constructor() {
      super()
    }

    // static get observedAttributes() {
      // return ["heading"]
    // }

    render({ html, state }) {
      return html\`
        <style scope="global">
            /* Base tag styles */
            e-tag {
                display: inline-flex;
                align-items: center;
                color: var(--color, currentColor);
                border: 1px solid var(--color, currentColor);
                background-color: var(--color, lightgrey);
                padding: 3px var(--e-space-xs);
                font-size: var(--e-font-size-min);

                & + & {
                    margin-left: 3px;
                }

                /* Removable tag */
              & :is(e-button:has(button[type="remove"]), button[type=remove]) {
                    padding-left: var(--e-space-xs);
                    font-size: var(--e-font-size-default);
                    width: auto;
                }
            }
        </style>
        <slot></slot>
      \`
    }
  }

  if(!customElements.get("e-tag")) { customElements.define( "e-tag", ETag)}

</script>
`
    }
}

if (!customElements.get("e-tag")) { customElements.define("e-tag", Tag) };
