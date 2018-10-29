class Alert {
    constructor(title) {
        console.log("1->Alert->ctor");
        this.title = title || "alert";
    }

    show() {
        console.log(this.title);
    }

    toString() {
        return `Alert->${this.title}`;
    }
}

Alert.createAlert = function(type, title) {
    switch(type) {
        case "success":
        return new SuccessAlert(title);
        case "failure":
        return new FailureAlert(title);
        default:
        return new Alert(title);
    }
} 

class SuccessAlert extends Alert {
    constructor(title) {
        super(title);
        console.log("2->SuccessAlert-ctor");
        this.type = "success";
    }
}

class FailureAlert extends Alert {
    constructor(title) {
        super(title);
        console.log("2->FailureAlert-ctor");
        this.type = "failure";
    }

    toString() {
        var result = super.toString();
        return `${result} of type ${this.type}`
    }
}

var a = new Alert("my alert");
console.log(a.title);
a.show();
console.log(a.toString());

// var success = new SuccessAlert("success!!");
// success.show();

// var failure = new FailureAlert("Error saving data");
// failure.show();
// console.log(failure.toString());

var success = Alert.createAlert("success", "Data submitted successfully!");
success.show();
console.log(success.toString());

var failure = Alert.createAlert("failure", "Failed to retrive data!");
failure.show();
console.log(failure.toString());