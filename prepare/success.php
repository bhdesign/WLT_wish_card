<?php
$json=$_POST['json_string'];
$obj=json_decode($json, true);
require("sendgrid-php/sendgrid-php.php");
$from = new SendGrid\Email('Toyota','voeux@bh-design.fr');
$subject ="Votre carte de voeux a bien été envoyée !";
$to=new SendGrid\Email($obj['auteur'], $obj['form_email']);
$mail = new SendGrid\Mail();
$mail->setFrom($from);
$mail->setSubject($subject);
$apiKeyCE = getenv('DOMAIN2_SENDGRIDAPIKEY');
$apiKeyIntern = getenv('DOMAIN1_SENDGRIDAPIKEY');
if (strpos($_SERVER['HTTP_HOST'], ".ce.") !== false){
$apiKey=$apiKeyCE;
    $monURL2='http://2018.voeux.ce.toyota.fr/';
    $monURL='http://2018.voeux.ce.toyota.fr/preview/emailing_success.html?param1='.urlencode($obj['message']).'&param2='.$obj['auteur'];
    $mail->addCategory("Concessionaires");
}else{
     $apiKey=$apiKeyIntern;
    $monURL2='http://2018.voeux.toyota.fr/';
     $monURL='http://2018.voeux.toyota.fr/preview/emailing_success.html?param1='.urlencode($obj['message']).'&param2='.$obj['auteur'];
    $mail->addCategory("Intern");
}
$personalization = new SendGrid\Personalization();
$personalization->addTo(new SendGrid\Email(null, $obj['form_dest']));
$mail->addPersonalization($personalization);
$contentText = new SendGrid\Content("text/plain", $obj['message']." ".$obj['auteur']);
$mail->addContent($contentText);
$content = new SendGrid\Content("text/html", '<!DOCTYPE html> <html> <head> <title> Meilleurs voeux 2018 </title> </head><body><table cellpadding="0" cellspacing="0" width="100%" style="margin: 17px 0px 0px; min-width: 100%;"> <tbody> <tr> <td style="padding: 0px;"> <div style="text-align: center;font-size:10px;color:black;margin-bottom:10px;"> <font face="verdana"><span><b>Si vous ne visualisez pas ce message, </b><a href="'.$monURL.'">consultez notre version en ligne.</a></span></font> </div> </td> </tr> </tbody> </table> <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center"> <tbody> <tr> <td align="center" valign="top"> </td> </tr> <tr> <td align="center"> <table cellspacing="0" cellpadding="0" border="0" width="600" class="container" align="center"> <tbody> <tr> <td> <!-- added the border style here --> <table style="background-color : #002251; font-size : 16px; font-family : arial, helvetica, sans-serif; line-height : 1; color : #FFFFFF; " cellspacing="0" cellpadding="0" width="100%"> <!-- end of comment --> <tbody> <tr> <td align="center" valign="top"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <!-- added padding here --> <td class="content_padding" style="border:0px; padding-bottom : 10px; "> <!-- end of comment --> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td align="left" valign="top"> <table cellpadding="0" cellspacing="0" width="100%" style="margin: 0px; min-width: 100%;"> <tbody> <tr> <td width="100%" style="padding: 0px;"> <table cellpadding="0" cellspacing="0" width="100%" style="width: 100%; min-width: 100%;"> <tbody> <tr> <td> <table cellspacing="0" cellpadding="0" style="width: 100%;"> <tbody> <tr> <td> <table cellspacing="0" cellpadding="0" style="width: 100%;"> <tbody> <tr> <td valign="top" style="width: 100%;"> <table cellpadding="0" cellspacing="0" width="100%" style="text-align: left; min-width: 100%;"> <tbody> <tr> <td align="left"> <table width="100%" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center"><img src="https://goo.gl/LY3cBu" height="auto" width="100%" style="height: auto; width: 100%; display: block; padding: 0px; text-align: center;" alt="Une année 2018 Pleine d’énergie"></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table cellpadding="0" cellspacing="0" width="100%" style=" margin: 0px;min-width: 100%;"> <tbody> <tr align="center"> <td style="padding: 5px 0px 0px;"> <table width="70%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center"> <table border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center"><span id="message" style="font-family:verdana; color: #fff; text-align: center;font-weight:lighter;font-size:12px;">'.$obj['message'].'</span> <br><br>  <span id="auteur" style="font-family:verdana; color: #bc910f; text-align: center;font-weight:lighter;font-size:12px;line-height: 1.3;padding-top: 5px;"> '.$obj['auteur'].'</span> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;"> <tbody> <tr> <td style="padding-top: 30px; padding-bottom: 30px;"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center"> <table border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center"> <a target="_blank" href="'.$monURL2.'" title=""><img src="https://goo.gl/x8Cmr5" width="150px" height="auto" alt="En savoir plus" ></a> </td> </tr> </tbody> </table><table cellpadding="0" cellspacing="0" width="100%" style="text-align: left; min-width: 100%;"><tbody><tr><td align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td align="center">   <a style="text-decoration: none;color: #002251;" href="https://www.toyota.fr/" alias="Unsubscribe">Unsubscribe</a></td></tr></tbody></table></td> </tr></tbody></table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table cellpadding="0" cellspacing="0" width="100%" style="text-align: left; min-width: 100%;margin-bottom:100px;"> <tbody> <tr> <td align="left"> <table width="100%" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center"><img src="https://goo.gl/UCyHsg" height="auto" width="100%" style="height: auto; width: 100%; display: block; padding: 0px; text-align: center;" alt="hybride"></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table></body></html> ');
$mail->addContent($content);
$sg = new \SendGrid($apiKey);
$response = $sg->client->mail()->send()->post($mail);
echo $response->statusCode();
print_r($response->headers());
echo $response->body();
?>
