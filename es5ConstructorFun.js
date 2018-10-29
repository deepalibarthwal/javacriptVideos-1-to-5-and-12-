function Alert(title) {
    if(!(this instanceof Alert)) {
        return new Alert(title);
    }
    console.log("1->Alert->ctor");
    this.title = title || "alert";
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

Alert.prototype.show = function() {
    console.log(this.title);
}

Alert.prototype.toString = function() {
    return `Alert->${this.title}`;
}

function SuccessAlert(title) {
    Alert.call(this, title);
    this.type = "success";
    console.log("2->SuccessAlert-ctor");
}

SuccessAlert.prototype = Object.create(Alert.prototype);

SuccessAlert.prototype.constructor = SuccessAlert;

function FailureAlert(title) {
    Alert.call(this, title);
    this.type = "failure";
    console.log("2->FailureAlert-ctor");
}

FailureAlert.prototype = Object.create(Alert.prototype);

FailureAlert.prototype.constructor = FailureAlert;

FailureAlert.prototype.toString = function() {
    var result = Alert.prototype.toString.call(this);
    return `${result} of type ${this.type}`
}

var a= new Alert("my alert"); // Alert("my alert")
console.log(a.title);
a.show();
console.log(a.toString());

// var success = new SuccessAlert("Sucessfully saved!");
// success.show();
// console.log("type: ", success.type);
// console.log("ctor: ", success.constructor);

// var failure = new FailureAlert("Error saving data");
// failure.show();
// console.log(failure.toString());

var success = Alert.createAlert("success", "Data submitted successfully!");
success.show();
console.log(success.toString());

var failure = Alert.createAlert("failure", "Failed to retrive data!");
failure.show();
console.log(failure.toString());

// var alerts= [];
// for(let i= 0; i<10; i++) {
//     alerts.push(new Alert(i));
// }
// console.log(alerts.length);
// console.log(alerts);