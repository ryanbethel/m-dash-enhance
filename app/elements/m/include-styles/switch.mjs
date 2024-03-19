export default function Switch({ html, state }) {
  return html`
    <style scope=global>
      /* Base switch styles */
      input[is=switch] {
        position: relative;
        width: 40px;
        height: 22px;
        appearance: none;
        margin: 0;
        border-radius: var(--m-border-radius-full);
        cursor: pointer;
        background-color: var(--m-color-gray-3);
        transition: background-color ease-in 0.12s;

        &::before {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          top: 3px;
          left: 3px;
          border-radius: var(--m-border-radius-full);
          background-color: white;
          transition: all ease-in 0.12s;
        }

        &:focus-visible {
          outline: 2px solid var(--m-color-focus);
          outline-offset: 0;
        }

        /* Checked state */
        &:checked { background-color: var(--m-color-primary-action) }
        &:checked:before { left: 20px }

        /* Disabled state */
        &:disabled {
          cursor: not-allowed;
          background-color: var(--m-color-disabled-bg);
        }
      }
    </style>
  `
}
