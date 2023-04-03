import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <style
          dangerouslySetInnerHTML={{
            __html:
              'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6 {  margin: 0;  padding: 0;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}',
          }}
        ></style>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n  html {\n    font-family: Titillium Web;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-scheme-green100);\n    background-color: var(--dl-color-scheme-yellow20);\n    \n  }\n\n  \n',
          }}
        ></style>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&amp;display=swap"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta charSet="utf-8"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          id="___gatsby"
          key={`body`}
          dangerouslySetInnerHTML={{
            __html: props.body,
          }}
        />
        {props.postBodyComponents}
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<script>\nwindow.onload = () => {\n  const runAllScripts = () => {\n    initializeAllAccordions()\n  }\n\n  const listenForUrlChanges = () => {\n    let url = location.href\n    document.body.addEventListener(\n      'click',\n      () => {\n        requestAnimationFrame(() => {\n          if (url !== location.href) {\n            runAllScripts()\n            url = location.href\n          }\n        })\n      },\n      true\n    )\n  }\n\n  const initializeAllAccordions = () => {\n    const allAccordions = document.querySelectorAll('[data-role=\"Accordion\"]');\n\n    allAccordions.forEach((accordion) => {\n      const accordionHeader = accordion.querySelector('[data-type=\"accordion-header\"]')\n      const accordionContent = accordion.querySelector('[data-type=\"accordion-content\"]')\n\n      accordionHeader.addEventListener('click', () => {\n        if (accordionContent.style.maxHeight) {\n          accordionContent.style.maxHeight = ''\n        } else {\n          accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`\n        }\n      })\n    })\n  }\n\n  listenForUrlChanges()\n  runAllScripts()\n}\n</script>",
          }}
        ></div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
