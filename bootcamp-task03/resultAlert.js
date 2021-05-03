//A question about "if"
//Which of these alerts are going to execute? What will the results of the expressions be inside if(...)?
if (-1 || 0) alert("first"); // The output is first:
if (-1 && 0) alert("second"); // There is no output:
if (null || (-1 && 1)) alert("third"); //The output is third:
