import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        --color-primaryDark: hsl(179, 30% , 29%);
        --color-primaryMedium: hsl(182, 22% , 47%);
        --color-primaryHighlight: hsla(182, 22% , 47%, 0.3);
        --color-primaryLight:hsl(180, 33% , 84%);
        --color-mint: hsl(153, 18% , 81%);
        --color-green: hsl(108, 23% , 79%);
        --color-water: hsl(210, 46% , 58%);
        --color-waterHighlight: hsla(210, 46% , 58%, 0.3);
        --color-lightBlue: hsl(192, 38% , 82%);
        --color-sunshine: hsl(42, 69% , 72%);
        --color-sunshineHighlight: hsla(42, 69% , 72%, 0.3);
        --color-soil: hsl(27, 100% , 87%);
        --color-soilHighlight: hsla(27, 65% , 87%, 0.3);
        --color-pink: hsl(346, 39% , 79%);
        --color-pinkHighlight: hsl(356, 32% , 91%);
        --color-cream: hsl(0, 0% , 95%);
        --color-creamAccent: hsl(0, 0% , 91%);
        --color-grey: hsl(200, 12% , 95%);
        --color-purpleGrey: hsl(230, 14% , 65%);
        --color-greyAccent: hsl(220, 10% , 59%);
        /* --font-heading: 'Permanent Marker', Arial, Helvetica, sans-serif;
        --font-body: 'Kosugi', Arial, Helvetica, sans-serif;
        --padding-page: 24px; */
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
    html, body, div,
    input, textarea, button, select, option,
    h1, h2, h3, h4, h5, h6, p,
    text {
        font-family: 'Raleway', Arial, sans-serif;
    }

    html, body {
    max-width: 100vw;
    height: 100vh;
    background-color: var(--color-primaryLight);
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    body {
        line-height: 1.25;
        margin: 0 15%;
    }

    button {
        color: #FFF;
        background-color: green;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        margin: 20px 0;
        padding: 10px 20px;
        border-radius: 40px;
        transition: background-color ease-out 300ms;

    &:hover{
        background-color: whitesmoke;
        transform: scale(.98);
    }
    }

    a {
        text-decoration: none;
        color: black;
        cursor: pointer;
    }

    Link {
        text-decoration: none;
    }
`
export default GlobalStyles;