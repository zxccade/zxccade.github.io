$(document).ready(function(){
    $('#diag_box').modal('show');
    $('#close_btn').click(function() {
        $('#diag_box').modal('hide');
    });
    $('#submit_btn').click(function() {
        // hide the alert everytime the submit button is clicked
        $('#alert').hide();
        // start to retrieve the students
        var sid = $('#diag_val').val();
        var student = search_for(students, "ID number", sid);
        // if failed to retrieve, show the alert and return
        if (student == null) {
            $('#alert').fadeIn();
            $('#diag_val').val("");
            return false;
        }
        // setup student info DOM
        setup_student_info(student);
        $('#identity').fadeIn();

        // setup question and exercise
        setup_question_exercise(student);
        $('#qe_box').fadeIn();

        // hide diag box
        $('#diag_box').modal('hide');
    })
});

var setup_student_info = function(student) {
    var key2val = {'sid': 'ID number', 
                    'fname': 'Full name', 
                    // 'sname': 'Surname', 
                    // 'depart' : 'Department', 
                    'email' : 'Email address'};
    $.each(key2val, function(dom_id, key) {
        $('#' + dom_id).val(student[key]);
    });
}

var setup_question_exercise = function(student) {
    var qid = student['Question'];
    var eid = student['Exercise'];
    var question = search_for($.grep(qe_list, function(item) {
        return item['Q/E'] == 'Question';
    }), 'idx', qid);
    var exercise = search_for($.grep(qe_list, function(item) {
        return item['Q/E'] == 'Exercise';
    }), 'idx', eid);
    $('#question_id').text(question['idx']);
    $('#question').text(question['Description']);
    $('#exercise').text(exercise['Description']);
    $('#exercise_id').text(exercise['idx']);
}

var filter = function(item, key, val) {
    return item[key] == val;
}

var search_for = function(array, key, tgt) {
    res = null;
    $.each(array, function(index, item) {
        if (item[key] == tgt) {
            res = item;
        }
    })
    return res;
}