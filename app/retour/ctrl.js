'use strict';

angular.module('app')


    .controller('RetourCtrl', ['$scope', '$location', '$sce', function ($scope, $location, $sce) {

        var id = $location.search().id || 1;

        $scope.changeData2 = function(id) {


            if (id == 'Coach') {
                $scope.id = 'Coach';
                $scope.name = 'luc';
                $scope.sourceImgBg = 'img/bg_ceo_matchretour.png';
                $scope.sourceImgBgMini = 'img/bg_ceo_560_matchretour.png';
                $scope.phraseConsulte = 'Tiens prends les clefs et amuse toi bien !';
                $scope.nomConsulte = 'Laurène Vol, Consultante ';
                $scope.expert = 'L’EXPERTE';
                $scope.apprenti = 'L’APPRENTI';
                $scope.phraseConsultant = 'C’est qui le patron ???';
                $scope.nomConsultant = 'Luc Legardeur, Président';
                $scope.rond1 = 'img/luc_legardeur.png';
                $scope.nom12 = "Luc Legardeur, Président"
                $scope.quote1 = $sce.trustAsHtml('En faisant le match retour du Vis ma Vie, en tant que Coach Agile, auprès de Laurène, je ne m’imaginais pas du tout que cette expérience allait se révéler si étonnante, tant ma vision de leur métier était bien loin de la réalité. <br/><br/>En effet, cette journée allait être ponctuée de contextes tout aussi intéressants les uns que les autres. Laurène a en charge 80 personnes reparties sur 4 projets dans le cadre d’une transformation agile globale d’un grand compte du CAC40.  Elle fait partie d’un centre d’excellence agile transverse. Son planning est assez chargé et elle passe d’une réunion à une autre, d’un contexte projet à un autre et cela plusieurs fois par jour. Avec elle j’ai pu assister à deux séances de coaching très différentes tant la maturité des deux équipes impactées était hétéroclite. J’ai pu m’apercevoir que le métier de Laurène consistait à donner des conseils extrêmement opérationnels, bien loin des postures fumeuses des ayatollahs de la méthodologie telles qu’on en rencontre parfois dans ce métier. Son accompagnement délivre immédiatement de la valeur aux équipes. Malgré son jeune âge, Laurène fait preuve d’une maturité et d’une expérience assez exceptionnelles. J’ai tout simplement été bluffé par le niveau d’écoute de l’équipe et des managers vis à vis des conseils prodigués par Laurène. Elle vaut souvent parole d’évangile tout en facilitant le débat d’idées. J’ai également été frappé par sa capacité à changer de contexte fonctionnel et à chaque fois, à connaître assez précisément ce dont il s’agit. <br/><br/>Au delà des aspects très concrets, Laurène doit également rendre des comptes et évaluer la progression des équipes sur la voie de l’agilité au travers d’une grille constituée de critères très précis et alimentée de manière hebdomadaire. Cet exercice délicat requiert de fournir des faits susceptibles d’étayer la notation. Cette partie de pilotage permet de justifier les investissements sur les projets en coaching agile. Laurène maitrise là encore parfaitement le processus et chaque note est très bien argumentée. <br/><br/> Pour conclure, je dirais que cette immersion a été bénéfique pour moi. Comme le disent les homologues de Laurène, elle est la meilleure « VRP » de l’équipe agile. Moi j’ai adoré et finalement, il y a quelques années, je me serais bien vu dans ce métier !!! <br/><br/>Merci Laurène pour ce partage.');
                $scope.ccl = 'En conclusion : C’est pas moi le patron, et c’est très bien comme ça !'
                $scope.video = 'https://www.youtube.com/embed/KsscgrEtfdQ?rel=0';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=http://bit.ly/VMV-President-Xebia&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=http://bit.ly/VMV-President-Xebia";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=http://bit.ly/VMV-President-Xebia";
                $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/VMV-President-Xebia";
                $scope.blog_article = "http://blog.xebia.fr/2015/08/25/vis-ma-vie-episode-1-laurene-prend-les-cles-de-xebia/";
                $scope.texte_MatchReturn = "VIS MA VIE DE PRÉSIDENT";
                $scope.lien_matchRetour = "#/details?id=Président";
            }

            else if (id == 'Lead Tech') {
                $scope.id = 'Lead Tech';
                $scope.name = 'nadia';
                $scope.sourceImgBg = 'img/bg_daf_matchretour.png';
                $scope.sourceImgBgMini = 'img/bg_daf_560_matchretour.png';
                $scope.phraseConsultant = 'Pas de justif pas de fric !';
                $scope.nomConsultant = 'Nadia Sidhoum, DAF';
                $scope.phraseConsulte = 'DAFicionado !';
                $scope.expert = 'L’EXPERT';
                $scope.apprenti = 'L’APPRENTIE';
                $scope.nomConsulte = 'Clément Heliou, Consultant';
                $scope.rond1 = 'img/nadia_sidhoum.png';
                $scope.nom12 = "Nadia Sidhoum, DAF"
                $scope.quote1 = $sce.trustAsHtml('En faisant le match retour du Vis ma Vie, en tant que Coach Agile, auprès de Laurène, je ne m’imaginais pas du tout que cette expérience allait se révéler si étonnante, tant ma vision de leur métier était bien loin de la réalité. <br/><br/>En effet, cette journée allait être ponctuée de contextes tout aussi intéressants les uns que les autres. Laurène a en charge 80 personnes reparties sur 4 projets dans le cadre d’une transformation agile globale d’un grand compte du CAC40.  Elle fait partie d’un centre d’excellence agile transverse. Son planning est assez chargé et elle passe d’une réunion à une autre, d’un contexte projet à un autre et cela plusieurs fois par jour. Avec elle j’ai pu assister à deux séances de coaching très différentes tant la maturité des deux équipes impactées était hétéroclite. J’ai pu m’apercevoir que le métier de Laurène consistait à donner des conseils extrêmement opérationnels, bien loin des postures fumeuses des ayatollahs de la méthodologie telles qu’on en rencontre parfois dans ce métier. Son accompagnement délivre immédiatement de la valeur aux équipes. Malgré son jeune âge, Laurène fait preuve d’une maturité et d’une expérience assez exceptionnelles. J’ai tout simplement été bluffé par le niveau d’écoute de l’équipe et des managers vis à vis des conseils prodigués par Laurène. Elle vaut souvent parole d’évangile tout en facilitant le débat d’idées. J’ai également été frappé par sa capacité à changer de contexte fonctionnel et à chaque fois, à connaître assez précisément ce dont il s’agit. <br/><br/>Au delà des aspects très concrets, Laurène doit également rendre des comptes et évaluer la progression des équipes sur la voie de l’agilité au travers d’une grille constituée de critères très précis et alimentée de manière hebdomadaire. Cet exercice délicat requiert de fournir des faits susceptibles d’étayer la notation. Cette partie de pilotage permet de justifier les investissements sur les projets en coaching agile. Laurène maitrise là encore parfaitement le processus et chaque note est très bien argumentée. <br/><br/> Pour conclure, je dirais que cette immersion a été bénéfique pour moi. Comme le disent les homologues de Laurène, elle est la meilleure « VRP » de l’équipe agile. Moi j’ai adoré et finalement, il y a quelques années, je me serais bien vu dans ce métier !!! <br/><br/>Merci Laurène pour ce partage.');
                $scope.ccl = 'En conclusion : Bref, je crois qu’on peut le dire ; être DAF, c’est punk !'
                $scope.video = 'https://www.youtube.com/embed/os54MbZA_18';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://bit.ly/XebianVMV-DAF&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/XebianVMV-DAF";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/XebianVMV-DAF";
                $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/XebianVMV-DAF";
                $scope.blog_article = "http://blog.xebia.fr/2015/09/29/vis-ma-vie-episode-6-clement-daf-dun-jour";
                $scope.texte_MatchReturn = "VIS MA VIE DE DAF"
                $scope.lien_matchRetour = "#/details?id=DAF";
            }

            else if (id == 'Data Scientist') {
                $scope.id = 'Data Scientist';
                $scope.name = 'anne';
                $scope.sourceImgBg = 'img/bg_marketing_matchretour.png';
                $scope.sourceImgBgMini = 'img/bg_marketing_560_matchretour.png';
                $scope.phraseConsultant = 'Je vois de la Data partout partout partout';
                $scope.nomConsultant = 'Anne Beauchart, Directrice Marketing';
                $scope.phraseConsulte = ' !';
                $scope.expert = 'L’EXPERTE';
                $scope.apprenti = 'L’APPRENTIE';
                $scope.nomConsulte = 'Sameh Ben Fredj, Consultante';
                $scope.rond1 = 'img/anne_beauchart.png';
                $scope.nom12 = "Anne Beauchart, Directrice Marketing"
                $scope.quote1 = $sce.trustAsHtml('En faisant le match retour du Vis ma Vie, en tant que Coach Agile, auprès de Laurène, je ne m’imaginais pas du tout que cette expérience allait se révéler si étonnante, tant ma vision de leur métier était bien loin de la réalité. <br/><br/>En effet, cette journée allait être ponctuée de contextes tout aussi intéressants les uns que les autres. Laurène a en charge 80 personnes reparties sur 4 projets dans le cadre d’une transformation agile globale d’un grand compte du CAC40.  Elle fait partie d’un centre d’excellence agile transverse. Son planning est assez chargé et elle passe d’une réunion à une autre, d’un contexte projet à un autre et cela plusieurs fois par jour. Avec elle j’ai pu assister à deux séances de coaching très différentes tant la maturité des deux équipes impactées était hétéroclite. J’ai pu m’apercevoir que le métier de Laurène consistait à donner des conseils extrêmement opérationnels, bien loin des postures fumeuses des ayatollahs de la méthodologie telles qu’on en rencontre parfois dans ce métier. Son accompagnement délivre immédiatement de la valeur aux équipes. Malgré son jeune âge, Laurène fait preuve d’une maturité et d’une expérience assez exceptionnelles. J’ai tout simplement été bluffé par le niveau d’écoute de l’équipe et des managers vis à vis des conseils prodigués par Laurène. Elle vaut souvent parole d’évangile tout en facilitant le débat d’idées. J’ai également été frappé par sa capacité à changer de contexte fonctionnel et à chaque fois, à connaître assez précisément ce dont il s’agit. <br/><br/>Au delà des aspects très concrets, Laurène doit également rendre des comptes et évaluer la progression des équipes sur la voie de l’agilité au travers d’une grille constituée de critères très précis et alimentée de manière hebdomadaire. Cet exercice délicat requiert de fournir des faits susceptibles d’étayer la notation. Cette partie de pilotage permet de justifier les investissements sur les projets en coaching agile. Laurène maitrise là encore parfaitement le processus et chaque note est très bien argumentée. <br/><br/> Pour conclure, je dirais que cette immersion a été bénéfique pour moi. Comme le disent les homologues de Laurène, elle est la meilleure « VRP » de l’équipe agile. Moi j’ai adoré et finalement, il y a quelques années, je me serais bien vu dans ce métier !!! <br/><br/>Merci Laurène pour ce partage.');
                $scope.ccl = 'En conclusion : Bref, je crois qu’on peut le dire ; être DAF, c’est punk !'
                $scope.video = 'https://www.youtube.com/embed/os54MbZA_18';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://bit.ly/XebianVMV-DAF&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/XebianVMV-DAF";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/XebianVMV-DAF";
                $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/XebianVMV-DAF";
                $scope.blog_article = "http://blog.xebia.fr/2015/09/29/vis-ma-vie-episode-6-clement-daf-dun-jour";
                $scope.texte_MatchReturn = "VIS MA VIE DE DIR. MARKETING"
                $scope.lien_matchRetour = "#/details?id=Dir. Marketing";
            }

            else if (id == 'Dev. Front') {
                $scope.id = 'Dev. Front';
                $scope.name = 'estelle';
                $scope.sourceImgBg = 'img/bg_commerce_matchretour.png';
                $scope.sourceImgBgMini = 'img/bg_commerce_560_matchretour.png';
                $scope.phraseConsultant = 'De la data, de la data, de la data partout !!!';
                $scope.nomConsultant = 'Estelle Boyer, Directrice Commerciale';
                $scope.phraseConsulte = ' !';
                $scope.expert = 'L’EXPERT';
                $scope.apprenti = 'L’APPRENTIE';
                $scope.nomConsulte = 'Benjamin Lacroix, Consultant';
                $scope.rond1 = 'img/estelle_boyer.png';
                $scope.nom12 = "Estelle Boyer, Directrice Commerciale"
                $scope.quote1 = $sce.trustAsHtml('En faisant le match retour du Vis ma Vie, en tant que Coach Agile, auprès de Laurène, je ne m’imaginais pas du tout que cette expérience allait se révéler si étonnante, tant ma vision de leur métier était bien loin de la réalité. <br/><br/>En effet, cette journée allait être ponctuée de contextes tout aussi intéressants les uns que les autres. Laurène a en charge 80 personnes reparties sur 4 projets dans le cadre d’une transformation agile globale d’un grand compte du CAC40.  Elle fait partie d’un centre d’excellence agile transverse. Son planning est assez chargé et elle passe d’une réunion à une autre, d’un contexte projet à un autre et cela plusieurs fois par jour. Avec elle j’ai pu assister à deux séances de coaching très différentes tant la maturité des deux équipes impactées était hétéroclite. J’ai pu m’apercevoir que le métier de Laurène consistait à donner des conseils extrêmement opérationnels, bien loin des postures fumeuses des ayatollahs de la méthodologie telles qu’on en rencontre parfois dans ce métier. Son accompagnement délivre immédiatement de la valeur aux équipes. Malgré son jeune âge, Laurène fait preuve d’une maturité et d’une expérience assez exceptionnelles. J’ai tout simplement été bluffé par le niveau d’écoute de l’équipe et des managers vis à vis des conseils prodigués par Laurène. Elle vaut souvent parole d’évangile tout en facilitant le débat d’idées. J’ai également été frappé par sa capacité à changer de contexte fonctionnel et à chaque fois, à connaître assez précisément ce dont il s’agit. <br/><br/>Au delà des aspects très concrets, Laurène doit également rendre des comptes et évaluer la progression des équipes sur la voie de l’agilité au travers d’une grille constituée de critères très précis et alimentée de manière hebdomadaire. Cet exercice délicat requiert de fournir des faits susceptibles d’étayer la notation. Cette partie de pilotage permet de justifier les investissements sur les projets en coaching agile. Laurène maitrise là encore parfaitement le processus et chaque note est très bien argumentée. <br/><br/> Pour conclure, je dirais que cette immersion a été bénéfique pour moi. Comme le disent les homologues de Laurène, elle est la meilleure « VRP » de l’équipe agile. Moi j’ai adoré et finalement, il y a quelques années, je me serais bien vu dans ce métier !!! <br/><br/>Merci Laurène pour ce partage.');
                $scope.ccl = 'En conclusion : Bref, je crois qu’on peut le dire ; être DAF, c’est punk !'
                $scope.video = 'https://www.youtube.com/embed/os54MbZA_18';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://bit.ly/XebianVMV-DAF&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/XebianVMV-DAF";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/XebianVMV-DAF";
                $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/XebianVMV-DAF";
                $scope.blog_article = "http://blog.xebia.fr/2015/09/29/vis-ma-vie-episode-6-clement-daf-dun-jour";
                $scope.texte_MatchReturn = "VIS MA VIE DE DIRECTRICE COMMERCIALE"
                $scope.lien_matchRetour = "#/details?id=Dir. Commerciale";
            }

            else if (id == 'Dev. Back') {
                $scope.id = 'Dev. Back';
                $scope.name = 'laetitia';
                $scope.sourceImgBg = 'img/bg_recrutement_matchretour.png';
                $scope.sourceImgBgMini = 'img/bg_recrutement_560_matchretour.png';
                $scope.phraseConsultant = 'De la data, de la data, de la data partout !!!';
                $scope.nomConsultant = 'Laetitia Janné, Directrice Recrutement';
                $scope.phraseConsulte = 'Comment ça, un dév « ça reste devant son écran toute la journée sans parler » ? Tu vas voir !';
                $scope.expert = 'L’EXPERT';
                $scope.apprenti = 'L’APPRENTIE';
                $scope.nomConsulte = 'Bastien Bonnet, Consultant';
                $scope.rond1 = 'img/laetitia_janne.png';
                $scope.nom12 = "Laetitia Janné, Directrice Recrutement"
                $scope.quote1 = $sce.trustAsHtml('En faisant le match retour du Vis ma Vie, en tant que Coach Agile, auprès de Laurène, je ne m’imaginais pas du tout que cette expérience allait se révéler si étonnante, tant ma vision de leur métier était bien loin de la réalité. <br/><br/>En effet, cette journée allait être ponctuée de contextes tout aussi intéressants les uns que les autres. Laurène a en charge 80 personnes reparties sur 4 projets dans le cadre d’une transformation agile globale d’un grand compte du CAC40.  Elle fait partie d’un centre d’excellence agile transverse. Son planning est assez chargé et elle passe d’une réunion à une autre, d’un contexte projet à un autre et cela plusieurs fois par jour. Avec elle j’ai pu assister à deux séances de coaching très différentes tant la maturité des deux équipes impactées était hétéroclite. J’ai pu m’apercevoir que le métier de Laurène consistait à donner des conseils extrêmement opérationnels, bien loin des postures fumeuses des ayatollahs de la méthodologie telles qu’on en rencontre parfois dans ce métier. Son accompagnement délivre immédiatement de la valeur aux équipes. Malgré son jeune âge, Laurène fait preuve d’une maturité et d’une expérience assez exceptionnelles. J’ai tout simplement été bluffé par le niveau d’écoute de l’équipe et des managers vis à vis des conseils prodigués par Laurène. Elle vaut souvent parole d’évangile tout en facilitant le débat d’idées. J’ai également été frappé par sa capacité à changer de contexte fonctionnel et à chaque fois, à connaître assez précisément ce dont il s’agit. <br/><br/>Au delà des aspects très concrets, Laurène doit également rendre des comptes et évaluer la progression des équipes sur la voie de l’agilité au travers d’une grille constituée de critères très précis et alimentée de manière hebdomadaire. Cet exercice délicat requiert de fournir des faits susceptibles d’étayer la notation. Cette partie de pilotage permet de justifier les investissements sur les projets en coaching agile. Laurène maitrise là encore parfaitement le processus et chaque note est très bien argumentée. <br/><br/> Pour conclure, je dirais que cette immersion a été bénéfique pour moi. Comme le disent les homologues de Laurène, elle est la meilleure « VRP » de l’équipe agile. Moi j’ai adoré et finalement, il y a quelques années, je me serais bien vu dans ce métier !!! <br/><br/>Merci Laurène pour ce partage.');
                $scope.ccl = 'En conclusion : Bref, je crois qu’on peut le dire ; être DAF, c’est punk !'
                $scope.video = 'https://www.youtube.com/embed/os54MbZA_18';
                $scope.video_twitter = "http://twitter.com/intent/tweet/?url=https://bit.ly/XebianVMV-DAF&hashtags=XebianVMV&via=XebiaFr";
                $scope.video_google = "https://plus.google.com/share?url=https://bit.ly/XebianVMV-DAF";
                $scope.video_linkedin = "https://www.linkedin.com/cws/share?url=https://bit.ly/XebianVMV-DAF";
                $scope.video_facebook = "http://www.facebook.com/sharer.php?u=https://bit.ly/XebianVMV-DAF";
                $scope.blog_article = "http://blog.xebia.fr/2015/09/29/vis-ma-vie-episode-6-clement-daf-dun-jour";
                $scope.texte_MatchReturn = "VIS MA VIE DE DIRECTRICE RECRUTEMENT"
                $scope.lien_matchRetour = "#/details?id=Dir. Recrutement";

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


