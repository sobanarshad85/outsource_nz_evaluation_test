const utilities = {

    stringTest: (testString) => {
        if (/^\s*$/.test(testString)) {
            return false;
        }
        if (testString === '' || testString === undefined || testString === null) {
            return false;
        }
        return true
    }
}

export default utilities;