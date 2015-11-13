<?php
  var_dump($_GET);
  var_dump($_POST);
?>
<!DOCTYPE html>
<html>
<head>
	<title>My First HTML Form</title>
	<meta charset="utf-8">	
</head>
	<body>
    <h3>User Login</h3>    
		<form method="POST" action="/my_first_form.php">
        <p>    
        <label for="username">Username</label>
        <input id="username" name="username" type="text" placeholder="Enter your username">
        </p>
        <p>
        <label for="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Enter your password">
        </p>
        <p>
        <button>Login</button>
        </p>
    </form>

    <h3>Compose an Email</h3>
       <form method="POST" action="/my_first_form.php"> 	
        <p>    
            <label for="to">To:</label>
            <input id="to" name="to" type="text">
        <p/>
        <p>    
            <label for="from">From:</label>
            <input id="from" name="from" type="text">
       </p>
       <p>     
            <label for="subject">Subject:</label>
            <input id="subject" name="subject" type="text">
        </p>
        <p>
            <label for="email_body">How can we help you?</label>
            <textarea id="email_body" name="email_body" rows="6" cols="45" placeholder="Type your questions here"></textarea>
        </p>
        <p>
            <label for="save_to_inbox">Save a copy of email to my inbox</label>
            <input id="save_email" name="save_email" type="checkbox" value="yes" checked></input>
        </p>    
        <p>
            <button>Submit</button>
        </p>    
        </form>
    <h3>Multiple Choice Test</h3>
        <form method="POST" action="/my_first_form.php">
        <p>What has been the best part of Codeup so far?</p>
            <label>
                <input name="q1" type="radio" value="html">
                HTML
            </label>
            <label>
                <input name="q1" type="radio" value="Git">
                GitHub
            </label>
            <label>
                <input name="q1" type="radio" value="CSS">
                CSS
            </label>
        <p>What is your favorite color?</p>
            <label>
                <input name="q2" type="radio" value="blue">   
                Blue
            </label>
            <label>
                <input name="q2" type="radio" value="red">
                Red
            </label>
            <label>
                <input name="q2" type="radio" value="green">
                Green
            </label>
        <p>What food do you like to eat during Codeup class?</p>
            <label><input name="foods[]" type="checkbox" id="foods1" value="sandwich"> Sandwich</label> 
            <label><input name="foods[]" type="checkbox" id="foods2" value="apple"> Apple</label>
            <label><input name="foods[]" type="checkbox" id="foods3" value="Candybar"> Candybar</label>
        <p>
            <label for="favorite"> What are your favorite candy bars?</label>
            <br>
            <select id="favorite" name="favorite[]" multiple>
                <option value="Butterfinger">Butterfinger</option>
                <option value="Twix">Twix</option>
                <option value="Milky Way">Milky Way</option>
                <option value="Pay Day">Pay Day</option>
                <option value="Hershey">Hershey</option>
                <option value="Almond Joy">Almond Joy</option>
            </select> 
        </p>             
         <button>Submit!</button>               
        </form> 
    <h3>Select Testing</h3>
        <form method="POST" action="/my_first_form.php">
            <label for="printer"> Do you have a 3d printer?</label>
            <select id="printer" name="printer">
                <option value="1" selected>No</option>
                <option value="0">Yes</option>
            </select>
         <h4>Homework Option: Let's learn about you!</h4>   
            <p>What topping do you like on your hamburger?</p>
            <input list="toppings" name="toppings">   
            <datalist id="toppings">
                <option value="cheese">Cheese</option>
                <option value="onion">Onion</option>
                <option value="lettuce">Lettuce</option>
                <option value="tomato">Tomato</option>
            </datalist> 
            <p>
            <label for="number_vacation_days">How many vacation days do you have left?</label>
            <input id="number_vacation_days" name="number_vacation_days" type="number" min="0" max="8">
            </p>
            <p>
            <label for="birthday">When is your birthday?</label>
            <input id="birthday" name="birthday" type="date">
            </p>
            <p>
            <label for="favcolor">Select your favorite color</label>
            <input id="favcolor" name="favcolor" type="color">
            </p>
            <p>
            <label for="htmlrate">Rate yourself in html</label>
            <input for="htmlrate" name="htmlrate" type="range" min="0" max="10" step="2">    
            </p>
            <p>
            <label for="fiveyrs">In what month and year did you turn 5?</label>
            <input for="fiveyrs" name="fiveyrs" type="month">
            </p>
            <p>
            <label for="homeemail">Enter your home email address</label>
            <input for="homeemail" id="homeemail" type="email">
            </p>
            <p>
            <label for="contacttime">Please tell us the best time to contact you</label>
            <input for="contacttime" id="contacttime" type="time">
            </p>
            <p>
            <label for="hearabout">What Internest site referred you to us?</label>
            <input for="hearabout" id="hearabout" type="url">
            </p>
            <p>
            <label for="problem">When did the problem first occur?</label>
            <input for="problem" id="problem" type="datetime-local">
            </p>
        <button>Submit!!</button>   
        </form>      
	</body>	
</html>