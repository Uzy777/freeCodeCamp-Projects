

const form = document.getElementById('form');

const fullNameEl = document.getElementById('full-name');
const emailEl = document.getElementById('email');
const orderNoEl = document.getElementById('order-no');
const productCodeEl = document.getElementById('product-code');
const quantityEl = document.getElementById('quantity');

const complaintsFieldset = document.getElementById('complaints-group');
const complaintCheckboxes = complaintsFieldset.querySelectorAll('input[type="checkbox"]');
const otherComplaintEl = document.getElementById('other-complaint');
const complaintDescEl = document.getElementById('complaint-description');

const solutionsFieldset = document.getElementById('solutions-group');
const solutionRadios = solutionsFieldset.querySelectorAll('input[type="radio"]');
const otherSolutionEl = document.getElementById('other-solution');
const solutionDescEl = document.getElementById('solution-description');

const messageBox = document.getElementById('message-box');

function paintBorder(el, ok) {
  el.style.borderColor = ok ? 'green' : 'red';
}


function validateForm() {
  const fullNameOk = fullNameEl.value.trim().length > 0;

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim());

  const orderNoOk = /^2024\d{6}$/.test(orderNoEl.value.trim());

  const productCodeOk = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(productCodeEl.value.trim());

  const quantityOk = /^[1-9]\d*$/.test((quantityEl.value ?? '').toString().trim());

  const complaintsGroupOk = complaintsFieldset.querySelectorAll('input[type="checkbox"]:checked').length > 0;

  const complaintDescriptionOk = otherComplaintEl.checked
    ? complaintDescEl.value.trim().length >= 20
    : true;

  const solutionsGroupOk = !!solutionsFieldset.querySelector('input[type="radio"]:checked');

  const solutionDescriptionOk = otherSolutionEl.checked
    ? solutionDescEl.value.trim().length >= 20
    : true;

  return {
    'full-name': fullNameOk,
    'email': emailOk,
    'order-no': orderNoOk,
    'product-code': productCodeOk,
    'quantity': quantityOk,
    'complaints-group': complaintsGroupOk,
    'complaint-description': complaintDescriptionOk,
    'solutions-group': solutionsGroupOk,
    'solution-description': solutionDescriptionOk
  };
}


function isValid(resultObj) {
  return Object.values(resultObj).every(Boolean);
}



fullNameEl.addEventListener('change', (e) => {
  const ok = e.target.value.trim().length > 0;
  paintBorder(e.target, ok);
});

emailEl.addEventListener('change', (e) => {
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value.trim());
  paintBorder(e.target, ok);
});

orderNoEl.addEventListener('change', (e) => {
  const ok = /^2024\d{6}$/.test(e.target.value.trim());
  paintBorder(e.target, ok);
});

productCodeEl.addEventListener('change', (e) => {
  const ok = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(e.target.value.trim());
  paintBorder(e.target, ok);
});

quantityEl.addEventListener('change', (e) => {
  const ok = /^[1-9]\d*$/.test((e.target.value ?? '').toString().trim());
  paintBorder(e.target, ok);
});

function updateComplaintsGroupBorder() {
  const anyChecked = complaintsFieldset.querySelectorAll('input[type="checkbox"]:checked').length > 0;
  paintBorder(complaintsFieldset, anyChecked);
}

complaintCheckboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    updateComplaintsGroupBorder();

    if (cb === otherComplaintEl) {
      if (otherComplaintEl.checked) {
        const ok = complaintDescEl.value.trim().length >= 20;
        paintBorder(complaintDescEl, ok);
      } else {
        complaintDescEl.style.borderColor = ''; // clear when not required
      }
    }
  });
});

complaintDescEl.addEventListener('change', () => {
  if (otherComplaintEl.checked) {
    const ok = complaintDescEl.value.trim().length >= 20;
    paintBorder(complaintDescEl, ok);
  }
});

function updateSolutionsGroupBorder() {
  const selected = solutionsFieldset.querySelector('input[type="radio"]:checked');
  paintBorder(solutionsFieldset, !!selected);
}

solutionRadios.forEach(r => {
  r.addEventListener('change', () => {
    updateSolutionsGroupBorder();

    if (r === otherSolutionEl) {
      if (otherSolutionEl.checked) {
        const ok = solutionDescEl.value.trim().length >= 20;
        paintBorder(solutionDescEl, ok);
      } else {
        solutionDescEl.style.borderColor = '';
      }
    }
  });
});

solutionDescEl.addEventListener('change', () => {
  if (otherSolutionEl.checked) {
    const ok = solutionDescEl.value.trim().length >= 20;
    paintBorder(solutionDescEl, ok);
  }
});


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const result = validateForm();
  const ok = isValid(result);

  paintBorder(fullNameEl, result['full-name']);
  paintBorder(emailEl, result['email']);
  paintBorder(orderNoEl, result['order-no']);
  paintBorder(productCodeEl, result['product-code']);
  paintBorder(quantityEl, result['quantity']);
  paintBorder(complaintsFieldset, result['complaints-group']);
  if (otherComplaintEl.checked) paintBorder(complaintDescEl, result['complaint-description']);
  paintBorder(solutionsFieldset, result['solutions-group']);
  if (otherSolutionEl.checked) paintBorder(solutionDescEl, result['solution-description']);

  if (messageBox) {
    messageBox.textContent = ok ? 'Form looks valid ✅' : 'Please fix the highlighted fields ❌';
  }

});
