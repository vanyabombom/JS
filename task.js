let styles = [
    ["color", "red"],
    ["font-size", "1.5em"],
    ["text-position", "absolute"],

];
let text = "zdarov";

function applyStyle(styles, text) {
    let styleString = styles.map(style => style.join(": ")).join("; ");

    document.write(`<p style="${styleString}">${text}</p>`);
}

applyStyle(styles, text);