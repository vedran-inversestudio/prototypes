document.addEventListener('DOMContentLoaded', function() {
  const minusBtn = document.getElementById('minusBtn');
  const plusBtn = document.getElementById('plusBtn');
  const baggageCount = document.getElementById('baggageCount');
  const form = document.querySelector('.form-card');

  let count = 0;

  function updateButtons() {
    minusBtn.disabled = count <= 0;
  }

  minusBtn.addEventListener('click', function() {
    if (count > 0) {
      count--;
      baggageCount.textContent = count;
      updateButtons();
    }
  });

  plusBtn.addEventListener('click', function() {
    count++;
    baggageCount.textContent = count;
    updateButtons();
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Request sent!');
  });

  updateButtons();
}); 