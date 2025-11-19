function truncateString(string, number) {
    if (string.length > number) {
        return string.slice(0, number) + "...";
    }
    else {
        return string
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8)