const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');
const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

function getFlags() {
  let flags = '';
  if (caseInsensitiveFlag && caseInsensitiveFlag.checked) flags += 'i';
  if (globalFlag && globalFlag.checked) flags += 'g';
  return flags;
}

testButton.addEventListener('click', () => {
  const pattern = regexPattern.value || '';

  let flags = '';
  try {
    flags = getFlags();
  } catch {
    flags = '';
  }

  let regex;
  try {
    regex = new RegExp(pattern, flags);
  } catch (e) {
    testResult.innerText = 'no match';
    return;
  }

  const plainText = stringToTest.textContent;

  const match = plainText.match(regex);
  if (!match) {
    testResult.innerText = 'no match';
    return;
  }

  const matchesList = regex.global ? match : [match[0]];
  testResult.innerText = matchesList.join(', ');

  const highlightedHTML = plainText.replace(regex, (m) => `<span class="highlight">${m}</span>`);
  stringToTest.innerHTML = highlightedHTML;
});
``