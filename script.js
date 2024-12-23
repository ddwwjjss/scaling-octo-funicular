document.getElementById('voice-command').addEventListener('click', function() {
    alert('Hlasový příkaz aktivován!');
});

document.getElementById('text-command').addEventListener('input', function() {
    const inputValue = this.value;
    document.getElementById('results').innerText = `Výsledek pro: ${inputValue}`;
});
