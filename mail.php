<?php 
//jquery dentro de un php en vez de javascript para que sea mas seguro
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $errorEmpty = false;
    $errorEmail = false;

    if(empty($name) || empty($email) || empty($message)) {
        echo "<span class='form-error'>Complete todos los espacios!</span>";
        $errorEmpty =true;
    }
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo "<span class='form-error'>Escribe un email válido!</span>";
        $errorEmpty =true;
    }
    else{
        echo "<span class='form-success'> Complete todos los espacios!</span>";
    }
}
else {
    echo "Hubo un error! :(";
}

?>

<script> //javascript variables = php variables
    var errorEmpty = "<?php echo $errorEmpty ?>";
    var errorEmail = "<?php echo $errorEmail ?>";

    if(errorEmpty == true){
        $("#mail-name, #mail-email, #mail-mssg").addClass("input-error");
    }
    if(errorMail == true){
        $("#mail-email").addClass("input-error");
    }
    if(errorEmpty == false && errorMail == false){
        $("#mail-name, #mail-email, #mail-mssg").val("");
    }
</script>