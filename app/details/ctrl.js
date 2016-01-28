'use strict';

angular.module('app')
    .controller('DetailsCtrl', ['$scope', '$location', '$sce', function ($scope, $location, $sce) {

        var id = $location.search().id || 1;

        $scope.changeData = function(id) {


            if (id == 'Président') {
                $scope.id = 'Président';
                $scope.name = 'luc';
                $scope.sourceImgBg = 'img/bg_ceo.png';
                $scope.sourceImgBgMini = 'img/bg_ceo_560.png';
                $scope.phraseConsulte = 'Tiens prends les clefs et amuse toi bien !';
                $scope.nomConsulte = 'Luc Legardeur, Président';
                $scope.expert = 'L’EXPERT';
                $scope.apprenti = 'L’APPRENTIE';
                $scope.phraseConsultant = 'C’est qui le patron ???';
                $scope.nomConsultant = 'Laurène Vol, Consultante';
                $scope.rond1 = 'img/laurene_vol.png';
                $scope.quote1 = $sce.trustAsHtml('Journée démarrée, enchaînée et terminée sur les chapeaux de roues. Milles choses à faire, à voir et à discuter, toutes plus passionnantes et différentes les unes que les autres. Métier un peu ingrat que celui de CEO : on a pas l’impression de produire grand chose, mais ça ne nous empêche pas de courir dans tous les sens toute la journée et de sortir vidé. Un peu comme un coach agile finalement, mais sans les post-it !');
                $scope.role_plus = 'Le côté touche à tout.';
                $scope.role_moins = 'Je trouverais ça frustrant de ne pouvoir approfondir les sujets, faute de temps et du nombre d’éléments à gérer.';
                $scope.gratifiante = 'Le partage de la bonne parole.';
                $scope.ingrate = 'Peu de temps pour creuser un projet.';
                $scope.ccl = 'En conclusion : C’est pas moi le patron, et c’est très bien comme ça !'
                $scope.video = 'https://www.youtube.com/embed/KsscgrEtfdQ?rel=0';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/VMV-President-Xebia&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=http://bit.ly/VMV-President-Xebia";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=http://bit.ly/VMV-President-Xebia";
                $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/VMV-President-Xebia";
                $scope.blog_article = "http://blog.xebia.fr/2015/08/25/vis-ma-vie-episode-1-laurene-prend-les-cles-de-xebia/";
                $scope.texte_MatchReturn = "VIE MA VIE DE COACH AGILE";
                $scope.lien_matchRetour = "#/retour?id=Coach Agile";
                $scope.hasBackEpisode = true;
                $scope.accessible = false;

            }

            else if (id == 'CTO') {
                $scope.id = 'CTO';
                $scope.name = 'pablo';
                $scope.expert = 'L’EXPERT';
                $scope.sourceImgBg = 'img/bg_cto.png';
                $scope.sourceImgBgMini = 'img/bg_cto_560.png';
                $scope.phraseConsulte = 'Troll en chef';
                $scope.nomConsulte = 'Pablo Lopez, CTO';
                $scope.apprenti = 'L’APPRENTI';
                $scope.phraseConsultant = '50 kilos tout mouillé';
                $scope.nomConsultant = 'Alexandre Hebert, Consultant';
                $scope.rond1 = 'img/alexandre_hebert.png';
                $scope.quote1 = $sce.trustAsHtml('Une journée haute en chaleur, ponctuée par de nombreux déplacements aux quatres coins du siège, et durant laquelle j’ai pu suivre partout un CTO très volubile qui n’a pas hésité à répondre à toutes mes questions, en me faisant par la même occasion découvrir son métier des caves au grenier : des difficultés qu’il rencontre au quotidien jusqu’aux aspects les plus passionnants ! C T Ouf !');
                $scope.role_plus = 'La variété des responsabilités et des tâches.';
                $scope.role_moins = 'Peu de temps pour réellement approndir les sujets qui nous tiennent à coeur.';
                $scope.gratifiante = 'La force de proposition du CTO quant au choix des missions qui pourraient intéresser les Xebians.';
                $scope.ingrate = 'Les relances par mail.';
                $scope.ccl = 'Heureusement pour moi, vis ma vie ne veut pas dire "Prends ma place" ! Pfiou !'
                $scope.video = 'https://www.youtube.com/embed/qy82p2sr2mQ?rel=0';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/VMV-CTO-Xebia&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=http://bit.ly/VMV-CTO-Xebia";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/VMV-CTO-Xebia";
                $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/VMV-CTO-Xebia";
                $scope.blog_article = "http://blog.xebia.fr/2015/09/01/vis-ma-vie-episode-2-alexandre-cto-dun-jour/";
            }

            else if (id == 'Dir. Xebia Studio') {
                $scope.name = 'thibaud';
                $scope.sourceImgBg = 'img/bg_studio.png';
                $scope.sourceImgBgMini = 'img/bg_studio_560.png';
                $scope.phraseConsulte = 'Le forfait, oui, mais seulement au ski !';
                $scope.nomConsulte = 'Thibaud Cavin, Responsable Xebia Studio';
                $scope.phraseConsultant = 'A grand, grand et demi ?';
                $scope.expert = 'L’EXPERT';
                $scope.apprenti = 'L’APPRENTI';
                $scope.nomConsultant = 'Emmanuel Sciara, Coach Agile';
                $scope.rond1 = 'img/emmanuel_sciara.png';
                $scope.quote1 = $sce.trustAsHtml('Il faut savoir faire tourner tout ça ! En faisant en sorte que clients ET Xebians soient contents, s’il vous plait !  Bref, un travail d’équilibriste, pavé de contraintes et de paramètres mouvants : il faut être disponible tout en jonglant avec des œufs et préparer les propositions commerciales. Ce qui m’a vraiment impressionné ? La fluidité du travail d’équipe entre le management Studio, l’opérationnel et le marketing. Pas de problème qui ne trouve de solution !');
                $scope.role_plus = 'Le travail d’équipe avec les autres parties prenantes.';
                $scope.role_moins = 'La préparation de contrats et de soutenances.';
                $scope.gratifiante = 'Les retours clients positifs et l’image qu’on nous donne en retour.';
                $scope.ingrate = 'Ecrire les contrats avec tous les aller-retours client que cela implique.';
                $scope.ccl = 'En conclusion : Enlevez moi la paperasse et je signe !!! Bon, en fait, ça fait partie du job… Ça va être dur !'
                $scope.video = 'https://www.youtube.com/embed/PKSHTaxoHjs?rel=0';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/XebianVMV-DirectStudio&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=http://bit.ly/XebianVMV-DirectStudio";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=http://bit.ly/XebianVMV-DirectStudio";
                $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/XebianVMV-DirectStudio";
                $scope.blog_article = "http://blog.xebia.fr/2015/09/08/vis-ma-vie-episode-3-emmanuel-directeur-xebia-studio-dun-jour/";
            }

            else if (id == 'Dir. Recrutement') {
                $scope.name = 'laetitia';
                $scope.sourceImgBg = 'img/bg_recrutement.png';
                $scope.sourceImgBgMini = 'img/bg_recrutement_560.png';
                $scope.phraseConsulte = 'Une chasseuse sachant chasser…';
                $scope.nomConsulte = 'Laetitia Janné, Responsable du recrutement';
                $scope.phraseConsultant = 'La puissance de la funk !';
                $scope.nomConsultant = 'Jeremy Vinai, Consultant';
                $scope.expert = 'L’EXPERTE';
                $scope.apprenti = 'L’APPRENTI';
                $scope.rond1 = 'img/jeremy_vinai.png';
                $scope.quote1 = $sce.trustAsHtml('Jeremy Vinai, société Xebia, bonjour.\" Durant cette journée très agréable, j’ai pu assimiler toutes les tâches d\'une Directrice Recrutement : gérer la recherche de profils, manager l’équipe recrutement, entretenir le contact avec les futurs potentiels recrutés et accueillir les nouveaux Xebians, pour une bonne intégration. Ce métier demande beaucoup d’intéractions en interne comme en externe !\" ');
                $scope.role_plus = 'Le rapport humain';
                $scope.role_moins = 'L’importance du timing dans la recherche de pépite';
                $scope.gratifiante = 'La signature finale';
                $scope.ingrate = 'Dépendre des consultants recruteurs pour la suite du process de recrutement';
                $scope.ccl = 'En bref, une superbe expérience et un regard neuf sur le métier de recruteur !';
                $scope.video = 'https://www.youtube.com/embed/y0cFgueZPJU?rel=0';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/XebianVMV-DirRecrutement&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/XebianVMV-DirRecrutement";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/XebianVMV-DirRecrutement";
                $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/XebianVMV-DirRecrutement";
                $scope.blog_article = "http://blog.xebia.fr/2015/09/15/vis-ma-vie-episode-4-jeremy-directeur-recrutement-dun-jour";
                $scope.texte_MatchReturn = "VIE MA VIE DE DEVELOPPEUR";
                $scope.lien_matchRetour = "#/retour?id=Developpeur";
                $scope.hasBackEpisode = true;
                $scope.accessible = true;
            }

             else if (id == 'Dir. Marketing') {
                 $scope.name = 'anne';
                 $scope.sourceImgBg = 'img/bg_marketing_black.png';
                 $scope.sourceImgBgMini = 'img/bg_marketing_560.png';
                 $scope.phraseConsulte = 'Du violet du violet ... Je veux du violet partout !';
                 $scope.nomConsulte = 'Anne Beauchart, Directrice Marketing';
                 $scope.expert = 'L’EXPERTE';
                 $scope.apprenti = 'L’APPRENTIE';
                 $scope.phraseConsultant = 'C’est easy !';
                 $scope.nomConsultant = 'Sameh Ben Fredj, Consultante';
                 $scope.rond1 = 'img/sameh_ben_fredj.png';
                 $scope.quote1 = $sce.trustAsHtml('Cette journée m’a permise d’avoir une meilleure compréhension du métier de Directrice Marketing. Je me disais «C’est easy !» mais en réalité, j’en ai eu plein les yeux ! C’est une expérience intense et riche. La Directrice Marketing est les yeux, les oreilles et la bouche de Xebia. Elle est partout pour représenter la boîte et en faire parler. Sa journée est un vrai marathon. Elle touche à tout : rédaction, web, événementiel, tout en gérant le budget et des deadlines très serrées. Chapeau bas !');
                 $scope.role_plus = 'Le côté touche à tout et être partout';
                 $scope.role_moins = 'L’écriture, la mise en page et la publication des billets de blog';
                 $scope.gratifiante = 'Le fait que Xebia soit visible partout !';
                 $scope.ingrate = 'L’investissement passé sur les TechTrends, nos livres blancs !';
                 $scope.ccl = 'En conclusion : Finalement « le market, c’est pas du tout easy ! » et être Directrice Marketing d’un jour m’aura suffit ! :-)'
                 $scope.video = 'https://www.youtube.com/embed/gGGOJzL5Vhg?rel=0';
                 $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://bit.ly/XebianVMV-DirMarketing&hashtags=XebianVMV&via=XebiaFr";
                 $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/XebianVMV-DirMarketing";
                 $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/XebianVMV-DirMarketing";
                 $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/XebianVMV-DirMarketing";
                 $scope.blog_article = "http://blog.xebia.fr/2015/09/22/vis-ma-vie-episode-5-sameh-directrice-marketing-dun-jour";
                 $scope.texte_MatchReturn = "VIE MA VIE DE DATA SCIENTIST";
                 $scope.lien_matchRetour = "#/retour?id=Data Scientist";
                 $scope.hasBackEpisode = true;
                 $scope.accessible = true;
             }


             else if (id == 'COO') {
                 $scope.name = 'christophe';
                 $scope.sourceImgBg = 'img/bg_coo.png';
                 $scope.sourceImgBgMini = 'img/bg_coo_560.png';
                 $scope.phraseConsulte = 'Délégation idoine';
                 $scope.nomConsulte = 'Christophe Heubes, COO';
                 $scope.phraseConsultant = 'Moi aussi j’ai cherché dans le dico...';
                 $scope.expert = 'L’EXPERT';
                 $scope.apprenti = 'L’APPRENTI';
                 $scope.nomConsultant = 'Jéremie Martinez, Consultant';
                 $scope.rond1 = 'img/jeremie_martinez.png';
                 $scope.quote1 = $sce.trustAsHtml('Ça commence tôt, ça finit tard et entre les deux ça n’arrête pas ! Un planning chargé, des interruptions nombreuses, des tâches pas toujours sympas mais au final la sensation d’avoir un vrai impact sur la vie et les personnes de la société. COO est un poste un peu caché mais qui est indispensable chez Xebia. Aucune journée ne ressemble à la précédente et il faut pouvoir se rendre disponible rapidement et à tout moment. Le COO est un peu le chef d’orchestre de Xebia.');
                 $scope.role_plus = 'Le fait d’avoir une vue d’ensemble de l’entreprise.';
                 $scope.role_moins = 'Les relectures de documents juridiques.';
                 $scope.gratifiante = 'Le fait que l’entreprise tourne et réussisse.';
                 $scope.ingrate = 'La gestion des petits problèmes logistiques non visible : Imprimante, DD, réseaux, etc.';
                 $scope.ccl = 'En conclusion : Délégation idoine, avec autant de choses différentes à faire et une TODO longue comme deux bras, je comprends mieux. En tout cas, c’est pas pour moi !';
                 $scope.video = 'https://www.youtube.com/embed/UXm54jMq6TI';
                 $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/1L4eKTB&hashtags=XebianVMV&via=XebiaFr";
                 $scope.video_google = "https://plus.google.com/share?url=https://www.youtube.com/watch?v=UXm54jMq6TI&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48";
                 $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://www.youtube.com/watch?v=UXm54jMq6TI&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48";
                 $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://www.youtube.com/watch?v=UXm54jMq6TI&list=PL-Wbj9VN8zDSHojMLxdpDSpMBojN81B48";
                 $scope.blog_article = "http://blog.xebia.fr/2015/10/06/vis-ma-vie-episode-7-jeremie-coo-dun-jour/";

             }

            else if (id == 'Consultant Manager') {
                $scope.name = 'jean-louis';
                $scope.sourceImgBg = 'img/bg_manager.png';
                $scope.sourceImgBgMini = 'img/bg_manager_560.png';
                $scope.phraseConsulte = 'Manager et consultant avant tout';
                $scope.nomConsulte = 'Jean-Louis Rigau, Manager';
                $scope.phraseConsultant = 'Tournez Managers';
                $scope.expert = 'L’EXPERT';
                $scope.apprenti = 'L’APPRENTI';
                $scope.nomConsultant = 'Antoine Michaud, Consultant';
                $scope.rond1 = 'img/antoine_michaud.png';
                $scope.quote1 = $sce.trustAsHtml('Les managers font un boulot étonnant. Sous ce terme un peu générique se cachent beaucoup de responsabilités : l’intégration des xebians, leur bien-être en mission, la bonne coordination avec l’administration, etc. Franchement, je le pense depuis mes débuts ici et je continue de le penser : s’il fait bon vivre de bosser ici, ils n’y sont pas pour rien. Bravo les gars, vous assurez!');
                $scope.role_plus = 'La proximité avec l’ensemble des xebians. C’est agréable de pouvoir réfléchir à plusieurs !';
                $scope.role_moins = 'Les taches administratives non automatisées, mais nécessaires.';
                $scope.gratifiante = 'L’aboutissement de l’ensemble des tâches.';
                $scope.ingrate = 'Le staffing !';
                $scope.ccl = 'Conclusion : c’est fou tout ce qui peut arriver quand on croise un motard...'
                $scope.video = 'https://www.youtube.com/embed/PgDO9QhpRDk';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/XebianVMV-ConsultantManager&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=http://bit.ly/XebianVMV-ConsultantManager";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=http://bit.ly/XebianVMV-ConsultantManager";
                $scope.video_facebook = "http://www.facebook.com/sharer.php?u=http://bit.ly/XebianVMV-ConsultantManager";
                $scope.blog_article = "http://blog.xebia.fr/2015/10/20/vis-ma-vie-episode-9-antoine-consultant-manager-dun-jour/";
            }

            else if (id == 'Dir. Commerciale') {
                $scope.name = 'estelle';
                $scope.sourceImgBg = 'img/bg_commerce.png';
                $scope.sourceImgBgMini = 'img/bg_commerce_560.png';
                $scope.phraseConsulte = 'Punk';
                $scope.nomConsulte = 'Estelle Boyer, Directrice Commerciale';
                $scope.phraseConsultant = 'Choucroute garnie c’est la vie !';
                $scope.expert = 'L’EXPERTE';
                $scope.apprenti = 'L’APPRENTI';
                $scope.nomConsultant = 'Benjamin Lacroix, Consultant';
                $scope.rond1 = 'img/benjamin_lacroix.png';
                $scope.quote1 = $sce.trustAsHtml('Des clients, des Xebians, des missions : comment concilier tout ça ?! Ça commence par un tour d’horizon des missions/prospects en cours, puis des Xebians en devenir : comment répondre à la demande de ce client ou de ce Xebian ? Trop tard, nous avons rendez-vous pour déjeuner avec un client important. Retour au bureau et un nouveau contrat décroché ! Bon, mais qui allons-nous placer dessus ? Bilan avec l’équipe, l’avancement des tâches, réunion marketing pour la XebiCon et ça enchaine avec l’analyse des indicateurs de pilotage… Ouhaou j’ai la tête retournée, c’est trop, je retourne coder !');
                $scope.role_plus = 'La gymnastique durant la réunion commerciale pour placer le bon collaborateur sur la bonne mission au bon moment.';
                $scope.role_moins = 'Le micro-management sur les actions de la semaine de chaque commercial.';
                $scope.gratifiante = 'Le retour positif des clients après qu’une équipe de Xebians soit intervenue sur une mission.';
                $scope.ingrate = 'Le recouvrement d’une facture impayée.';
                $scope.ccl = 'En conclusion : J’ai les oreilles qui fument, je vais échanger mon costume contre mon Mac et retourner coder.';
                $scope.video = 'https://www.youtube.com/embed/Njkw4eAn8lc';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/1Zy1tfG&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=http://bit.ly/1Zy1tfG";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://www.youtube.com/embed/Njkw4eAn8lc";
                $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://www.youtube.com/embed/Njkw4eAn8lc";
                $scope.blog_article = "http://bit.ly/1Zy1tfG";
                $scope.texte_MatchReturn = "VIE MA VIE DE DEV. ANDROID";
                $scope.lien_matchRetour = "#/retour?id=Dev. Android";
                $scope.hasBackEpisode = true;
                $scope.accessible = true;
             }

            else if (id == 'DAF') {
                 $scope.name = 'nadia';
                 $scope.sourceImgBg = 'img/bg_daf.png';
                 $scope.sourceImgBgMini = 'img/bg_daf_560.png';
                 $scope.phraseConsulte = 'Pas de justif pas de fric !';
                 $scope.nomConsulte = 'Nadia Sidhoum, DAF';
                 $scope.phraseConsultant = 'DAFicionado !';
                 $scope.expert = 'L’EXPERTE';
                 $scope.apprenti = 'L’APPRENTI';
                 $scope.nomConsultant = 'Clément Heliou, Consultant';
                 $scope.rond1 = 'img/clement_heliou.png';
                 $scope.quote1 = $sce.trustAsHtml('Le quotidien de DAF, c’est un savant mélange entre financier, juridique et social. C’est être un organe vital de l’entreprise qui s’assure de son équilibre et de son bien être. Jamais je n’aurais pu imaginer qu’il faille assurer autant de tâches avec une marge d’erreur minime si ce n’est inexistante.');
                 $scope.role_plus = 'Le côté central et indispensable du poste.';
                 $scope.role_moins = 'Subir les joies des lois, des taxes, etc. ; je n’aurais jamais imaginé à quel point il est dur de faire vivre une entreprise.';
                 $scope.gratifiante = 'Etre un organe vital de l’entreprise !';
                 $scope.ingrate = 'Préparer des documents complexes et sans forcément en voir l’intérêt (ex: fiches des produits nettoyants utilisés)';
                 $scope.ccl = 'En conclusion : Bref, je crois qu’on peut le dire ; être DAF, c’est punk !'
                 $scope.video = 'https://www.youtube.com/embed/os54MbZA_18';
                 $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://bit.ly/XebianVMV-DAF&hashtags=XebianVMV&via=XebiaFr";
                 $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/XebianVMV-DAF";
                 $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/XebianVMV-DAF";
                 $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/XebianVMV-DAF";
                 $scope.blog_article = "http://blog.xebia.fr/2015/09/29/vis-ma-vie-episode-6-clement-daf-dun-jour";
                 $scope.texte_MatchReturn = "VIE MA VIE DE TECHNICAL LEADER";
                 $scope.lien_matchRetour = "#/retour?id=Technical Leader";
                 $scope.hasBackEpisode = true;
             }




            else{
                $location.path('/').replace();
            }
        };

        $scope.changeData(id);

        $scope.$on('changeId', function($event, id) {
            $scope.changeData(id);
        });

        $scope.gotoConcept = function() {

            $location.hash('concept');
            $anchorScroll();
        };








    }]);

