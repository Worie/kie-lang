const codeFragments = (text) => text.replace(/\§([^§]*)\§/g, '<span class="code-fragment">$1</span>');
const kielify = (text) => {
  return codeFragments(text);
};
module.exports = kielify;
