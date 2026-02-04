    function convertInline(text) {
      if (!text) return '';

      text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

      text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

      text = text.replace(/(\*\*|__)([\s\S]+?)\1/g, '<strong>$2</strong>');

      text = text.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, (m, pre, content) => pre + '<em>' + content + '</em>');

      text = text.replace(/(^|[^_])_([^_\n]+)_(?!_)/g, (m, pre, content) => pre + '<em>' + content + '</em>');

      return text;
    }

    function convertMarkdown() {
      const inputEl = document.getElementById('markdown-input');
      const raw = inputEl ? inputEl.value : '';

      const lines = raw.split(/\r?\n/);

      const htmlParts = lines.map((line) => {
        const headingMatch = line.match(/^\s*(#{1,3})\s+(.+)$/);
        if (headingMatch) {
          const level = headingMatch[1].length;
          const content = convertInline(headingMatch[2]);
          return `<h${level}>${content}</h${level}>`;
        }

        const quoteMatch = line.match(/^\s*>\s+(.+)$/);
        if (quoteMatch) {
          const content = convertInline(quoteMatch[1]);
          return `<blockquote>${content}</blockquote>`;
        }

        return convertInline(line);
      });

      return htmlParts.join('');
    }

    (function init() {
      const input = document.getElementById('markdown-input');
      const htmlOut = document.getElementById('html-output');
      const preview = document.getElementById('preview');

      function render() {
        const html = convertMarkdown();
        htmlOut.textContent = html;
        preview.innerHTML = html;
      }

      input.addEventListener('input', render);
      render();
    })();