import CustomElement from '@enhance/custom-element'

export default class Tabs extends CustomElement {
    render({ html, state }) {
        return html`<style scope="global">
    /* Base tabs styles */
    e-tabs {
        display: flex;
        align-items: flex-start;

        /* Scrolling tabs */
        &[scrollable] {
            overflow-x: scroll;
            scrollbar-width: none;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        /* Base tab styles */
        & :is(e-link, e-button, button, a) {
            all: unset;
            display: inline-flex;


        & + & {
          margin-top: 0;
          margin-left: 0;
        }

          &:has([aria-selected="true"]), &:is([aria-selected="true"]) {
              border-bottom: 2px solid var(--e-color-primary-action);
          }
          /* & :not([disabled]):not([aria-selected="true"]):hover { */
          /*     border-bottom: 2px solid var(--e-color-gray-3); */
          /*     text-decoration: none; */
          /* } */

          &:is(a, button) {
              all: unset;
              display: inline-flex;
              color: var(--e-color-gray-7);
              font-weight: bold;
              text-align: center;
              white-space: nowrap;
              padding: var(--e-space-xs) var(--e-space-lg);
              cursor: pointer;

              &:focus-visible {
                  outline: 2px solid var(--e-color-focus);
              }

              /* Hover state */
              &:not([disabled]):not([aria-selected="true"]):hover {
                  border-bottom: 2px solid var(--e-color-gray-3);
                  text-decoration: none;
              }

              /* Selected state */
              /* &[aria-selected="true"] { */
              /*     border-bottom: 2px solid var(--e-color-primary-action); */
              /* } */

              /* Disabled state */
              &[disabled] {
                  color: var(--e-color-disabled-fg);
                  cursor: default;
              }
          }

          & :is(a, button) {
              all: unset;
              display: inline-flex;
              color: var(--e-color-gray-7);
              font-weight: bold;
              text-align: center;
              white-space: nowrap;
              padding: var(--e-space-xs) var(--e-space-lg);
              cursor: pointer;

              &:focus-visible {
                  outline: 2px solid var(--e-color-focus);
              }

              /* Hover state */
              &:not([disabled]):not([aria-selected="true"]):hover {
                  border-bottom: 2px solid var(--e-color-gray-3);
                  text-decoration: none;
              }

              /* Selected state */
              /* &[aria-selected="true"] { */
              /*     border-bottom: 2px solid var(--e-color-primary-action); */
              /* } */

              /* Disabled state */
              &[disabled] {
                  color: var(--e-color-disabled-fg);
                  cursor: default;
              }
          }
      }
    }
</style>
<slot></slot>
`
    }
}

if (!customElements.get("e-tabs")) { customElements.define("e-tabs", Tabs) };
