function numberPattern(num) {
    let pattern = "";

    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            pattern += (i + 1);
        }
        pattern += "\n";  // Add new line after each row
    }

    console.log(pattern);
}

numberPattern(8);
