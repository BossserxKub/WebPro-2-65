function sayHello () {
    return "Hello world!"
}

function isString (input) { 
    if (typeof input == "string") {
        return true
    }
    else{
        return false
    }
}

function isNumber (input) {
    if (typeof input == "number") {
        return true
    }
    else{
        return false
    }
}

function isArray (input) {
    return Array.isArray(input)
}

function isObject (input) {
    
  if (input == null) {
    return false
  }
  else if (Array.isArray(input)) {
    return false
  }
  else if (typeof input == 'object') {
    return true
  }
  else
    return false
}

function isFunction (input) {
    if (typeof input == "function") {
        return true
    }
    else{
        return false
    }
}