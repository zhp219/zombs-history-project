const button = document.getElementById("fetchBtn");
const input = document.getElementById("urlInput");
const output = document.getElementById("output");

button.addEventListener("click", async () => {
  const url = input.value.trim();

  if (!url) {
    output.textContent = "Please enter a URL.";
    return;
  }

  try {
    const response = await fetch(url);
    const text = await response.text();

    output.textContent = text.slice(0, 1000); // limit output so it doesn't explode
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
});