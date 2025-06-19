<?php
if ($_POST['g-recaptcha-response'] == null || !isset($_POST['g-recaptcha-response']) || $_POST['g-recaptcha-response'] == '') {
    echo "<script>alert('Complete el reCAPTCHA para continuar')</script>";
    echo "<script>window.location.replace('index.html#contacto');</script>";
    return;
} elseif (isset($_POST['nombre']) && isset($_POST['apellidos']) && isset($_POST['telefono']) && isset($_POST['servicio']) && isset($_POST['fecha_estancia']) && isset($_POST['contacto'])) {
    $nombre = trim($_POST['nombre']);
    $apellidos = trim($_POST['apellidos']);
    $telefono = trim($_POST['telefono']);
    $servicio = trim($_POST['servicio']);
    $fecha_estancia = trim($_POST['fecha_estancia']);
    $contacto = trim($_POST['contacto']);

    $message = "Nombre: $nombre $apellidos\nTeléfono: $telefono\nServicio: $servicio\nFecha de estancia: $fecha_estancia\nPreferencia de contacto: $contacto";

    $response = $_POST['g-recaptcha-response'];
    $secret = '6Lf-SNoqAAAAAKhbtsA3r8N2J0eGjCHOFiBHqjqO';
    $url = "https://www.google.com/recaptcha/api/siteverify";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, 
        http_build_query(
            array(
                'secret'=>$secret,
                'response'=>$response
            )
        )
    );
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($ch);
    curl_close($ch);

    $result = json_decode($result);

    if($result->success){
        $to = 'acruz.pbxhosting@gmail.com, jballadares.pbxhosting@gmail.com';
        // $to = 'contacto@casadelriozimatan.com.mx, reservaciones@casadelriozimatan.com.mx';
        $subject = 'Formulario de contacto';


        $mail = mail($to, $subject, $message);
        if($mail){
            echo "<script>alert('Formulario enviado con exito')</script>";
            echo "<script>window.location.replace('index.html');</script>";
            return;
        }else{
            echo "<script>alert('Ocurrio un error al enviar el formulario')</script>";
            echo "<script>window.location.replace('index.html');</script>";
            return;
        }
    }
}else{
    echo "<script>alert('Llene todos los campos obligatorios del formulario para continuar')</script>";
    echo "<script>window.location.replace('index.html#contacto');</script>";
    return;
}
?>