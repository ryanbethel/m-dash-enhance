export default function IsDashM({ html, state }) {
  const { attrs } = state;
  let components = attrs?.['m-include'].split(/\s*,\s*/)
  if (components.includes('all')) components = ['button', 'a', 'details', 'hr']

  return html`


${ /* m-is hr styles */ components.includes('hr') && `
  <style scope=global>
[m-is]{

  /* Horizontal rule */
  hr& {
    background-color: var(--m-color-gray-3);
    border: none;
    margin: 0;
    height: 1px;

    /* Vertical bar/separator, requires explicit height parent, flex or grid parent */
    &[aria-orientation=vertical] {
      width: 1px;
      height: auto;
    }
  }
}
  </style>
`}

${ /* m-is link styles */ components.includes('details') && `
  <style scope=global>
[m-is]{
  details& {
    > summary {
      cursor: pointer;
      list-style: none; /* Hides caret in Firefox */

      &:focus { outline: none }

      /* Hides caret in Chrome, Safari, etc. */
      &::-webkit-details-marker { display: none }
    }
  }
}
  </style>
`}


${ /* m-is link styles */ components.includes('a') && `
  <style scope=global>
[m-is] {
  /* Base link styles */
  a&, span[role=link]& {
    text-decoration: none;
    color: var(--m-color-primary-action);
    cursor: pointer;

    /*:is(a, span[role=link]):visited { color: var(--m-color-primary-action) }*/
    &:hover,
    &:focus-visible {
      text-decoration: underline;
      outline: 0;
    }

    /* Disabled state */
    &[disabled] {
      color: var(--m-color-disabled-fg);
      pointer-events: none;
    }
  }

}
  </style>
`}

${ /* m-is button styles */ components.includes('button') && `
<style scope=global>
[m-is] {

  :is(button, a[role=button])& {
    /*
      Ordinal attribute
      The ord attr is short for "ordinal number word".
      Ordinal number words are the 10+ words used for describing the
      precedence or importance of an item in a group, e.g. Save and Cancel buttons.
    */
    &[ord] {
      display: inline-flex;
      place-content: center;
      border-radius: var(--m-border-radius-md);
      cursor: pointer;
      background: none;
      font-size: var(--m-font-size-default);
      height: var(--m-input-min-height);
      padding: var(--m-space-xs) var(--m-space-md);

      /* Sibling buttons */
      + & { margin-left: var(--m-space-sm) }

      /* Disabled */
      &[disabled] {
        cursor: not-allowed;
        border: 2px solid var(--m-color-disabled-bg);
        color: var(--m-color-disabled-fg);
        background-color: var(--m-color-disabled-bg);
      }
    }

    /* Primary ordinal */
    &[ord=primary] {
      border: 2px solid var(--m-color-primary-action);
      background-color: var(--m-color-primary-action);
      color: white;
    }

    /* Secondary ordinal */
    &[ord=secondary] {
      border: 2px solid var(--m-color-primary-action);
      color: var(--m-color-primary-action);

      &[aria-pressed="true"], &[aria-pressed="mixed"] {
        background-color: var(--m-color-blue-1);
      }
    }

    /* Tertiary ordinal */
    &[ord=tertiary] {
      border: 2px solid var(--m-color-gray-7);
      color: var(--m-color-gray-7);
    }
  }

  /* TODO: nesting here??? */
  /* Focus for all buttons */
  :is(button, a[role=button])[ord]&:focus-visible, button[type=remove]&:focus-visible {
    outline: 2px solid var(--m-color-focus);
    outline-offset: 0;
  }

  /* Link button overrides */
  a[role=button][ord]& {
    box-sizing: border-box;

    &:hover { text-decoration: none }
  }

  /* Remove button (for close, dismiss, delete use cases) */
  button[type=remove]& {
    all: unset;
    display: inline-flex;
    place-content: center;
    cursor: pointer;
    width: var(--m-input-min-height);
    font-size: 24px;

    &:active { color: initial }
    &::before { content: '×' }

    /* Disabled */
    &[disabled] {
      color: var(--m-color-disabled-fg);
      cursor: not-allowed;
    }
  }

  /* Button Group */
  [role=group]:has(:is(button, a[role=button]))& {
    display: inline-flex;

    & button, & a[role=button] {
      border-radius: 0;
      border-right-width: 1px;
      border-left-width: 1px;

      &:first-of-type {
        border-radius: var(--m-border-radius-md) 0 0 var(--m-border-radius-md);
        border-left-width: 2px;
      }

      &:last-of-type {
        border-radius: 0 var(--m-border-radius-md) var(--m-border-radius-md) 0;
        border-right-width: 2px;
      }

      & + & {
        margin: 0;
      }
    }
  }

  /* Scale */
  /*:is(button, a[role=button])[scale=sm] {*/
  /*  min-height: var(--m-target-min-size);*/
  /*  font-size: var(--m-font-size-min);*/
  /*}*/

  /*:is(button, a[role=button])[scale=lg] {*/
  /*  min-height: 44px;*/
  /*  font-size: var(--m-font-size-md);*/
  /*}*/

  /*button[type=remove][scale=sm] {*/
  /*  width: var(--m-target-min-size);*/
  /*  height: var(--m-target-min-size);*/
  /*  font-size: 14px;*/
  /*}*/

  /*button[type=remove][scale=lg] {*/
  /*  width: 44px;*/
  /*  height: 44px;*/
  /*  font-size: 36px;*/
  /*}*/

}
</style>
`}



`}
