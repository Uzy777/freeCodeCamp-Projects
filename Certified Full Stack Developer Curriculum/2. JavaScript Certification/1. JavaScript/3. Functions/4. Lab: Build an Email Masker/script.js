let email = "testx@email.com";

function maskEmail(email) {
    const index = (email.indexOf("@"));

    const emailName = email.slice(0, index) // email name

    const domainName = email.slice(index)  // domain name

    const firstChar = emailName[0];

    const lastChar = emailName[emailName.length - 1]

    const stars = "*".repeat(emailName.length - 2)


    return firstChar + stars + lastChar + domainName;


}

console.log(maskEmail(email));