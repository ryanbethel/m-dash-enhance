import CustomElement from '@enhance/custom-element'

export default class Dot extends CustomElement {
    render({ html, state }) {
        return html`<style scope="global">
    /* Base styles */
    e-dot {
        display: inline-flex;
        align-items: center;

        &::before {
            content: "";
            width: 8px;
            height: 8px;
            margin: var(--e-space-xs);
            border-radius: var(--e-border-radius-full);
            background-color: var(--e-color-gray-4);
        }

        /* Alert type */
        &[type="info"]::before {
            background-color: var(--e-color-blue-2);
        }
        &[type="success"]::before {
            background-color: var(--e-color-green-2);
        }
        &[type="warn"]::before {
            background-color: var(--e-color-orange-2);
        }
        &[type="error"]::before {
            background-color: var(--e-color-red-2);
        }
    }
</style>
<slot></slot>
`
    }
}

if (!customElements.get("e-dot")) { customElements.define("e-dot", Dot) };
