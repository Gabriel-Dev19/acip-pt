<?php
$data = file_get_contents('php://input');
$data = json_decode($data, true);

$nome = $data['nome'];
$email = $data['email'];
$telefone = $data['telefone'];
$cidade = $data['cidade'];
$estado = $data['estado'];
$tipo_servico = $data['tipo_servico'];
$horario = $data['horario'];
$data_contato = $data['data_contato'];
$mensagem = $data['mensagem'];
$tipo_pessoa = $data['tipo_pessoa'];

$toEmail = "detetiveparticularcuritiba@gmail.com";
$email_send = "globaldetetives@contato.com";
$showMessage = '';


$subject = "Contato site ACIP Detectives Profissionais";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-utf-8' . "\r\n";
$headers .= 'From: ' . 'ACIP Detectives Profissionais ' .$email_send."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
$message = 'Olá,<br/><br/> Você recebeu uma mensagem do site ACIP DETECTIVES PROFISSIONAIS. Confira abaixo os detalhes da solicitação do cliente: <br/><br/>'
. '<b>Nome:</b>      ' . $nome . '<br/>'	
. '<b>E-mail:</b>    ' . $email . '<br/>'
. '<b>Telefone:</b>  ' . $telefone . '<br/>'
. '<b>Cidade:</b>    ' . $cidade . '<br/>'
. '<b>Estado:</b>    ' . $estado . '<br/>'
. '<b>Tipo de pessoa:</b> ' . $tipo_pessoa . '<br/>'
. '<b>Tipo de Investigação:</b> ' . $tipo_servico . '<br/>'
. '<b>Mensagem:</b>  ' . $mensagem . '<br/><br/>'
. '<b>Data para retorno:</b>     ' . $data_contato . '<br/>'
. '<b>Horário para retorno:</b>  ' . $horario . '<br/>';

mail($toEmail, $subject, $message, $headers);
$showMessage = "Mensagem enviada com sucesso em breve entraremos em contacto";

$jsonData = array(
	"message"	=> $showMessage
);
echo json_encode($jsonData); 
?>