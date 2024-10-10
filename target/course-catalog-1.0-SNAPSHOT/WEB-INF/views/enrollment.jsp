<html>
<body>
    <h1>Enrollment Form</h1>
    <form action="confirmEnrollment" method="post">
        Name: <input type="text" name="name"><br>
        Email: <input type="email" name="email"><br>
        <input type="hidden" name="courseId" value="${courseId}">
        <input type="submit" value="Enroll">
    </form>
</body>
</html>
