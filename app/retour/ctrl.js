'use strict';

angular.module('app')


    .controller('RetourCtrl', ['$scope', '$location', '$sce', function ($scope, $location, $sce) {

        var id = $location.search().id || 1;

        $scope.changeData2 = function(id) {


            if (id == 'Developpeur') {
                $scope.id = 'Developpeur';
                $scope.name = 'laetitia';
                $scope.sourceImgBg = 'img/bg_recrutement_matchretour.png';
                $scope.sourceImgBgMini = 'img/bg_recrutement_560_matchretour.png';
                $scope.phraseConsultant = 'L’arroseur arrosé !';
                $scope.nomConsultant = 'Laetitia Janné, Directrice Recrutement';
                $scope.phraseConsulte = 'Comment ça un dev. «ça reste devant son écran toute la journée sans parler» ? ;)';
                $scope.expert = 'L’EXPERT';
                $scope.apprenti = 'L’APPRENTIE';
                $scope.nomConsulte = 'Bastien Bonnet, Consultant';
                $scope.rond1 = 'img/laetitia_janne.png';
                $scope.nom12 = "Laetitia Janné, Directrice Recrutement"
                $scope.quote1 = $sce.trustAsHtml('9 heures, je suis prête pour devenir, à mon tour, une Développeuse made in Xebia. Je rejoins mes collègues dans l’entité technique d’un de nos clients, située au cœur du quartier d’affaires de la Défense (ça change de mon environnement quotidien du boulevard Haussmann :) ). J’ai donc accompagné pendant une journée trois Xebians, dont Bastien, sur un projet Data à destination du Marketing de la société. Ces trois Xebians sont chargés de recueillir et d’analyser les données provenant de leur site internet, de les modéliser, puis de les faire « parler » afin que le Marketing puisse les exploiter. </br></br>Ma journée a commencé sur les chapeaux de roues ! Je suis arrivée au sein d’un pôle Big Data où j’ai commencé par faire du Pair Programming avec un Data Engineer Xebia. Celui-ci est en charge de recueillir les données brutes et de les transformer pour les rendre davantage lisibles. Pendant une matinée, nous avons pu revoir le code du mécanisme de nettoyage de données réalisé en Python.</br></br>MIDI ! Le cerveau en compote, il était temps pour moi (et pour mon professeur) de nous restaurer !  De retour au siège en début d’après-midi,  j’occupe le poste de Data Scientist. Ce Xebian a pour mission de récupérer les données nettoyées du Data Engineer afin de les modéliser pour que le Marketing puisse les comprendre et les exploiter par la suite. Nous avons donc réalisé ensemble des graphiques afin d’en tirer de la valeur. Pour cela, il s’est basé sur les sets de données fournis par le Data Engineer.</br></br>STOP ! Il me faut un THÉ ! Ça y est j’ai repris des forces, je vais pouvoir me confronter à Bastien, le dernier de la chaîne ;). Il fait du Devops principalement (industrialisation des processus de déploiement des algorithmes de modélisation). Il a pu me montrer comment il exposait les données issues des traitements du Data Engineer et du Data Scientist en développant une couche de services qu’il déploie jusqu’en production. Finalement, ce que j’ai apprécié dans cette expérience, c’est de voir la complémentarité de leurs activités et leur étroite collaboration. Au-delà de cette expérience enrichissante, techniquement parlant, j’ai pu observer les valeurs de qualité et de partage véhiculées par nos Xebians chez ce client. Merci :)');
                $scope.ccl = 'En conclusion : Expérience enrichissante, merci :)'
                $scope.video = 'https://www.youtube.com/embed/KhP_tiaKmDc';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://bit.ly/VMV-Dev&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/VMV-Dev";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/VMV-Dev";
                $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/VMV-Dev";
                $scope.blog_article = "http://blog.xebia.fr/2015/09/15/vis-ma-vie-episode-4-jeremy-directeur-recrutement-dun-jour";
                $scope.texte_MatchReturn = "VIS MA VIE DE DIRECTRICE RECRUTEMENT"
                $scope.lien_matchRetour = "#/details?id=Dir. Recrutement";

            }


            //else if (id == 'Coach Agile') {
            //    $scope.id = 'Coach Agile';
            //    $scope.name = 'luc';
            //    $scope.sourceImgBg = 'img/bg_ceo_matchretour.png';
            //    $scope.sourceImgBgMini = 'img/bg_ceo_560_matchretour.png';
            //    $scope.phraseConsulte = 'Viens mettre les mains dans les post-its :)';
            //    $scope.nomConsulte = 'Laurène Vol, Consultante ';
            //    $scope.expert = 'L’EXPERTE';
            //    $scope.apprenti = 'L’APPRENTI';
            //    $scope.phraseConsultant = 'Amélioration continue !';
            //    $scope.nomConsultant = 'Luc Legardeur, Président';
            //    $scope.rond1 = 'img/luc_legardeur.png';
            //    $scope.nom12 = "Luc Legardeur, Président"
            //    $scope.quote1 = $sce.trustAsHtml('En faisant le match retour du Vis ma Vie, en tant que Coach Agile, auprès de Laurène, je ne m’imaginais pas du tout que cette expérience allait se révéler si étonnante, tant ma vision de leur métier était bien loin de la réalité. <br/><br/>En effet, cette journée allait être ponctuée de contextes tout aussi intéressants les uns que les autres. Laurène a en charge 80 personnes reparties sur 4 projets dans le cadre d’une transformation agile globale d’un grand compte du CAC40.  Elle fait partie d’un centre d’excellence agile transverse. Son planning est assez chargé et elle passe d’une réunion à une autre, d’un contexte projet à un autre et cela plusieurs fois par jour. Avec elle j’ai pu assister à deux séances de coaching très différentes tant la maturité des deux équipes impactées était hétéroclite. J’ai pu m’apercevoir que le métier de Laurène consistait à donner des conseils extrêmement opérationnels, bien loin des postures fumeuses des ayatollahs de la méthodologie telles qu’on en rencontre parfois dans ce métier. Son accompagnement délivre immédiatement de la valeur aux équipes. Malgré son jeune âge, Laurène fait preuve d’une maturité et d’une expérience assez exceptionnelles. J’ai tout simplement été bluffé par le niveau d’écoute de l’équipe et des managers vis à vis des conseils prodigués par Laurène. Elle vaut souvent parole d’évangile tout en facilitant le débat d’idées. J’ai également été frappé par sa capacité à changer de contexte fonctionnel et à chaque fois, à connaître assez précisément ce dont il s’agit. <br/><br/>Au delà des aspects très concrets, Laurène doit également rendre des comptes et évaluer la progression des équipes sur la voie de l’agilité au travers d’une grille constituée de critères très précis et alimentée de manière hebdomadaire. Cet exercice délicat requiert de fournir des faits susceptibles d’étayer la notation. Cette partie de pilotage permet de justifier les investissements sur les projets en coaching agile. Laurène maitrise là encore parfaitement le processus et chaque note est très bien argumentée. <br/><br/> Pour conclure, je dirais que cette immersion a été bénéfique pour moi. Comme le disent les homologues de Laurène, elle est la meilleure « VRP » de l’équipe agile. Moi j’ai adoré et finalement, il y a quelques années, je me serais bien vu dans ce métier !!!');
            //    $scope.ccl = 'En conclusion : Merci Laurène pour ce partage !'
            //    $scope.video = 'https://www.youtube.com/embed/0quGIP7VBdY';
            //    $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/VMV-CoachAgile&hashtags=XebianVMV&via=XebiaFr";
            //    $scope.video_google = "https://plus.google.com/share?url=http://bit.ly/VMV-CoachAgile";
            //    $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=http://bit.ly/VMV-CoachAgile";
            //    $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/VMV-CoachAgile";
            //    $scope.blog_article = "http://blog.xebia.fr/2015/08/25/vis-ma-vie-episode-1-laurene-prend-les-cles-de-xebia/";
            //    $scope.texte_MatchReturn = "VIS MA VIE DE PRÉSIDENT";
            //    $scope.lien_matchRetour = "#/details?id=Président";
            //}

            //else if (id == 'Technical Leader') {
            //    $scope.id = 'Technical Leader';
            //    $scope.name = 'nadia';
            //    $scope.sourceImgBg = 'img/bg_daf_matchretour.png';
            //    $scope.sourceImgBgMini = 'img/bg_daf_560_matchretour.png';
            //    $scope.phraseConsultant = 'Ich been berlin ?';
            //    $scope.nomConsultant = 'Nadia Sidhoum, DAF';
            //    $scope.phraseConsulte = 'A vos marques, prêts ? Orchestrez !';
            //    $scope.expert = 'L’EXPERT';
            //    $scope.apprenti = 'L’APPRENTIE';
            //    $scope.nomConsulte = 'Clément Heliou, Consultant';
            //    $scope.rond1 = 'img/nadia_sidhoum.png';
            //    $scope.nom12 = "Nadia Sidhoum, DAF"
            //    $scope.quote1 = $sce.trustAsHtml('Avant cette expérience, pour moi le métier de développeur se résumait à un consultant avachi sur sa chaise devant un écran et tapant des /// ping pong / sans discontinuer. Un peu comme la pub free… </br></br> Mais ça c’était avant ! Au risque de ne pas paraître très originale, mon vis ma vie match retour m’a transporté à des années lumière de ma vision du métier de développeur.</br></br> Tout d’abord, Clément évolue dans un environnement très stimulant, surtout pour un DAF : une des salles des marchés de la SGCIB (banque d’investissement de la Société Générale), l’argent doit aller et venir… surtout  venir . Il occupe un poste de technical leader sur un projet très challengeant : la mise en place d’un orchestrateur de RFS (Request for stream). Il s’agit d’une plateforme de produits financiers destinée aux clients de la SGCIB dans le domaine des matières premières (métaux de base, métaux précieux, produits agricoles).</br></br> Contrairement à ce que je pensais ; le métier de développeur comporte un aspect humain très important, c’est un métier très collaboratif. L’équipe de clément coopère avec 6 autres équipes de différents services, fait partie d’une communauté open source en interne à la Société générale (on parle d’inner-sourcing), reçoit les retours et infos des équipes utilisatrices de l’outil, des traders… Malgré son jeune âge, Clément m’a paru être une force tranquille. Il anime les dailys (points quotidiens pour visualiser les tâches de chacun et les blocages éventuels) et les réunions avec son équipe et d’autres interlocuteurs (dont la rétrospective, point bimensuel pour améliorer continuellement l’application et la vie de l’équipe).</br></br> Le tout avec une facilité déconcertante. Il était très à l’aise ! eIl est très diplomate et cherche toujours des solutions pour contourner les obstacles. Il apporte une dynamique positive au projet. Clément ! Tu m’as bluffée ;)');
            //    $scope.ccl = 'En conclusion : Pour moi c’est un chef d’orchestre technique car son leitmotiv reste avant tout la technique.'
            //    $scope.video = 'https://www.youtube.com/embed/4KEhbzZUHQM';
            //    $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://bit.ly/VMV-TechLeader&hashtags=XebianVMV&via=XebiaFr";
            //    $scope.video_google = "https://plus.google.com/share?url=https://bbit.ly/VMV-TechLeader";
            //    $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/VMV-TechLeader";
            //    $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/VMV-TechLeader";
            //    $scope.blog_article = "http://blog.xebia.fr/2015/09/29/vis-ma-vie-episode-6-clement-daf-dun-jour";
            //    $scope.texte_MatchReturn = "VIS MA VIE DE DAF"
            //    $scope.lien_matchRetour = "#/details?id=DAF";
            //}

            //else if (id == 'Data Scientist') {
            //    $scope.id = 'Data Scientist';
            //    $scope.name = 'anne';
            //    $scope.sourceImgBg = 'img/bg_marketing_matchretour.png';
            //    $scope.sourceImgBgMini = 'img/bg_marketing_560_matchretour.png';
            //    $scope.phraseConsultant = 'Cool, on va faire de superbes campagnes marketing !';
            //    $scope.nomConsultant = 'Anne Beauchart, Directrice Marketing';
            //    $scope.phraseConsulte = ' !';
            //    $scope.expert = 'L’EXPERTE';
            //    $scope.apprenti = 'L’APPRENTIE';
            //    $scope.nomConsulte = 'Sameh Ben Fredj, Consultante';
            //    $scope.rond1 = 'img/anne_beauchart.png';
            //    $scope.nom12 = "Anne Beauchart, Directrice Marketing"
            //    $scope.quote1 = $sce.trustAsHtml('Et voilà, c’est le jour J, je deviens Data Scientist pour une journée aux cotés de Sameh. Avec un peu d’appréhension mais surtout beaucoup d’impatience, me voici dans les locaux de l’un de nos clients pour un projet studio. Place à une mission Data, où tous les flux de données de notre client doivent être agrégés pour acquérir une base de données lisible, pertinente et exploitable en moins de temps possible.</br> J’y retrouve aussi d’autres Xebians, Sylvain et Matthieu, Data Engineers et Ludovic, Scrum Master, sur ce projet. J’ai ainsi pu découvrir 3 métiers en 1 seule journée (enfin quelques bribes évidemment) !</br> Début de la journée, gros rush pour tout le monde, car dans 1h c’est la démo ! Pas de bol,  le “célèbre” effet démo (où rien ne marche comme prévu…) est de la partie. No stress, Sylvain et Sameh assurent le show et présentent les fonctionnalités développées durant le sprint ainsi que les premiers résultats d’exploration des données. Je suis impressionnée par la proximité des équipes métiers et des développeurs, et la bienvaillance qui y règne.  C’est ensemble que l’on se pose les bonnes questions. Ces cérémonies agiles sont vraiment plus que bénéfiques pour communiquer entre les équipes.</br> On enchaîne avec la rétro du sprint puis le nouveau sprint planning. Ceci me donne plein d’idées à implémenter au service market’ : MERCI !! Durant cette journée, nous avons beaucoup parler de documentation, par les Dév mais aussi par le Métier pour les Dév (un point insoupçonné pour moi !).</br> Bon et puis ce fut mon tour de jouer avec du code et des données ! Allez hop, c’est parti, Sylvain me présente son quotidien. Il a sélectionné les outils les plus compréhensibles pour une “non dév”, avec Cloudera Manager et Jenkins. Il a aussi pu me montrer comment faire des tests unitaires, c’est un des concepts largement traités dans les TechTrends, les billets de blog que nous relisons au marketing… mais là, c’était l’occasion de les voir en pratique.</br> C’est ensuite autour de Sameh, avec une main de maître de me présenter Jupyter, Python, les documentations en sa possession pour ensuite passer à la pratique. Avec un peu de « from » et de « where », une alternance de « cpt_client » et de « réf_cpt_date », beaucoup de logique et une excellente connaissance des données, nous voilà avec des tableaux de données exploitables directement pour une campagne marketing ! J’AIME !!!</br> À chacun son expertise, mais l’association de toutes celles-ci font de ce projet studio une belle démonstration du savoir-faire de Xebia !');
            //    $scope.ccl = 'En conclusion : Vous êtes au top les guys. Vous permettez à notre client de faire des superbes campagnes marketing !'
            //    $scope.video = 'https://www.youtube.com/embed/X-OI1IZ-9G0';
            //    $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://bit.ly/VMV-DataScientist&hashtags=XebianVMV&via=XebiaFr";
            //    $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/VMV-DataScientist";
            //    $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/VMV-DataScientist";
            //    $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/VMV-DataScientist";
            //    $scope.blog_article = "http://blog.xebia.fr/2015/09/29/vis-ma-vie-episode-6-clement-daf-dun-jour";
            //    $scope.texte_MatchReturn = "VIS MA VIE DE DIR. MARKETING"
            //    $scope.lien_matchRetour = "#/details?id=Dir. Marketing";
            //}

            else if (id == 'Dev. Android') {
               $scope.id = 'Dev. Android';
               $scope.name = 'estelle';
               $scope.sourceImgBg = 'img/bg_commerce_matchretour.png';
               $scope.sourceImgBgMini = 'img/bg_commerce_560_matchretour.png';
               $scope.phraseConsultant = 'Si je copie-colle c’est bon ?';
               $scope.nomConsultant = 'Estelle Boyer, Directrice Commerciale';
               $scope.phraseConsulte = 'Aujourd’hui, code au menu !';
               $scope.expert = 'L’EXPERT';
               $scope.apprenti = 'L’APPRENTIE';
               $scope.nomConsulte = 'Benjamin Lacroix, Consultant';
               $scope.rond1 = 'img/estelle_boyer.png';
               $scope.nom12 = "Estelle Boyer, Directrice Commerciale"
               $scope.quote1 = $sce.trustAsHtml('Le jour du Vis ma Vie de Dev est arrivé… C’est donc avec plaisir que je me suis rendue dans les locaux d’une start-up devenue une célèbre vitrine de la rencontre en ligne, j’ai nommé Meetic :) ! Le temps d’une journée, j’ai accompagné Benjamin Lacroix en mission, pour devenir à mon tour une développeuse Android dans un environnement agile.</br></br> Je m’y suis rendue de bonne heure, curieuse de découvrir les coulisses de cette start-up réputée et de réaliser des cérémonies agiles dans une équipe mobile. Mais j’étais surtout impatiente de pouvoir enfin vivre la vie d’un consultant Xebia ! Exerçant dans le secteur de l’IT depuis presque 17 ans, je me suis forcément imaginée la vie d’un consultant. Cette journée a été l’occasion de confronter l’image que je m’en faisais avec la réalité... C’est donc avec joie que j’ai pu confirmer qu’un consultant Xebia attache autant d’importance à son intégration, ses qualités relationnelles qu’à ses compétences de développeur. En effet, à peine arrivée, Benjamin m’a surprise par son intégration dans l’équipe après seulement un mois passé chez ce client. Plus les heures s’écoulaient plus j’ai pu sentir une forte cohésion tant dans l’équipe que dans leur niveau de compétences techniques.</br></br> Tout au long de cette journée, j’ai assisté à diverses cérémonies agiles avec le célèbre daily meeting, la démo et, bien sûr, la rétro. C’est au cours de ces réunions que j’ai validé mon opinion sur le métier de consultant Xebia : ils ont su créer une vraie équipe avec une réelle ambition collective, une capacité d’écoute et de remise en question.');
               $scope.ccl = 'En conclusion : Encore merci Benjamin pour cette expérience, je la referais avec grand plaisir !'
               $scope.video = 'https://www.youtube.com/embed/dVWi56MfWXw';
               $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://bit.ly/VMV-DevAndroid&hashtags=XebianVMV&via=XebiaFr";
               $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/VMV-DevAndroid";
               $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/VMV-DevAndroid";
               $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/VMV-DevAndroid";
               $scope.blog_article = "http://blog.xebia.fr/2015/10/13/vis-ma-vie-episode-8-benjamin-directeur-commercial-dun-jour/";
               $scope.texte_MatchReturn = "VIS MA VIE DE DIRECTRICE COMMERCIALE"
               $scope.lien_matchRetour = "#/details?id=Dir. Commerciale";
            }




            else{
                $location.path('/').replace();
            }
        };

        $scope.changeData2(id);

        $scope.$on('changeId', function($event, id) {
            $scope.changeData2(id);
        });

        $scope.gotoConcept = function() {

            $location.hash('concept');
            $anchorScroll();
        };






    }]);


