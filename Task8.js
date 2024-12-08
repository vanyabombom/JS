let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let i = 0;

    while (confirm(`${days[i]}. Want to see another one?`)) {
        i = (i + 1) % days.length;
    }
