exports.getDate = function () {
    let today = new Date();
    let otpions = {
        weekDay: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", otpions);
}

exports.getDay = function () {
    let today = new Date();
    let otpions = {
        weekDay: "long",
    };
    return today.toLocaleDateString("en-US", otpions);
}