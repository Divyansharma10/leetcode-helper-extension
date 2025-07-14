document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit');
  const approachInput = document.getElementById('approach');
  const responseDiv = document.getElementById('response');

  submitBtn.addEventListener('click', () => {
    const prompt = approachInput.value.trim();

    if (!prompt) {
      responseDiv.innerHTML = `<p style="color:red;">Please enter a prompt.</p>`;
      return;
    }

    responseDiv.innerHTML = `<p>Loading...</p>`;

    fetch('http://localhost:3000/api/gemini', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    })
      .then(response => response.json())
      .then(data => {
        responseDiv.innerHTML = `<h4>Gemini says:</h4><p>${data.reply}</p>`;
      })
      .catch(error => {
        responseDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        console.error('Error talking to Gemini:', error);
      });
  });
});
