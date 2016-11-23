import React from 'react';

/**
 * Load Icons
 *
 * @usage
 * Get svgs from anywhere and whack em in. Make sure for now, path has property
 * fill=currentColor
 *
 * For debugging, be sure to enable "Show user agent shadow DOM" in Chrome.
 *
 * todo - make fill.currentColor css in the js
 * todo - load on props in
 *
 */

export const ICON_DATA = [
  //https://leungwensen.github.io/svg-icon/#ionic*/
  {
    name: 'chevron-left',
    viewBox: "0 0 257.20001220703125 450.0999755859375",
    html: <path fill="currentColor" d="M85.8 225L253 50.9c4.2-4.3 4.1-11.4-.2-15.8L222.9 4.5c-4.3-4.4-11.3-4.5-15.5-.2L3.2 216.9C1 219.1 0 222.1.2 225c-.1 3 .9 5.9 3 8.1l204.2 212.7c4.2 4.3 11.2 4.2 15.5-.2l29.9-30.6c4.3-4.4 4.4-11.5.2-15.8L85.8 225z"/>
  },
  {
    name: 'chevron-right',
    viewBox: "0 0 257.20001220703125 450.0999755859375",
    html: <path fill="currentColor" d="M171.4 225L4.2 50.9C0 46.6.1 39.5 4.4 35.1L34.3 4.5C38.6.1 45.6 0 49.8 4.3L254 217c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L49.8 445.8c-4.2 4.3-11.2 4.2-15.5-.2L4.4 415c-4.3-4.4-4.4-11.5-.2-15.8L171.4 225z"/>
  },
  // Phil Banks
  {
    name: 'success',
    viewBox: "0 0 19.5 19.5",
    html: <path fill="currentColor" d="M18.44,5.18a9.54,9.54,0,0,1,1.31,4.89A9.54,9.54,0,0,1,18.44,15a9.71,9.71,0,0,1-3.55,3.55A9.54,9.54,0,0,1,10,19.82a9.54,9.54,0,0,1-4.89-1.31A9.7,9.7,0,0,1,1.56,15,9.54,9.54,0,0,1,.25,10.07,9.53,9.53,0,0,1,1.56,5.18,9.7,9.7,0,0,1,5.11,1.63,9.54,9.54,0,0,1,10,.32a9.54,9.54,0,0,1,4.89,1.31A9.71,9.71,0,0,1,18.44,5.18ZM16.55,8a0.79,0.79,0,0,0-.23-0.58L15.17,6.29a0.8,0.8,0,0,0-1.14,0L8.85,11.46,6,8.59a0.8,0.8,0,0,0-1.14,0L3.68,9.73a0.79,0.79,0,0,0-.23.58,0.78,0.78,0,0,0,.23.57l4.6,4.59a0.78,0.78,0,0,0,.57.24,0.79,0.79,0,0,0,.58-0.24l6.89-6.89A0.78,0.78,0,0,0,16.55,8Z" transform="translate(-0.25 -0.32)"/>
  },
  {
    name: 'error',
    viewBox: "0 0 19.5 19.56",
    html: <path fill="currentColor" d="M19,6.23a9.73,9.73,0,0,1,0,7.61A9.83,9.83,0,0,1,16.9,17,9.74,9.74,0,0,1,13.79,19a9.66,9.66,0,0,1-7.58,0A9.74,9.74,0,0,1,3.1,17,9.83,9.83,0,0,1,1,13.84,9.73,9.73,0,0,1,1,6.23,9.87,9.87,0,0,1,3.1,3.12,9.75,9.75,0,0,1,6.21,1a9.66,9.66,0,0,1,7.58,0A9.75,9.75,0,0,1,16.9,3.12,9.87,9.87,0,0,1,19,6.23ZM4.22,13.83l9.58-9.57A6.67,6.67,0,0,0,10,3.1,6.76,6.76,0,0,0,6.53,4a6.94,6.94,0,0,0-3.44,6A6.82,6.82,0,0,0,4.22,13.83ZM16.91,10a6.74,6.74,0,0,0-1.1-3.74L6.23,15.85A6.78,6.78,0,0,0,10,17a6.68,6.68,0,0,0,2.68-.55,7,7,0,0,0,2.2-1.48A7,7,0,0,0,16.91,10Z" transform="translate(-0.25 -0.26)"/>
  },
  {
    name: 'warning',
    viewBox: "0 0 19.5 19.5",
    html: <path fill="currentColor" d="M5.11,1.63A9.54,9.54,0,0,1,10,.32a9.54,9.54,0,0,1,4.89,1.31,9.71,9.71,0,0,1,3.55,3.55,9.54,9.54,0,0,1,1.31,4.89A9.54,9.54,0,0,1,18.44,15a9.71,9.71,0,0,1-3.55,3.55A9.54,9.54,0,0,1,10,19.82a9.54,9.54,0,0,1-4.89-1.31A9.7,9.7,0,0,1,1.56,15,9.54,9.54,0,0,1,.25,10.07,9.53,9.53,0,0,1,1.56,5.18,9.7,9.7,0,0,1,5.11,1.63ZM11.6,11.79L11.83,3.9a0.25,0.25,0,0,0-.13-0.23,0.48,0.48,0,0,0-.3-0.1H8.6a0.48,0.48,0,0,0-.3.1,0.25,0.25,0,0,0-.13.23l0.22,7.88a0.28,0.28,0,0,0,.13.22,0.49,0.49,0,0,0,.3.09h2.35a0.47,0.47,0,0,0,.3-0.09A0.32,0.32,0,0,0,11.6,11.79Zm0,4.37V13.74a0.42,0.42,0,0,0-.11-0.3,0.37,0.37,0,0,0-.28-0.12H8.79a0.43,0.43,0,0,0-.42.42v2.41a0.43,0.43,0,0,0,.42.42h2.44a0.37,0.37,0,0,0,.28-0.12A0.42,0.42,0,0,0,11.63,16.15Z" transform="translate(-0.25 -0.32)"/>
  },
  {
    name: 'info',
    viewBox: "0 0 19.5 19.5",
    html: <path fill="currentColor" d="M18.44,5.18a9.54,9.54,0,0,1,1.31,4.89A9.54,9.54,0,0,1,18.44,15a9.71,9.71,0,0,1-3.55,3.55A9.54,9.54,0,0,1,10,19.82a9.54,9.54,0,0,1-4.89-1.31A9.7,9.7,0,0,1,1.56,15,9.54,9.54,0,0,1,.25,10.07,9.53,9.53,0,0,1,1.56,5.18,9.7,9.7,0,0,1,5.11,1.63,9.54,9.54,0,0,1,10,.32a9.54,9.54,0,0,1,4.89,1.31A9.71,9.71,0,0,1,18.44,5.18Zm-5.19,11v-2a0.39,0.39,0,0,0-.41-0.41H11.63V7.23a0.39,0.39,0,0,0-.41-0.41H7.16a0.39,0.39,0,0,0-.41.41v2a0.39,0.39,0,0,0,.41.41H8.38v4.06H7.16a0.39,0.39,0,0,0-.41.41v2a0.39,0.39,0,0,0,.41.41h5.69A0.39,0.39,0,0,0,13.25,16.17ZM11.63,4.79v-2a0.39,0.39,0,0,0-.41-0.41H8.78a0.39,0.39,0,0,0-.41.41v2a0.39,0.39,0,0,0,.41.41h2.44A0.39,0.39,0,0,0,11.63,4.79Z" transform="translate(-0.25 -0.32)"/>
  }
];


const IconLoader = () => {
  return (
    <svg width="0" height="0" className="invisible">
      <defs>
        {ICON_DATA.map((data, idx) => {
          return (
            <svg key={idx} id={`icon-${data.name}`} viewBox={data.viewBox} width="100%" height="100%">
              <title>{data.name}</title>
              {data.html}
            </svg>
          )
        })}
      </defs>
    </svg>
  )
};

export default IconLoader;
