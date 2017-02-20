var student = (function () {
    function student() {
        this.StudentName = " ";
    }
    student.prototype.validate = function () {
        alert("test");
    };
    return student;
}());
