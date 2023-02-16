if (isset($_POST['enviar'])){
    if (!empty($_POST['nombre']) && !empty($_POST['mensaje']) && !empty($_POST['email'])){
        $nombre =$_POST['nombre'];
        $mensaje=$_POST['mensaje'];
        $email=$_POST['email'];
        $header = "from : leandrodemarchi33@gmail.com ". "\r\n";
        $header = "Reply-To: leandrodemarchi33@gmail.com" . "\r\n";
        $header = "X-Mailer: PHP/".phpversion();
        $mail = @mail($nombre,$mensaje,$email);
        if ($mail){
            echo"""
        }
    }
}