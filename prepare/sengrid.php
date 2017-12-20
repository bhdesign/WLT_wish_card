<?php
$json=$_POST['json_string'];

$obj=json_decode($json, true);

// using SendGrid's PHP Library
// https://github.com/sendgrid/sendgrid-php
// If you are using Composer (recommended)
//require 'vendor/autoload.php';
// If you are not using Composer
require("sendgrid-php/sendgrid-php.php");
$from = new SendGrid\Email($obj['auteur'], $obj['form_email']);
$subject = $obj['titre'];
$personalization = array();
$pieces = explode(",", $obj['form_dest']);
$recp_cnt = count($pieces);
$mail = new SendGrid\Mail();
$mail->setFrom($from);
$mail->setSubject($subject);
    //$mail->setReplyTo(new SendGrid\Email(null, $CDASH_EMAIL_REPLY));
$mail->addContent($content);
foreach (explode(',', $obj['form_dest']) as $recipient) {
    $personalization = new SendGrid\Personalization();
    $personalization->addTo(new SendGrid\Email(null, $recipient));
    $mail->addPersonalization($personalization);
}
$apiKeyCE = getenv('DOMAIN2_SENDGRIDAPIKEY');
$apiKeyIntern = getenv('DOMAIN1_SENDGRIDAPIKEY');

if ($_SERVER['SERVER_NAME'] == "2018.voeux.toyota.fr") {
    $apiKey=$apiKeyIntern;
    $monURL='http://2018.voeux.toyota.fr/';
    $mail->addCategory("Intern");
}else{
    $apiKey=$apiKeyCE;
    $mail->addCategory("Concessionaires");
    $monURL='http://2018.voeux.ce.toyota.fr/';
}
$content = new SendGrid\Content("text/plain", $obj['message']." ".$obj['auteur']);
$content = new SendGrid\Content("text/html", '<html><head> <title>Meilleurs voeux 2018!</title> <!--meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"--> <meta content="text/html; charset=UTF-8"> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <style type="text/css"> body { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0 !important; } p { margin: 1em 0; } table td {} img { outline: 0; } a img { border: none; } p { margin: 1em 0; } @-ms-viewport { width: device-width; } </style> <style type="text/css"> @media only screen and (max-width: 480px) { .container { width: 100% !important; } .footer { width: auto !important; margin-left: 0; } .content-padding { padding: 4px !important; } .mobile-hidden { display: none !important; } .logo { display: block !important; padding: 0 !important; } img { max-width: 100% !important; height: auto !important; max-height: auto !important; } .header img { max-width: 100% !important; height: auto !important; max-height: auto !important; } .photo img { width: 100% !important; max-width: 100% !important; height: auto !important; } .drop { display: block !important; width: 100% !important; float: left; clear: both; } .footerlogo { display: block !important; width: 100% !important; padding-top: 15px; float: left; clear: both; } .nav4, .nav5, .nav6 { display: none !important; } .tableBlock { width: 100% !important; } .responsive-td { width: 100% !important; display: block !important; padding: 0 !important; } .fluid, .fluid-centered { width: 100% !important; max-width: 100% !important; height: auto !important; margin-left: auto !important; margin-right: auto !important; } .fluid-centered { margin-left: auto !important; margin-right: auto !important; } /* MOBILE GLOBAL STYLES - DO NOT CHANGE */ body { padding: 0px !important; font-size: 16px !important; line-height: 150% !important; } h1 { font-size: 22px !important; line-height: normal !important; } h2 { font-size: 20px !important; line-height: normal !important; } h3 { font-size: 18px !important; line-height: normal !important; } /* END OF MOBILE GLOBAL STYLES - DO NOT CHANGE */ } @media only screen and (max-width: 640px) { .container { width: 100% !important; } .mobile-hidden { display: none !important; } .logo { display: block !important; padding: 0 !important; } .photo img { width: 100% !important; height: auto !important; } .nav5, .nav6 { display: none !important; } .fluid, .fluid-centered { width: 100% !important; max-width: 100% !important; height: auto !important; margin-left: auto !important; margin-right: auto !important; } .fluid-centered { margin-left: auto !important; margin-right: auto !important; } .content_padding { padding: 0 !important; } } </style>  <!--[if mso]> <style type="text/css"> /* Begin Outlook Font Fix */ body, table, td { font-family : arial, helvetica, sans-serif; line-height : 1; font-size : 16px; color : #FFFFFF; } /* End Outlook Font Fix */ </style> <![endif]--></head><body bgcolor="#EFEFEF !important" text="#808080" style="margin: 0px; ; -webkit-text-size-adjust:none; padding-top : 20px; padding-right : 20px; padding-bottom : 20px; padding-left : 20px;background-color : #EFEFEF !important; font-family : verdana; line-height : 1; font-size : 16px; color : #FFFFFF; padding : 20px; "> <table cellpadding="0" cellspacing="0" width="100%" style="margin: 17px 0px 0px; min-width: 100%;"> <tbody> <tr> <td style="padding: 0px;"> <div style="text-align: center;font-size:10px;color:black;margin-bottom:10px;"> <font face="verdana"><span><b>Si vous ne visualisez pas ce message, </b><a href="'.$monURL.'"preview/emailing.html?param1='.urlencode($obj['message']).'&param2='.$obj['auteur'].'">consultez notre version en ligne.</a></span></font> </div> </td> </tr> </tbody> </table> <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center"> <tbody> <tr> <td align="center" valign="top"> </td> </tr> <tr> <td align="center"> <table cellspacing="0" cellpadding="0" border="0" width="600" class="container" align="center"> <tbody> <tr> <td> <!-- added the border style here --> <table style="background-color : #002251; font-size : 16px; font-family : arial, helvetica, sans-serif; line-height : 1; color : #FFFFFF; " cellspacing="0" cellpadding="0" bgcolor="#000000" width="100%"> <!-- end of comment --> <tbody> <tr> <td align="center" valign="top"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <!-- added padding here --> <td class="content_padding" style="border:0px; padding-bottom : 10px; "> <!-- end of comment --> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td align="left" valign="top"> <table cellpadding="0" cellspacing="0" width="100%" style="margin: 0px; min-width: 100%;"> <tbody> <tr> <td width="100%" style="padding: 0px;"> <table cellpadding="0" cellspacing="0" width="100%" style="width: 100%; min-width: 100%;"> <tbody> <tr> <td> <table cellspacing="0" cellpadding="0" style="width: 100%;"> <tbody> <tr> <td> <table cellspacing="0" cellpadding="0" style="width: 100%;"> <tbody> <tr> <td valign="top" style="width: 100%;"> <table cellpadding="0" cellspacing="0" width="100%" style="text-align: left; min-width: 100%;"> <tbody> <tr> <td align="left"> <table width="100%" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center"><img src="http://image.toyotafrance.fr/lib/fe9813727664057973/m/1/25ca6a2b-782c-42b1-92e1-413f8fcb39e6.png" height="auto" width="100%" style="height: auto; width: 100%; display: block; padding: 0px; text-align: center;" alt="Une année 2018 Pleine d’énergie"></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table cellpadding="0" cellspacing="0" width="100%" style=" margin: 0px;min-width: 100%;"> <tbody> <tr align="center"> <td style="padding: 5px 0px 0px;"> <table width="70%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center"> <table border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center"><span id="message" style="font-family:verdana; color: #fff; text-align: center;font-weight:lighter;font-size:12px;">'.$obj['message'].'</span> <br><br>  <span id="auteur" style="font-family:verdana; color: #bc910f; text-align: center;font-weight:lighter;font-size:12px;line-height: 1.3;padding-top: 5px;"> '.$obj['auteur'].'</span> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;"> <tbody> <tr> <td style="padding-top: 30px; padding-bottom: 30px;"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center"> <table border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center"> <a target="_blank" href="'.$monURL.'" title=""><img src="http://image.toyotafrance.fr/lib/fe9813727664057973/m/1/d210b40e-3096-4a60-b1d1-69515fd11811.png" width="150px" height="auto" alt="En savoir plus" /></a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table cellpadding="0" cellspacing="0" width="100%" style="text-align: left; min-width: 100%;margin-bottom:100px;"> <tbody> <tr> <td align="left"> <table width="100%" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center"><img src="http://image.toyotafrance.fr/lib/fe9813727664057973/m/1/b63c60a6-98cf-4672-a51b-df96b854cd9f.jpg" height="auto" width="100%" style="height: auto; width: 100%; display: block; padding: 0px; text-align: center;" alt="hybride"></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table cellpadding="0" cellspacing="0" width="100%" style="margin: 17px 0px 0px; min-width: 100%;"> <tbody> <tr> <td style="padding: 0px;"> </td> </tr> </tbody> </table></body></html> ');




//$apiKey = getenv(SENDGRIDAPIKEY_intern);
$sg = new \SendGrid($apiKey);
$response = $sg->client->mail()->send()->post($mail);
echo $response->statusCode();
print_r($response->headers());
echo $response->body();
?>
