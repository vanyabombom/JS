class Rectangle {
    constructor(width, height, name, fill, type, code) {
        this.width = width;
        this.height = height;
        this.name = name;
        this.fill = fill;
        this.type = type;
        this.code = code;
    }

    toString() {
        return JSON.stringify(this);
    }
}

document.getElementById('save-button').addEventListener('click', () => {
    const name = document.getElementById('color-name').value.trim();
    const type = document.getElementById('color-type').value;
    const r = document.getElementById('color-code-r').value;
    const g = document.getElementById('color-code-g').value;
    const b = document.getElementById('color-code-b').value;

    if (!name || r === "" || g === "" || b === "" || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        alert('Please enter a valid name and RGB values between 0 and 255.');
        return;
    }

    const code = `${r},${g},${b}`;
    const rectangle = new Rectangle(150, 100, name, true, type, code);

    console.log(rectangle.toString());

    const colorDisplay = document.getElementById('color-display');
    const colorBox = document.createElement('div');
    colorBox.className = 'rectangle';
    colorBox.style.backgroundColor = `rgb(${code})`;
    colorBox.textContent = `${name}\n${type}\n${code}`;
    colorDisplay.appendChild(colorBox);

    document.getElementById('color-name').value = '';
    document.getElementById('color-code-r').value = '';
    document.getElementById('color-code-g').value = '';
    document.getElementById('color-code-b').value = '';
});
