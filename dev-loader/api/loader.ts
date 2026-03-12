import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { id, port } = req.query;

  if (typeof id !== "string" || typeof port !== "string") {
    res.status(400).send("Missing required params: id, port");
    return;
  }

  const url = `http://localhost:${port}`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(loaderHtml(url, id));
}

const loaderHtml = (
  base: string,
  id: string,
) => `<div data-dev-loader="${id}"></div>
<script>
  (function () {
    var _WS = window.WebSocket;
    window.WebSocket = function (url, protocols) {
      try {
        var u = new URL(url);
        if (u.host === location.host) url = '${base.replace('http://', 'ws://')}' + u.pathname + u.search;
      } catch (_) {}
      return protocols ? new _WS(url, protocols) : new _WS(url);
    };
    window.WebSocket.prototype = _WS.prototype;
    window.WebSocket.CONNECTING = _WS.CONNECTING;
    window.WebSocket.OPEN = _WS.OPEN;
    window.WebSocket.CLOSING = _WS.CLOSING;
    window.WebSocket.CLOSED = _WS.CLOSED;

    var shadow = (function findShadow(root) {
      var elements = root.querySelectorAll('*');
      for (var i = 0; i < elements.length; i++) {
        var sr = elements[i].shadowRoot;
        if (!sr) continue;
        if (sr.querySelector('[data-dev-loader="${id}"]')) return sr;
        var nested = findShadow(sr);
        if (nested) return nested;
      }
    })(document);

    if (!shadow) return;
    if (shadow.querySelector('#${id}-root')) return;

    var base = '${base}';

    fetch(base + '/')
      .then(function (r) { return r.text(); })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');

        doc.body.childNodes.forEach(function (node) {
          if (node.nodeName !== 'SCRIPT') {
            shadow.appendChild(document.importNode(node, true));
          }
        });

        doc.querySelectorAll('script').forEach(function (old) {
          var el = document.createElement('script');
          old.getAttributeNames().forEach(function (name) {
            el.setAttribute(
              name,
              name === 'src'
                ? new URL(old.getAttribute('src'), base).href
                : old.getAttribute(name)
            );
          });
          if (!old.hasAttribute('src')) {
            el.textContent = old.textContent
              .split('"/@').join('"' + base + '/@')
              .split("'/@").join("'" + base + '/@');
          }
          shadow.appendChild(el);
        });
      });
  })();
</script>
`;
