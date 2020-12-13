$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("accueil/Accueil.feature");
formatter.feature({
  "line": 2,
  "name": "Accueil - OrangeHRM",
  "description": "En tant que utilisateur orange je souhaite acceder au module Recruitment",
  "id": "accueil---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@accueil"
    }
  ]
});
formatter.before({
  "duration": 11479638817,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte sur l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le login \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Redirection vers l accueil",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 5019606837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "AuthentificationOutlineStepDefinition.jeSaisieLeLogin(String)"
});
formatter.result({
  "duration": 523151134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationOutlineStepDefinition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 247891013,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeCliqueSurLogin()"
});
formatter.result({
  "duration": 4758234071,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.redirectionVersLAccueil()"
});
formatter.result({
  "duration": 113179810,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Acceder au module Recruitment",
  "description": "",
  "id": "accueil---orangehrm;acceder-au-module-recruitment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@recruitment"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Je clique sur le module Recruitment",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Je verifie l affichage de la page Recruitment \"Candidates\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccueilStepDefinition.jeCliqueSurLeModuleRecruitment()"
});
formatter.result({
  "duration": 1861650283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidates",
      "offset": 47
    }
  ],
  "location": "AccueilStepDefinition.jeVerifieLAffichageDeLaPageRecruitment(String)"
});
formatter.result({
  "duration": 39733403,
  "status": "passed"
});
formatter.after({
  "duration": 2926856153,
  "status": "passed"
});
formatter.before({
  "duration": 4021324488,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte sur l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le login \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Redirection vers l accueil",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 4322537394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "AuthentificationOutlineStepDefinition.jeSaisieLeLogin(String)"
});
formatter.result({
  "duration": 98874126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationOutlineStepDefinition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 89287466,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeCliqueSurLogin()"
});
formatter.result({
  "duration": 5115620400,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.redirectionVersLAccueil()"
});
formatter.result({
  "duration": 58821742,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Acceder au module PIM",
  "description": "",
  "id": "accueil---orangehrm;acceder-au-module-pim",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@PIM"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Je clique sur le module PIM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Je verifie l affichage de la page PIM \"Configuration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccueilStepDefinition.jeCliqueSurLeModulePIM()"
});
formatter.result({
  "duration": 2234508607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Configuration",
      "offset": 39
    }
  ],
  "location": "AccueilStepDefinition.jeVerifieLAffichageDeLaPagePIM(String)"
});
formatter.result({
  "duration": 71294416,
  "status": "passed"
});
formatter.after({
  "duration": 1469973746,
  "status": "passed"
});
});